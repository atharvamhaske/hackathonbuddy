
import { useState } from "react";
import { hackathons } from "@/data/hackathons";
import HackathonCard from "@/components/HackathonCard";
import Navigation from "@/components/Navigation";
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
import { Badge } from "@/components/ui/badge";

// Get all unique categories across hackathons
const allCategories = Array.from(
  new Set(hackathons.flatMap(hackathon => hackathon.categories))
).sort();

// Get all unique modes
const allModes = Array.from(
  new Set(hackathons.map(hackathon => hackathon.mode))
);

const Hackathons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMode, setSelectedMode] = useState<string>("");
  
  // Filter hackathons based on search term, selected categories, and mode
  const filteredHackathons = hackathons.filter(hackathon => {
    // Filter by search term (title or description)
    const matchesSearch = searchTerm === "" || 
      hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by categories (if any selected)
    const matchesCategories = selectedCategories.length === 0 || 
      selectedCategories.some(category => hackathon.categories.includes(category));
    
    // Filter by mode (if selected)
    const matchesMode = selectedMode === "" || 
      hackathon.mode === selectedMode;
    
    return matchesSearch && matchesCategories && matchesMode;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Upcoming Hackathons</h1>
            <p className="text-muted-foreground">
              Discover hackathons to showcase your skills and build amazing projects
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex gap-2">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search hackathons..."
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
                    {(selectedCategories.length > 0 || selectedMode) && (
                      <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {(selectedCategories.length > 0 ? 1 : 0) + (selectedMode ? 1 : 0)}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Hackathons</SheetTitle>
                    <SheetDescription>
                      Find the perfect hackathon for your interests
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-4 space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {allCategories.map(category => (
                          <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              selectedCategories.includes(category)
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-3">Mode</h3>
                      <Select
                        value={selectedMode}
                        onValueChange={setSelectedMode}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any mode</SelectItem>
                          {allModes.map(mode => (
                            <SelectItem key={mode} value={mode}>
                              {mode.charAt(0).toUpperCase() + mode.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <SheetFooter>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedCategories([]);
                        setSelectedMode("");
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
        {(selectedCategories.length > 0 || selectedMode) && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            
            {selectedCategories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {category}
                <span className="font-bold">×</span>
              </button>
            ))}
            
            {selectedMode && (
              <button
                onClick={() => setSelectedMode("")}
                className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)}
                <span className="font-bold">×</span>
              </button>
            )}
            
            <button
              onClick={() => {
                setSelectedCategories([]);
                setSelectedMode("");
              }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Clear all
            </button>
          </div>
        )}
        
        {/* Results Count */}
        <p className="mb-6 text-sm text-muted-foreground">
          Showing {filteredHackathons.length} {filteredHackathons.length === 1 ? 'hackathon' : 'hackathons'}
        </p>
        
        {/* Hackathon Cards */}
        {filteredHackathons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHackathons.map(hackathon => (
              <HackathonCard
                key={hackathon.id}
                id={hackathon.id}
                title={hackathon.title}
                organizer={hackathon.organizer}
                startDate={hackathon.startDate}
                endDate={hackathon.endDate}
                location={hackathon.location}
                mode={hackathon.mode}
                participants={hackathon.participants}
                maxTeamSize={hackathon.maxTeamSize}
                categories={hackathon.categories}
                image={hackathon.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No hackathons found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search term
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategories([]);
                setSelectedMode("");
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

export default Hackathons;
