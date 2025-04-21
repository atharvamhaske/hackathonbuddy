
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SkillTag from "./SkillTag";
import { MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

type UserCardProps = {
  id: string;
  name: string;
  avatar?: string;
  title: string;
  location: string;
  skills: string[];
  availableForHackathons: boolean;
};

const UserCard = ({
  id,
  name,
  avatar,
  title,
  location,
  skills,
  availableForHackathons
}: UserCardProps) => {
  // Create initials from name for avatar fallback
  const initials = name
    .split(" ")
    .map(part => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <Card className="card-gradient overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          {availableForHackathons && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              Available
            </span>
          )}
        </div>
        <div className="space-y-1 mt-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-muted-foreground text-sm">{title}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap mt-2">
          {skills.slice(0, 4).map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
          {skills.length > 4 && (
            <span className="text-sm text-muted-foreground mt-1 ml-1">
              +{skills.length - 4} more
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button asChild variant="outline" size="sm">
          <Link to={`/profile/${id}`}>
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </Button>
        <Button asChild variant="default" size="sm">
          <Link to={`/messages/${id}`}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
