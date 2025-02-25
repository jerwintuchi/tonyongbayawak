import { Database, Code } from "lucide-react";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { GrTest } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import { MdFormatPaint } from "react-icons/md";

// No need to call getBaseUrl() anymore since we'll use relative paths with Next.js Link
export const timelineData = [
    { title: "Title Proposal", date: "March 2022", description: "Initial brainstorming and project scope definition. Identified the need for extensive study of AXS to fill the gap in AI-powered trend forecasting in market analysis.", icon: FaLightbulb, link: "/about/title-proposal" },
    { title: "Research Phase", date: "April - June 2022", description: "Extensive literature review and market analysis. Studied existing solutions and identified gaps in current methodologies.", icon: GiArchiveResearch, link: "/about/research-phase" },
    { title: "Data Collection", date: "June - August 2022", description: "Gathered historical market data and began building our comprehensive dataset from various sources for training the Forecasting model.", icon: Database, link: "/about/data-collection" },
    { title: "Model Development", date: "September - December 2022", description: "Started developing our proprietary AI algorithms and testing different machine learning approaches.", icon: Code, link: "/about/model-development" },
    { title: "Initial Testing", date: "October 2022", description: "Conducted preliminary testing of our model with historical data and achieved promising results.", icon: GrTest, link: "/about/initial-testing" },
    { title: "Model Fine-Tuning", date: "November - December 2022", description: "Fine-tuned our algorithms based on testing results and implemented advanced features.", icon: LuBrainCircuit, link: "/about/model-fine-tuning" },
    { title: "UI Development", date: "November 2022", description: "Designed and developed the user interface for easy interaction with our AI model.", icon: MdFormatPaint, link: "/about/ui-development" },
    { title: "Project Completion", date: "Januray 2023", description: "Successfully completed the project with validated results and comprehensive documentation.", icon: AiOutlineFileDone, link: "/about/project-completion" },
];