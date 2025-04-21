
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type HackathonCardProps = {
  id: string;
  title: string;
  organizer: string;
  startDate: string;
  endDate: string;
  location: string;
  mode: "remote" | "in-person" | "hybrid";
  participants: number;
  maxTeamSize: number;
  categories: string[];
  image?: string;
};

const HackathonCard = ({
  id,
  title,
  organizer,
  startDate,
  endDate,
  location,
  mode,
  participants,
  maxTeamSize,
  categories,
  image
}: HackathonCardProps) => {
  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  };

  return (
    <Card className="card-gradient overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div 
        className="h-32 bg-cover bg-center" 
        style={{ 
          backgroundImage: image ? `url(${image})` : 'linear-gradient(to right, #3b82f6, #8b5cf6)'
        }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black/40">
          <h3 className="font-bold text-white text-xl px-4 text-center">{title}</h3>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Organized by {organizer}</p>
          <div className="flex items-center text-sm space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
            </div>
          </div>
          <div className="flex items-center text-sm mt-1">
            <Globe className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{location} ({mode})</span>
          </div>
          <div className="flex items-center text-sm mt-1">
            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{participants} participants • Max team size: {maxTeamSize}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1 mt-2">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild className="w-full">
          <Link to={`/hackathons/${id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HackathonCard;
