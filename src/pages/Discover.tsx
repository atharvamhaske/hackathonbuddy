
import { useState } from "react";
import { users } from "@/data/users";
import UserCard from "@/components/UserCard";
import Navigation from "@/components/Navigation";
import SkillTag from "@/components/SkillTag";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Get all unique skills across users
const allSkills = Array.from(
  new Set(users.flatMap(user => user.skills))
).sort();

// Get all unique locations
const allLocations = Array.from(
  new Set(users.map(user => user.location))
).sort();

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [availableOnly, setAvailableOnly] = useState(false);
  
  // Filter users based on search term, selected skills, location, and availability
  const filteredUsers = users.filter(user => {
    // Filter by search term (name or title)
    const matchesSearch = searchTerm === "" || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by skills (if any selected)
    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.every(skill => user.skills.includes(skill));
    
    // Filter by location (if selected)
    const matchesLocation = selectedLocation === "" || 
      user.location === selectedLocation;
    
    // Filter by availability
    const matchesAvailability = !availableOnly || user.availableForHackathons;
    
    return matchesSearch && matchesSkills && matchesLocation && matchesAvailability;
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Discover Talent</h1>
            <p className="text-muted-foreground">
              Find the perfect teammates for your next hackathon
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex gap-2">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name or title..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                    {(selectedSkills.length > 0 || selectedLocation || availableOnly) && (
                      <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {(selectedSkills.length > 0 ? 1 : 0) + (selectedLocation ? 1 : 0) + (availableOnly ? 1 : 0)}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Users</SheetTitle>
                    <SheetDescription>
                      Narrow down results by skills, location, and availability
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-4 space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {allSkills.map(skill => (
                          <button
                            key={skill}
                            onClick={() => toggleSkill(skill)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              selectedSkills.includes(skill)
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-3">Location</h3>
                      <Select
                        value={selectedLocation}
                        onValueChange={setSelectedLocation}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any location</SelectItem>
                          {allLocations.map(location => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="available"
                        checked={availableOnly}
                        onCheckedChange={(checked) => 
                          setAvailableOnly(checked as boolean)
                        }
                      />
                      <Label htmlFor="available">Available for hackathons only</Label>
                    </div>
                  </div>
                  
                  <SheetFooter>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedSkills([]);
                        setSelectedLocation("");
                        setAvailableOnly(false);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        
        {/* Active Filters */}
        {(selectedSkills.length > 0 || selectedLocation || availableOnly) && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            
            {selectedSkills.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {skill}
                <span className="font-bold">×</span>
              </button>
            ))}
            
            {selectedLocation && (
              <button
                onClick={() => setSelectedLocation("")}
                className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {selectedLocation}
                <span className="font-bold">×</span>
              </button>
            )}
            
            {availableOnly && (
              <button
                onClick={() => setAvailableOnly(false)}
                className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                Available Only
                <span className="font-bold">×</span>
              </button>
            )}
            
            <button
              onClick={() => {
                setSelectedSkills([]);
                setSelectedLocation("");
                setAvailableOnly(false);
              }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Clear all
            </button>
          </div>
        )}
        
        {/* Results Count */}
        <p className="mb-6 text-sm text-muted-foreground">
          Showing {filteredUsers.length} {filteredUsers.length === 1 ? 'user' : 'users'}
        </p>
        
        {/* User Cards */}
        {filteredUsers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredUsers.map(user => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                avatar={user.avatar}
                title={user.title}
                location={user.location}
                skills={user.skills}
                availableForHackathons={user.availableForHackathons}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No users found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search term
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedSkills([]);
                setSelectedLocation("");
                setAvailableOnly(false);
              }}
            >
              Reset All Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Discover;
