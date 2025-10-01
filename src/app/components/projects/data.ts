import { Project } from "@/types/project";
import VIMessengerShowcase from "../../../../public/projects/vi-messenger.png";
import ECGAnalysisShowcase from "../../../../public/projects/ecg analysis.png";
import VirtualPharmacyShowcase from "../../../../public/projects/virtual-pharmacy.png";
import ShravanShowcase from '../../../../public/projects/shravan.png';
import ApolloSpectraShowcase from '../../../../public/projects/appolo spectra.png';


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
      image: VirtualPharmacyShowcase,
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
      image: ECGAnalysisShowcase,
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
        name: 'Apollo Spectra – Lab Data Converter',
        description: `Contributed to a production-level automation system at Elimai.ai that streamlines lab data conversion and Excel report generation. This system demonstrates expertise in data processing automation and healthcare technology.`,
        points: [
            'Lab data conversion automation',
            'Excel report generation',
            'Patient visit number processing',
            'Data visualization and plotting',
            'Production-level system integration'
        ],
        tags: ['Python', 'Automation', 'Data Processing', 'Excel Integration', 'Healthcare Technology', 'Production Systems'],
        repo: 'https://github.com/lokavinashh2004',
        image: ApolloSpectraShowcase,
    },
    {
        id: 'spam-sms-detection',
        category: 'Machine Learning',
        name: 'Spam SMS Detection',
        description: `A machine learning project designed to detect spam messages (SMS) using a trained ML model. Users can input any text message and get instant spam detection results with high accuracy.`,
        points: [
            'SMS spam detection using ML model',
            'Text preprocessing and feature extraction',
            'High accuracy spam classification',
            'User-friendly web interface',
            'Real-time message analysis'
        ],
        tags: ['Python', 'Machine Learning', 'Natural Language Processing', 'Text Classification', 'Web Development'],
        repo: 'https://github.com/lokavinashh2004/Spam-SMS-Detection',
        image: VIMessengerShowcase,
    },
    {
        id: 'medical-transcription',
        category: 'AI Healthcare',
        name: 'Medical Transcription Demo',
        description: `A demo project developed for intern interview showcasing medical transcription capabilities. Demonstrates expertise in healthcare technology and AI applications.`,
        points: [
            'Medical transcription capabilities',
            'Healthcare technology demonstration',
            'AI-powered transcription',
            'Interview project showcase',
            'Medical data processing'
        ],
        tags: ['HTML', 'Medical AI', 'Healthcare Technology', 'Transcription', 'Web Development'],
        repo: 'https://github.com/lokavinashh2004/Medical-transcription-demo-project',
        image: VIMessengerShowcase,
    },
    {
        id: 'medpdf-summarizer',
        category: 'AI Healthcare',
        name: 'MedPDF – Medical PDF Summarizer',
        description: `An intelligent platform designed to extract and summarize key information from medical PDF documents using advanced Natural Language Processing techniques.`,
        points: [
            'Medical PDF document analysis',
            'AI-powered summarization',
            'Key information extraction',
            'Natural Language Processing',
            'Healthcare document processing'
        ],
        tags: ['HTML', 'Natural Language Processing', 'Medical AI', 'PDF Processing', 'Healthcare Technology'],
        repo: 'https://github.com/lokavinashh2004/Medical-pdf-intern-selection-project-2',
        image: VIMessengerShowcase,
    },
    {
        id: 'handwritten-text-extraction',
        category: 'Computer Vision',
        name: 'Handwritten Text Extraction',
        description: `A Flask-based web application that allows users to upload images containing handwritten text and automatically extracts the text using LLaMA Vision Model.`,
        points: [
            'Handwritten text recognition',
            'LLaMA Vision Model integration',
            'Image processing and OCR',
            'Flask web application',
            'Computer vision technology'
        ],
        tags: ['Python', 'Flask', 'LLaMA Vision', 'Computer Vision', 'OCR', 'Web Development'],
        repo: 'https://github.com/lokavinashh2004/Handwritten-to-text',
        image: VIMessengerShowcase,
    },
    {
        id: 'object-detection-yolov7',
        category: 'Computer Vision',
        name: 'Object Detection with YOLOv7',
        description: `A high-performance object detection system using the YOLOv7 architecture. Trained on a custom dataset for real-time and accurate detection across multiple object classes.`,
        points: [
            'YOLOv7 architecture implementation',
            'Custom dataset training',
            'Real-time object detection',
            'High accuracy detection',
            'Computer vision applications'
        ],
        tags: ['Python', 'YOLOv7', 'Deep Learning', 'Computer Vision', 'Object Detection', 'Machine Learning'],
        repo: 'https://github.com/lokavinashh2004/Object-Detection-with-YOLOv7',
        image: VIMessengerShowcase,
    },
    {
        id: 'object-detection-yolov5',
        category: 'Computer Vision',
        name: 'Object Detection using YOLOv5',
        description: `A deep learning project for real-time object detection using the YOLOv5 architecture. Trained on a custom dataset and fine-tuned for accurate detection across various object classes.`,
        points: [
            'YOLOv5 architecture implementation',
            'Custom dataset training',
            'Real-time object detection',
            'Fine-tuned model optimization',
            'Computer vision applications'
        ],
        tags: ['HTML', 'YOLOv5', 'Deep Learning', 'Computer Vision', 'Object Detection', 'Machine Learning'],
        repo: 'https://github.com/lokavinashh2004/Object-Detection-using-YOLOv5',
        image: VIMessengerShowcase,
    },
    {
        id: 'gdg-interview-portal',
        category: 'Web Development',
        name: 'GDG Interview Portal',
        description: `A dedicated platform to conduct interviews for GDG Ambassador selection. Streamlines the interview process with student registration, question management, evaluator access, and comprehensive evaluation system.`,
        points: [
            'Interview management system',
            'Student registration and management',
            'Question management system',
            'Evaluator access control',
            'Comprehensive evaluation system'
        ],
        tags: ['JavaScript', 'Web Development', 'Interview Management', 'Student Portal', 'Evaluation System'],
        repo: 'https://github.com/lokavinashh2004/Gdg-Interview',
        image: VIMessengerShowcase,
    },
    {
        id: 'medai-ecg-analyzer',
        category: 'AI Healthcare',
        name: 'MedAI: ECG Report Analyzer',
        description: `An AI-powered medical tool that analyzes ECG reports and compares past and present data using the Gemini API. Provides smart health insights, anomaly detection, and comprehensive medical analysis.`,
        points: [
            'ECG report analysis using Gemini API',
            'Past and present data comparison',
            'Smart health insights generation',
            'Anomaly detection capabilities',
            'Comprehensive medical analysis'
        ],
        tags: ['HTML', 'AI', 'Medical AI', 'ECG Analysis', 'Gemini API', 'Healthcare Technology'],
        repo: 'https://github.com/lokavinashh2004/medaii',
        image: VIMessengerShowcase,
    },
    {
        id: 'learning-guide-platform',
        category: 'AI Education',
        name: 'I Will Guide You',
        description: `An intelligent platform designed to help users discover personalized learning paths for mastering new skills or advancing their careers. Leverages AI to analyze resources and provide customized learning recommendations.`,
        points: [
            'Personalized learning path discovery',
            'AI-powered resource analysis',
            'Career advancement guidance',
            'Skill mastery recommendations',
            'Intelligent learning platform'
        ],
        tags: ['HTML', 'AI', 'Education Technology', 'Learning Platform', 'Career Development', 'Personalization'],
        repo: 'https://github.com/lokavinashh2004/i-will-guide-you',
        image: VIMessengerShowcase,
    },
    {
        id: 'gdg-online-exam',
        category: 'Web Development',
        name: 'GDG Online Exam Portal',
        description: `A web-based platform designed for conducting online exams efficiently. Provides a user-friendly interface for students to take tests and allows administrators to manage quizzes, questions, and student performance.`,
        points: [
            'Online exam management system',
            'Student test interface',
            'Administrator dashboard',
            'Quiz and question management',
            'Performance tracking and analytics'
        ],
        tags: ['JavaScript', 'Web Development', 'Online Education', 'Exam Management', 'Student Portal', 'Analytics'],
        repo: 'https://github.com/lokavinashh2004/gdg-online-exam',
        image: VIMessengerShowcase,
    }
  ];
  

export default projects