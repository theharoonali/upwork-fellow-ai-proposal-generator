import express, { Request, Response } from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/privacy-policy", async (req: Request, res: Response) => {
  try {
    const privacyPolicy = `
      Privacy Policy <br /> <br />

      Effective Date: 22-06-2023 <br /> <br />

      TheHaroonAli, A non-profit open-source project creator, respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our "Upwork Fellow - AI Proposal & Cover Letter Writer" Chrome extension. <br /><br />

      Information Collection and Use:<br />
      - We do not collect any personal information or user data through the Extension. <br />
      - The Extension operates locally on your device and does not transmit any data to our servers or third parties. <br /><br />

      Data Security:<br />
      - The Extension does not require any data transmission, ensuring the security of any information processed. <br /><br />

      Changes to This Privacy Policy:<br />
      - We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. <br /><br />

      Contact Us:<br />
      - If you have any questions about this Privacy Policy, please contact us at muhammadharoon1592@gmail.com <br /><br />

      Additional Information:<br />
      - ChatGPT API: Our extension utilizes the ChatGPT API hosted on our server to generate proposals and cover letters.<br />
      - Open Source Project: This extension is an open-source project. You can view the source code and contribute to its development on GitHub at <br /> <a href="https://github.com/theharoonali/upwork-fellow-ai-proposal-generator" target=”_blank”>https://github.com/theharoonali/upwork-fellow-ai-proposal-generator</a>
    `;

    res.status(200).send(privacyPolicy);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to retrieve privacy policy");
  }
});

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
