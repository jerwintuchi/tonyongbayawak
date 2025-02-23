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
        description: "Specializes in machine learning and data analysis. Responsible for developing the core AI algorithms.",
        imageUrl: "/profile/anna-pfp.jpg",
        links: {
            linkedin: "https://www.linkedin.com/in/anna-mae-kathryn-co/",
            email: "coanna555@gmail.com"
        }
    },
    {
        name: "Joshua Miguel R. Tuan",
        role: "Full Stack Developer",
        description: "Expert in statistical analysis and model validation. Leads the data preprocessing and feature engineering.",
        imageUrl: "/profile/tu-pfp.jpg",
        links: {
            github: "https://github.com/joshuatuan",
            linkedin: "https://www.linkedin.com/in/joshua-miguel-tuan-21861b26a/",
            email: "itsjoshuatuan.com"
        }
    },
    {
        name: "Jerwin A. Peralta",
        role: "Full Stack Developer",
        description: "Creative designer focused on creating intuitive user interfaces and seamless user experiences.",
        imageUrl: "/profile/me-pfp.png",
        links: {
            github: "https://github.com/jerwintuchi",
            linkedin: "https://linkedin.com/in/mikejohnson",
            email: "jerwin.tuchi3@gmail.com"
        }
    }
];