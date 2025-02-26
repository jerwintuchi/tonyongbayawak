import { Database, Code } from "lucide-react";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { MdFormatPaint } from "react-icons/md";

// No need to call getBaseUrl() anymore since we'll use relative paths with Next.js Link
export const timelineData = [
    { title: "Title Proposal", date: "January 2022", description: "Initial brainstorming and project scope definition. Identified the need for extensive study of AXS to fill the gap in AI-powered trend forecasting in market analysis.", icon: FaLightbulb, link: "/about/title-proposal" },
    { title: "Research Phase", date: "February - May 2022", description: "Extensive literature review and market analysis. Studied existing solutions and identified gaps in current methodologies.", icon: GiArchiveResearch, link: "/about/research-phase" },
    { title: "Data Collection", date: "June - August 2022", description: "Gathered historical market data and began building our comprehensive dataset from various sources for training the Forecasting model.", icon: Database, link: "/about/data-collection" },
    { title: "Data Cleaning and Preprocessing", date: "September 2022", description: "Started developing our proprietary AI algorithms and testing different machine learning approaches.", icon: Code, link: "/about/data-cleaning" },
    { title: "Model Training and Fine-Tuning", date: "October - December 2022", description: "Conducted preliminary testing of our model and fine-tuned it based on comparison of forecast performance with other forecasting models.", icon: LuBrainCircuit, link: "/about/model-train-tune" }, // Updated icon to LuBrainCircuit", icon: LuBrainCircuit, link: "/about/initial-testing" },
    { title: "UI Development", date: "December 2022", description: "Designed and developed the user interface for easy interaction with our AI model.", icon: MdFormatPaint, link: "/about/ui-development" },
    { title: "Project Completion", date: "January 2023", description: "Successfully completed the project with validated results and comprehensive documentation.", icon: AiOutlineFileDone, link: "/about/project-completion" },
];