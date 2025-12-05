import { useEffect, useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const DashboardHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  return (
    <header className="h-16 border-b border-border glass flex items-center justify-between px-6">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <SidebarTrigger className="hover:bg-primary/10 transition-colors" />
        <h2 className="text-lg font-semibold hidden md:block">Dashboard</h2>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full"></span>
        </Button>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <Avatar>
            {user?.photoURL ? (
              <AvatarImage src={user.photoURL} alt={user.displayName || "User"} />
            ) : (
              <AvatarFallback className="bg-primary text-primary-foreground">
                <UserIcon className="w-5 h-5" />
              </AvatarFallback>
            )}
          </Avatar>

          <div className="hidden md:block">
            <p className="text-sm font-medium">{user?.displayName || "User"}</p>
            <p className="text-xs text-muted-foreground">{user?.email || "user@example.com"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
