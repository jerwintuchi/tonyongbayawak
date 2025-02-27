export interface TeamMember {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    links: {
        github?: string;
        linkedin?: string;
        email?: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        name: "Anna Mae Kathryn O. Co",
        role: "Lead Test Engineer",
        description: "Specializes in testing both manual and automated, including load testing, compatibility testing. Responsible for ensuring the robustness and reliability of the web app.",
        imageUrl: "/profile/anna-pfp.jpg",
        links: {
            linkedin: "https://www.linkedin.com/in/anna-mae-kathryn-co/",
            email: "coanna555@gmail.com"
        }
    },
    {
        name: "Joshua Miguel R. Tuan",
        role: "Software Engineer",
        description: "Created the frontend and processed the test set from the API. Setup the data fetching and preprocessing script to generate the test set. Collaborated with Jerwin Peralta to optimize the AI model.",
        imageUrl: "/profile/tu-pfp.jpg",
        links: {
            github: "https://github.com/joshuatuan",
            linkedin: "https://www.linkedin.com/in/joshua-miguel-tuan-21861b26a/",
            email: "itsjoshuatuan.com"
        }
    },
    {
        name: "Jerwin A. Peralta",
        role: "Software Engineer",
        description: "Trained the AI model through comparison of different models, performed feature selection and selected the best model based on accuracy. Also contributed to the frontend development to ensure a seamless user experience.",
        imageUrl: "/profile/me-pfp.png",
        links: {
            github: "https://github.com/jerwintuchi",
            linkedin: "https://linkedin.com/in/jerwin-peralta-8a3826240",
            email: "jerwin.tuchi3@gmail.com"
        }
    }
];
