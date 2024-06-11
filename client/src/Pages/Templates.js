import React, { useState } from 'react';
import TopBar from '../components/topBar';
import TemplateCard from '../components/TemplateCard';
import Button from '../components/Button';

const Templates = () => {
  const [templates, setTemplates] = useState([]);

  const createTemplate = () => {
    const newTemplate = { title: "New Template" };
    setTemplates([...templates, newTemplate]);
  };

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden">
      <TopBar heading="Templates" />
      <div className="p-4">
        {templates.map((template, index) => (
          <TemplateCard key={index} title={template.title} />
        ))}
      </div>
      <div className="flex justify-between items-center p-4 border-t border-gray-300">
        <span>{`${templates.length}/2 Templates created`}</span>
        <Button text="Create Template" onClick={createTemplate} />
      
      </div>
    </div>
  );
};

export default Templates;
