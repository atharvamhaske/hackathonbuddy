
export type User = {
  id: string;
  name: string;
  avatar?: string;
  title: string;
  location: string;
  skills: string[];
  interests: string[];
  bio: string;
  hackathons: string[];
  availableForHackathons: boolean;
  github?: string;
  linkedin?: string;
  website?: string;
};

export const users: User[] = [
  {
    id: "user1",
    name: "Alex Johnson",
    title: "Front-end Developer",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "CSS", "NextJS", "Tailwind"],
    interests: ["Web Development", "UI/UX", "Open Source"],
    bio: "Front-end developer with 3 years of experience building responsive and accessible web applications.",
    hackathons: ["hackathon1", "hackathon3"],
    availableForHackathons: true,
    github: "https://github.com/alexj",
    linkedin: "https://linkedin.com/in/alexj"
  },
  {
    id: "user2",
    name: "Maya Patel",
    title: "Full-stack Developer",
    location: "New York, NY",
    skills: ["Python", "React", "Node.js", "PostgreSQL", "Docker"],
    interests: ["Data Visualization", "DevOps", "Microservices"],
    bio: "Full-stack developer passionate about building scalable and maintainable web applications.",
    hackathons: ["hackathon2"],
    availableForHackathons: true,
    github: "https://github.com/mayap",
    linkedin: "https://linkedin.com/in/mayap",
    website: "https://mayapatel.dev"
  },
  {
    id: "user3",
    name: "Daniel Kim",
    title: "Mobile Developer",
    location: "Seattle, WA",
    skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
    interests: ["Mobile Development", "User Experience", "Cross-platform"],
    bio: "Mobile developer specialized in creating beautiful and performant applications for iOS and Android.",
    hackathons: ["hackathon1"],
    availableForHackathons: false,
    github: "https://github.com/danielk"
  },
  {
    id: "user4",
    name: "Sarah Wilson",
    title: "Backend Developer",
    location: "Austin, TX",
    skills: ["Java", "Spring Boot", "AWS", "Kubernetes", "Microservices"],
    interests: ["Cloud Architecture", "Distributed Systems", "Performance"],
    bio: "Backend developer with expertise in building and deploying scalable microservices.",
    hackathons: ["hackathon2", "hackathon3"],
    availableForHackathons: true,
    github: "https://github.com/sarahw",
    linkedin: "https://linkedin.com/in/sarahw"
  },
  {
    id: "user5",
    name: "Carlos Mendez",
    title: "AI/ML Engineer",
    location: "Boston, MA",
    skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Machine Learning"],
    interests: ["Artificial Intelligence", "Computer Vision", "Neural Networks"],
    bio: "AI/ML engineer focused on developing intelligent systems and algorithms.",
    hackathons: [],
    availableForHackathons: true,
    github: "https://github.com/carlosm"
  },
  {
    id: "user6",
    name: "Lea Chen",
    title: "UI/UX Designer",
    location: "Los Angeles, CA",
    skills: ["UI/UX", "Figma", "Adobe XD", "User Research", "Prototyping"],
    interests: ["User-Centered Design", "Accessibility", "Interface Animation"],
    bio: "Designer who creates intuitive and engaging user experiences for web and mobile applications.",
    hackathons: ["hackathon1"],
    availableForHackathons: true,
    linkedin: "https://linkedin.com/in/leac",
    website: "https://leachen.design"
  },
  {
    id: "user7",
    name: "Jamal Davis",
    title: "DevOps Engineer",
    location: "Chicago, IL",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    interests: ["Infrastructure as Code", "Automation", "Cloud Architecture"],
    bio: "DevOps engineer specialized in automating and optimizing deployment pipelines.",
    hackathons: ["hackathon3"],
    availableForHackathons: false,
    github: "https://github.com/jamald"
  },
  {
    id: "user8",
    name: "Emily Rodriguez",
    title: "Blockchain Developer",
    location: "Miami, FL",
    skills: ["Solidity", "Ethereum", "Web3.js", "JavaScript", "Smart Contracts"],
    interests: ["Blockchain", "Decentralized Applications", "Cryptocurrencies"],
    bio: "Blockchain developer building decentralized applications and smart contracts.",
    hackathons: ["hackathon2"],
    availableForHackathons: true,
    github: "https://github.com/emilyr",
    linkedin: "https://linkedin.com/in/emilyr"
  }
];
