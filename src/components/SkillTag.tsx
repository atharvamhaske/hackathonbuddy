
import { cn } from "@/lib/utils";

type SkillTagProps = {
  skill: string;
  color?: "blue" | "green" | "purple" | "amber" | "pink";
};

// Map of skills to their default colors
const skillColorMap: Record<string, "blue" | "green" | "purple" | "amber" | "pink"> = {
  "React": "blue",
  "JavaScript": "amber",
  "TypeScript": "blue",
  "Python": "green",
  "Java": "amber",
  "UI/UX": "pink",
  "Node.js": "green",
  "NextJS": "purple",
  "Django": "green",
  "Flutter": "blue",
  "AWS": "amber",
  "Docker": "blue",
  "Kubernetes": "blue",
  "Machine Learning": "green",
  "Data Science": "purple",
  "Blockchain": "purple",
  "AI": "pink",
};

const SkillTag = ({ skill, color }: SkillTagProps) => {
  // Use the provided color or look up in the map, or default to blue
  const tagColor = color || skillColorMap[skill] || "blue";
  
  return (
    <span className={cn("skill-tag", `skill-tag-${tagColor}`)}>
      {skill}
    </span>
  );
};

export default SkillTag;
