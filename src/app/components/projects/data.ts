import { Project } from "@/types/project";
import VIMessengerShowcase from "../../../../public/projects/vi-messenger.png";
import ProductPlatformShowcase from "../../../../public/projects/product-feedback.png";
import KanbanAppShowcase from '../../../../public/projects/kanban-app.png';
import InvoiceAppShowcase from '../../../../public/projects/invoice-app.png';
import FormCraftShowcase from '../../../../public/projects/form-craft.png';
import ShravanShowcase from '../../../../public/projects/shravan.png';


const projects: Project[] = [
    {
      id: "virtual-pharmacy",
      category: "AI Healthcare",
      name: "Virtual Pharmacy",
      description: "An AI-powered virtual pharmacy system that suggests medicines based on input symptoms and disease analysis. Currently in development, this system aims to provide intelligent healthcare recommendations.",
      points: [
        "AI-powered medicine suggestion system",
        "Symptom and disease analysis",
        "Intelligent healthcare recommendations",
        "User-friendly interface",
        "Medical knowledge integration",
      ],
      tags: [
        "Python",
        "Machine Learning",
        "Healthcare AI",
        "Natural Language Processing",
        "Web Development",
        "Data Analysis",
      ],
      link: "https://virtual-pharmacy.onrender.com/",
      repo: "https://github.com/lokavinashh2004",
      image: VIMessengerShowcase,
    },
    {
      id: "ecg-analysis",
      category: "Deep Learning",
      name: "AI-Powered ECG Analysis",
      description: "Designed and implemented a deep learning model for ECG analysis to detect potential heart conditions. Developed during GDG Hackathon, this project demonstrates expertise in medical AI and deep learning.",
      points: [
        "Deep learning model for ECG analysis",
        "Heart condition detection",
        "Medical AI application",
        "GDG Hackathon project",
        "Healthcare technology innovation",
      ],
      tags: [
        "Python",
        "Deep Learning",
        "TensorFlow",
        "PyTorch",
        "Medical AI",
        "ECG Analysis",
        "Healthcare",
      ],
      repo: "https://github.com/lokavinashh2004",
      image: ProductPlatformShowcase,
    },
    {
        id: 'shravan-app',
        category: 'AI Speech Processing',
        name: 'Shravan – Speech-to-Text Web App',
        description: `Built from scratch during internship at Elimai.ai. The system transcribes customer–sales executive call recordings and provides insights such as points of improvement, sales pitch analysis, and conversational effectiveness.`,
        points: [
            'Speech-to-text transcription',
            'Sales call analysis and insights',
            'Conversational effectiveness metrics',
            'Points of improvement identification',
            'Real-time processing capabilities'
        ],
        tags: ['Python', 'Speech Processing', 'Natural Language Processing', 'Machine Learning', 'Web Development', 'Analytics'],
        repo: 'https://github.com/lokavinashh2004', 
        image: ShravanShowcase,
    },
    {
        id: 'apollo-spectra',
        category: 'Process Automation',
        name: 'Apollo Spectra – Process Automation',
        description: `Contributed to a production-level automation system at Elimai.ai that streamlines plotting values into Excel, reducing manual effort and increasing efficiency. This system demonstrates expertise in automation and data processing.`,
        points: [
            'Production-level automation system',
            'Excel data processing automation',
            'Manual effort reduction',
            'Efficiency improvement',
            'Data visualization and plotting'
        ],
        tags: ['Python', 'Automation', 'Data Processing', 'Excel Integration', 'Process Optimization', 'Production Systems'],
        repo: 'https://github.com/lokavinashh2004',
        image: InvoiceAppShowcase,
    }
  ];
  

export default projects