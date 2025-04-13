import { Project } from "@/types/project";
import VIMessengerShowcase from "../../../../public/projects/vi-messenger.png";
import ProductPlatformShowcase from "../../../../public/projects/product-feedback.png";
import KanbanAppShowcase from '../../../../public/projects/kanban-app.png';
import InvoiceAppShowcase from '../../../../public/projects/invoice-app.png';
import FormCraftShowcase from '../../../../public/projects/form-craft.png';


const projects: Project[] = [
    {
      id: "form-craft",
      category: "Web App",
      name: "FormCraft",
      description: "FormCraft is an AI-powered no-code form builder that allows you to create responsive forms with ease. It features a drag-and-drop interface, file upload option, AI form creation, analytics dashboard and a wide range of customizations.",
      points: [
        "AI Form Builder",
        "Drag-and-Drop Interface",
        "Wide variety of Form Templates",
        "Real-Time Analytics Dashboard",
        "Wide Range of Field Types including File Uploads",
        "Conditional Logic & Validation",
        "Multi-Page Forms",
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Airtable",
        "Google APIs",
        "Webhooks",
        "ShadCN UI",
        "Gemini AI",
        "MongoDB",
      ],
      link: "https://form-craft-v1-beta.vercel.app",
      repo: "https://github.com/Varadarajan-M/form-craft",
      image: FormCraftShowcase,
    },
    {
      id: "vi-messenger",
      category: "PWA",
      name: "VI Messenger",
      description: `Feature rich chat app with personal and group chats, AI chat with realtime streaming
  responses powered by LLAMA 3, multimedia support, typing indicators, online stats, message reactions, message replies,
  limited time message updating and so much more...`,
      points: [
        "High quality file sharing",
        "Real time read-receipts",
        "AI assistant",
        "Install as PWA in any device - Fully responsive",
      ],
      tags: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Zustand",
        "Socket.io",
        "Express JS",
        "Mongo DB",
        "PWA",
        "Service Workers",
      ],
      link: "https://vi-messenger.onrender.com",
      repo: "https://github.com/Varadarajan-M/vi-messenger",
      image: VIMessengerShowcase,
    },
    {
      id: "product-platform",
      category: "Web App",
      name: "Product Platform",
      description: `A fully responsive web-based platform that empowers users to manage and showcase their products, as well as receive valuable product reviews. The platform features a public feedback forum, allowing registered users to upvote and share their insights and suggestions for products. The comment section enables users and product owners to engage in discussions under each feedback.`,
      points: [
        "Fully responsive design",
        "Public feedback forum with upvoting and commenting",
        "Comment section for user-product owner discussions",
        "Kanban-style roadmap and role based access management of tasks for effective software development lifecycle management",
      ],
      tags: [
        "Next JS",
        "React JS",
        "TypeScript",
        "SCSS",
        "MongoDB",
        "NextAuth",
        "React-hook-form",
        "React Beautiful DND",
        "Node JS",
        "Railway",
      ],
      link: "https://product-feedback-app-lime.vercel.app/home",
      repo: "https://github.com/Varadarajan-M/ProductFeedbackApp",
      image: ProductPlatformShowcase,
    },
    {
        id: 'kanban-app',
        category: 'Web App',
        name: 'Kanban Project Management',
        description: `A Kanban board-style web application designed to help users track their task lists for various projects. The app enables users to share their projects with others, promoting collaboration and teamwork. Shared projects can be easily cloned and added to personal Kanban boards. The app features a robust search function, allowing users to quickly find specific tasks and projects.`,
        points: [
            'Kanban board-style task tracking',
            'Project sharing and collaboration',
            'Easy cloning of shared projects',
            'Robust search function for efficient task management'
        ],
        tags: ['React JS', 'SCSS', 'Node JS', 'Express JS', 'Mongo DB', 'Railway', 'JWT'],
        repo: 'https://github.com/Varadarajan-M/Kanban-v2', 
        image:KanbanAppShowcase,
    },
    {
        id: 'invoice-manager',
        category: 'Web Application',
        name: 'Invoice Manager',
        description: `A fully responsive web application designed to help users manage their invoices with ease. The app allows users to create, read, update, and delete invoices with ease. The frontend features a theme switcher, dynamic forms, and smooth page transitions for an exceptional user experience.`,
        points: [
            'Create, Read, Update, and Delete invoices',
            'Fully responsive design',
            'Theme switcher for customizable UI',
            'Dynamic forms for efficient data entry',
            'Smooth page transitions for seamless navigation'
        ],
        tags: ['React JS', 'SCSS', 'Material UI', 'Bootstrap 5', 'Framer-motion', 'React-hook-form'],
        link: 'https://react-invoice-manager.netlify.app/', // You can add a link to the live demo or a specific page on the app
        repo: 'https://github.com/Varadarajan-M/Invoice-app', // Replace with your GitHub repository link
        image:InvoiceAppShowcase,
    }
  ];
  

export default projects