
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { users } from "@/data/users";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

// Type for a message
type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
};

// Mock conversations data
const mockConversations: Record<string, Message[]> = {
  user2: [
    {
      id: "msg1",
      senderId: "currentUser",
      receiverId: "user2",
      content: "Hi Maya, I saw your profile and I'm interested in collaborating on the Blockchain Hackathon. Are you still looking for team members?",
      timestamp: new Date("2025-04-19T10:30:00"),
    },
    {
      id: "msg2",
      senderId: "user2",
      receiverId: "currentUser",
      content: "Hey there! Yes, I'm still looking for team members. What skills do you bring to the table?",
      timestamp: new Date("2025-04-19T10:35:00"),
    },
    {
      id: "msg3",
      senderId: "currentUser",
      receiverId: "user2",
      content: "I'm a full-stack developer with experience in React, Node.js, and I've done some blockchain work with Ethereum and Solidity.",
      timestamp: new Date("2025-04-19T10:40:00"),
    },
    {
      id: "msg4",
      senderId: "user2",
      receiverId: "currentUser",
      content: "That sounds perfect! I'm looking for someone with exactly those skills. Would you like to meet up to discuss the project further?",
      timestamp: new Date("2025-04-19T10:45:00"),
    },
  ],
  user4: [
    {
      id: "msg5",
      senderId: "currentUser",
      receiverId: "user4",
      content: "Hello Sarah, I noticed you're participating in the Climate Tech Hackathon. I'm interested in joining your team if you have space.",
      timestamp: new Date("2025-04-20T09:15:00"),
    },
    {
      id: "msg6",
      senderId: "user4",
      receiverId: "currentUser",
      content: "Hi! Thanks for reaching out. We're looking for a frontend developer. Would that align with your skills?",
      timestamp: new Date("2025-04-20T09:30:00"),
    },
  ],
};

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState<string | null>("user2");
  const [newMessage, setNewMessage] = useState("");
  const [conversations, setConversations] = useState(mockConversations);
  
  // Filter users who have a conversation
  const contacts = users.filter(user => 
    Object.keys(conversations).includes(user.id)
  );
  
  // Format timestamp for display
  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Send a new message
  const sendMessage = () => {
    if (!selectedContact || !newMessage.trim()) return;
    
    const newMsg: Message = {
      id: `msg${Date.now()}`,
      senderId: "currentUser",
      receiverId: selectedContact,
      content: newMessage,
      timestamp: new Date(),
    };
    
    setConversations(prev => ({
      ...prev,
      [selectedContact]: [...(prev[selectedContact] || []), newMsg],
    }));
    
    setNewMessage("");
  };
  
  // Handle key press for sending messages
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[70vh]">
          {/* Contacts Sidebar */}
          <div className="md:col-span-1 border rounded-lg overflow-hidden">
            <div className="p-4 border-b bg-secondary/30">
              <h2 className="font-semibold">Conversations</h2>
            </div>
            <div className="overflow-y-auto h-[calc(70vh-66px)]">
              {contacts.map(contact => {
                // Get the last message in the conversation
                const convo = conversations[contact.id] || [];
                const lastMessage = convo[convo.length - 1];
                
                // Create initials for avatar
                const initials = contact.name
                  .split(" ")
                  .map(part => part[0])
                  .join("")
                  .toUpperCase()
                  .substring(0, 2);
                
                return (
                  <button
                    key={contact.id}
                    className={cn(
                      "w-full text-left p-3 hover:bg-secondary/40 transition-colors",
                      selectedContact === contact.id && "bg-secondary/60"
                    )}
                    onClick={() => setSelectedContact(contact.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-medium truncate">{contact.name}</h3>
                          {lastMessage && (
                            <span className="text-xs text-muted-foreground">
                              {formatTimestamp(lastMessage.timestamp)}
                            </span>
                          )}
                        </div>
                        {lastMessage && (
                          <p className="text-sm text-muted-foreground truncate">
                            {lastMessage.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Messages Panel */}
          <div className="md:col-span-3 border rounded-lg overflow-hidden flex flex-col">
            {selectedContact ? (
              <>
                {/* Chat header */}
                <div className="p-4 border-b bg-secondary/30 flex items-center space-x-3">
                  {contacts.find(c => c.id === selectedContact) && (
                    <>
                      <Avatar>
                        <AvatarImage 
                          src={contacts.find(c => c.id === selectedContact)?.avatar} 
                          alt={contacts.find(c => c.id === selectedContact)?.name} 
                        />
                        <AvatarFallback>
                          {contacts.find(c => c.id === selectedContact)?.name
                            .split(" ")
                            .map(part => part[0])
                            .join("")
                            .toUpperCase()
                            .substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="font-semibold">
                          {contacts.find(c => c.id === selectedContact)?.name}
                        </h2>
                        <p className="text-xs text-muted-foreground">
                          {contacts.find(c => c.id === selectedContact)?.title}
                        </p>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(70vh-154px)]">
                  {conversations[selectedContact]?.map((message) => (
                    <div 
                      key={message.id}
                      className={cn(
                        "flex",
                        message.senderId === "currentUser" ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[75%] px-4 py-2 rounded-lg",
                          message.senderId === "currentUser" 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary"
                        )}
                      >
                        <p>{message.content}</p>
                        <p className={cn(
                          "text-xs mt-1", 
                          message.senderId === "currentUser" 
                            ? "text-primary-foreground/70" 
                            : "text-muted-foreground"
                        )}>
                          {formatTimestamp(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message input */}
                <div className="p-3 border-t">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">No conversation selected</h3>
                  <p className="text-muted-foreground">
                    Select a conversation from the sidebar to start chatting
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;
