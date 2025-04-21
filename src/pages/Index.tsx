
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import UserCard from "@/components/UserCard";
import HackathonCard from "@/components/HackathonCard";
import { users } from "@/data/users";
import { hackathons } from "@/data/hackathons";
import Navigation from "@/components/Navigation";

const Index = () => {
  // Show a limited number of featured users and hackathons
  const featuredUsers = users.filter(user => user.availableForHackathons).slice(0, 4);
  const upcomingHackathons = hackathons.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-accent/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Find Your Perfect <span className="text-secondary">Hackathon</span> Team
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with skilled developers, designers, and innovators to build amazing projects together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              <Link to="/discover">Find Teammates</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/hackathons">Browse Hackathons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Developers Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Available for Hackathons</h2>
            <Button asChild variant="outline">
              <Link to="/discover">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredUsers.map(user => (
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
        </div>
      </section>

      {/* Upcoming Hackathons Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Upcoming Hackathons</h2>
            <Button asChild variant="outline">
              <Link to="/hackathons">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingHackathons.map(hackathon => (
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">How SkillSync Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Showcase your skills, experience, and interests to stand out to potential teammates.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Hackathons</h3>
              <p className="text-muted-foreground">
                Browse upcoming hackathons and find events that match your interests and availability.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Collaborate</h3>
              <p className="text-muted-foreground">
                Message potential teammates, form your dream team, and build amazing projects together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/90 to-accent/90 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Hackathon Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join SkillSync today and connect with thousands of developers, designers, and innovators.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/login">Get Started</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-primary to-accent rounded-md p-1.5">
                  <span className="text-primary-foreground font-bold text-xl">SS</span>
                </div>
                <span className="font-bold text-xl">SkillSync</span>
              </div>
              <p className="max-w-xs text-background/80">
                Connecting talented individuals for hackathons and collaborative projects.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li><Link to="/discover" className="text-background/70 hover:text-background">Discover</Link></li>
                  <li><Link to="/hackathons" className="text-background/70 hover:text-background">Hackathons</Link></li>
                  <li><Link to="/messages" className="text-background/70 hover:text-background">Messages</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-background/70 hover:text-background">About</Link></li>
                  <li><Link to="/contact" className="text-background/70 hover:text-background">Contact</Link></li>
                  <li><Link to="/careers" className="text-background/70 hover:text-background">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/terms" className="text-background/70 hover:text-background">Terms</Link></li>
                  <li><Link to="/privacy" className="text-background/70 hover:text-background">Privacy</Link></li>
                  <li><Link to="/cookies" className="text-background/70 hover:text-background">Cookies</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>© 2025 SkillSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
