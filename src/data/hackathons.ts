
export type Hackathon = {
  id: string;
  title: string;
  organizer: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  mode: "remote" | "in-person" | "hybrid";
  participants: number;
  maxTeamSize: number;
  categories: string[];
  prizes: string[];
  image?: string;
};

export const hackathons: Hackathon[] = [
  {
    id: "hackathon1",
    title: "TechCrunch Disrupt Hackathon",
    organizer: "TechCrunch",
    description: "Join the most anticipated hackathon of the year at TechCrunch Disrupt, where innovators from around the world come together to build groundbreaking solutions.",
    startDate: "2025-06-15",
    endDate: "2025-06-17",
    location: "San Francisco, CA",
    mode: "in-person",
    participants: 245,
    maxTeamSize: 4,
    categories: ["AI", "Fintech", "Sustainability", "Health"],
    prizes: ["$20,000 Grand Prize", "Conference Passes", "VC Meetings"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "hackathon2",
    title: "World Blockchain Hackathon",
    organizer: "Blockchain Foundation",
    description: "Build innovative solutions leveraging blockchain technology to solve real-world problems. Open to developers of all experience levels.",
    startDate: "2025-07-08",
    endDate: "2025-07-10",
    location: "Virtual",
    mode: "remote",
    participants: 320,
    maxTeamSize: 5,
    categories: ["Blockchain", "DeFi", "Web3", "NFT"],
    prizes: ["5 ETH First Prize", "3 ETH Second Prize", "1 ETH Third Prize"]
  },
  {
    id: "hackathon3",
    title: "Climate Tech Hackathon",
    organizer: "Green Future Initiative",
    description: "Develop solutions addressing climate change challenges using technology. Focus areas include carbon tracking, renewable energy, and sustainable practices.",
    startDate: "2025-08-20",
    endDate: "2025-08-22",
    location: "New York, NY",
    mode: "hybrid",
    participants: 180,
    maxTeamSize: 4,
    categories: ["CleanTech", "Sustainability", "IoT", "Data Science"],
    prizes: ["$15,000 in Grants", "Incubator Access", "Mentorship"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "hackathon4",
    title: "GenAI Innovation Challenge",
    organizer: "AI Research Foundation",
    description: "Push the boundaries of generative AI applications across industries. Open to developers, designers, and AI enthusiasts.",
    startDate: "2025-09-05",
    endDate: "2025-09-07",
    location: "Virtual",
    mode: "remote",
    participants: 280,
    maxTeamSize: 3,
    categories: ["Generative AI", "LLMs", "Computer Vision", "Creative Tech"],
    prizes: ["$25,000 Prize Pool", "Computing Credits", "AI Hardware"]
  }
];
