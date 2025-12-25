import { Project } from "../types";

export const projectsData: Project[] = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive personal website to showcase my projects, skills, and experience.",
      fullDescription:
        "The website you are viewing right now, is my personal portfolio website built to present my background, technical skills, and projects in a creative way. The site is fully responsive, features smooth animations, and focuses on clean UI/UX. The website is built with modern frontend tools.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
      ],
      liveUrl: "https://dianawijaya.id",
      githubUrl: "https://github.com/DianaWijaya/diana-personal-website",
    },
    {
      "id": 2,
      "title": "Book Web Crawling & Monitoring System",
      "description": "A full Python-based web crawler, scheduler, and API for scraping and monitoring data from books-to-scrape.",
      "fullDescription": "A complete book-scraping system built with Python with BeautifulSoup, custom scheduler, and FastAPI. The crawler extracts book titles, prices, ratings, categories, and descriptions from books.toscrape.com and stores them in MongoDB. A daily scheduler detects content changes and generates CSV reports, and lastly, a FastAPI service exposes endpoints with API-key authentication.",
      "technologies": [
        "Python",
        "FastAPI",
        "MongoDB",
        "BeautifulSoup",
        "APScheduler",
      ],
      "liveUrl": "",
      "githubUrl": "https://github.com/DianaWijaya/book-web-crawling-project"
    },
    {
      id: 3,
      title: "Finance Tracker Web App - Costally",
      description:
        "A personal finance platform featuring AI-powered budget assistance, expense tracking, and real-time financial insights.",
      fullDescription:
        "A personal finance management platform that helps users track expenses, manage income, and apply zero-based budgeting with real-time visibility into spending and income. The app features AI-powered budget assistance using Google Gemini AI to provide personalized budgeting tips and financial insights. Users can link bank accounts for automated transaction tracking, categorize expenses, and set financial goals. The platform offers interactive analytics with charts and graphs to visualize spending patterns and progress towards goals, and is powered by a smart AI chatbot for instant financial support.",
      technologies: [
        "React Router",
        "TypeScript",
        "Node.js",
        "Prisma",
        "Supabase",
        "Tailwind CSS",
        "Google Gemini AI",
        "OAuth (bcrypt)",
      ],
      liveUrl: "https://costally.vercel.app",
      githubUrl: "https://github.com/DianaWijaya/budget-planner-project"
    },
    {
      "id": 4,
      "title": "Supermarket Point of Sale System",
      "description": "A POS system built with Laravel frontend and Fiber/Go backend with PostgreSQL, supporting orders, products, transactions, and sales reporting.",
      "fullDescription": "A full-stack Point of Sale system using Laravel for the frontend and Fiber/Go for the backend. It supports managing orders, products, and transactions, with daily and monthly sales reports, PostgreSQL integration, RESTful API endpoints, and a clean UI. Includes full CRUD operations, real-time order management, and structured backend logic.",
      "technologies": [
        "Laravel",
        "PHP",
        "Go (Fiber)",
        "PostgreSQL",
        "RestAPI",
      ],
      "liveUrl": "",
      "githubUrl": "https://github.com/DianaWijaya/point-of-sale-project"
    },
    {
      id: 5,
      title: "JavaScript Tetris Game",
      description: "A classic Tetris remake with all 7 tetrominoes, rotation system, scoring, levels, and fast-paced gameplay.",
      fullDescription: "A modern TypeScript-based Tetris featuring all seven tetrominoes, smooth rotation with wall kicks, progressive speed levels, collision detection, instant drop, and responsive controls.",
      technologies: [
        "TypeScript", 
        "RxJS", 
        "HTML5 SVG", 
        "CSS3", 
        "Vite", 
        "Functional Programming"
      ],
      liveUrl: "https://diana-tetris-game.vercel.app",
      githubUrl: "https://github.com/DianaWijaya/javascript-tetris-game",
    },
    {
      id: 6,
      title: "TinyML Model Downsizing Tool",
      description:
        "A TinyML optimization and deployment project that compresses deep learning models for real-time human detection on microcontrollers.",
      fullDescription:
        "This project focuses on optimizing and deploying a human detection deep learning model on resource-constrained microcontrollers using TinyML techniques. The core objective was to eliminate server-side inference in surveillance systems by enabling fully on-device intelligence.\n\nThe project involved extensive research and implementation of model downsizing techniques including Neural Architecture Search (MCUNet & OFA), channel and block-level pruning, Bayesian optimization, int8 quantization, and knowledge distillation. A MobileNetV2-based model was compressed by nearly 900% while maintaining reliable accuracy and real-time performance.\n\nThe final optimized model was successfully deployed on an Arduino Nano 33 BLE Sense with an Arducam camera, achieving real-time human detection with a model size under 1MB and low memory usage.\n\nTo make TinyML optimization more accessible, a Streamlit-based Model Downsizing Tool was developed. This tool allows users to upload their own MobileNetV2 models and apply pruning, quantization, fine-tuning, and knowledge distillation through a user-friendly interface, with downloadable PyTorch and TFLite outputs ready for embedded deployment.",
      technologies: [
        "Python",
        "Streamlit",
        "C++",
        "PyTorch",
        "TinyML",
        " TFLite",
        "Arduino",
      ],
      liveUrl: "https://downsizing-tool-v2.streamlit.app",
      githubUrl: "https://github.com/DianaWijaya/MCS14-Model-Downsizing-Tool-Streamlit",
    },
    {
      id: 7,
      title: "Baking Recipe Mobile App",
      description: "A simple mobile app for browsing and saving baking recipes, with ingredient lists and step-by-step instructions.",
      fullDescription: "",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
];