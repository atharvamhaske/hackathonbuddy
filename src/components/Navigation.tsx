
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent rounded-md p-1.5">
              <span className="text-primary-foreground font-bold text-xl">SS</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">SkillSync</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/discover" className="text-foreground/80 hover:text-foreground transition">Discover</Link>
            <Link to="/hackathons" className="text-foreground/80 hover:text-foreground transition">Hackathons</Link>
            <Link to="/messages" className="text-foreground/80 hover:text-foreground transition">Messages</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search developers..." className="pl-8 w-[200px] lg:w-[300px]" />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link to="/profile" className="w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="w-full">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/login" className="w-full">Sign in</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
