import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  UserPlus,
  UserCog,
  Users,
  Settings,
  HelpCircle,
  Brain,
  LogOut
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Course Management", url: "/dashboard/courses", icon: BookOpen },
  { title: "Certificates", url: "/dashboard/certificates", icon: Award },
  { title: "Student Registration", url: "/dashboard/student-registration", icon: UserPlus },
  { title: "Student List", url: "/dashboard/students", icon: Users },
  { title: "Instructor Registration", url: "/dashboard/instructor-registration", icon: UserCog },
  { title: "Instructor List", url: "/dashboard/instructors", icon: Users },
  { title: "Profile Settings", url: "/dashboard/profile", icon: Settings },
  { title: "Support / Help", url: "/dashboard/support", icon: HelpCircle },
];

export function DashboardSidebar() {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-sidebar flex flex-col justify-between">

        {/* TOP SECTION */}
        <div>
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border bg-white">
            <div className="flex items-center gap-3">
              <a href="https://lmswave.com/"> 
              <img src="/logo2.png" alt="LMSWave Logo" className="w-60 h-12" />
              </a>

            </div>
          </div>


          {/* Main Menu */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/70">Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className="hover:bg-sidebar-accent transition-colors"
                        activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* BOTTOM SECTION (Logout) */}
        <div className="p-4 border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={handleLogout}
                className="hover:bg-sidebar-accent text-red-500 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
