import express, { Request, Response } from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", async (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.post("/generate-proposal", async (req: Request, res: Response) => {
  try {
    const { createProposal, apiKey, proposal } = req.body;
    const { name, email, template, instructions, jobDetails } = createProposal;

    let proposalText = `Please help me create a project proposal. My name is ${name}${
      email ? ` and my email is ${email}` : ""
    }. I am a ${template}. ${
      instructions ? "AI Instructions: " + instructions + ". " : ""
    } ${jobDetails ? "\n\nMy Job Details:\n" : ""}`;

    if (jobDetails) {
      jobDetails.forEach((job, index) => {
        proposalText += `${index + 1}. Title: ${job.title}, Experience: ${
          job.experience
        } years, Job Description / Stack: ${job.description}\n`;
      });
    }

    const openai = new OpenAI({
      apiKey: apiKey || process.env.OPENAI_API_KEY,
    });

    const systemMessage = `${proposalText}\nThis is the job description provided by some client: ${proposal}\n\nStart with Dear Client, Create a compelling proposal that speaks directly to your needs, adding a personal touch throughout. Ensure each paragraph ends naturally. Please ensure the text does not appear artificially generated. Do not add any fillers like for example [name], just provide me the proposal. Important to add </br> tag after each paragraph. (Important note: only talk about my relivant job experience to the client's description)`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: systemMessage }],
      model: "gpt-4o",
    });

    const responseContent = completion.choices[0].message.content;
    if (!responseContent) {
      throw new Error("Failed to generate proposal");
    }

    res.status(200).json({
      status: 200,
      response: responseContent,
    });
  } catch (err: any) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
