import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactNode } from "react";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { DashboardLayout } from "./components/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import CourseManagement from "./pages/dashboard/CourseManagement";
import Certificates from "./pages/dashboard/Certificates";
import StudentRegistration from "./pages/dashboard/StudentRegistration";
import StudentList from "./pages/dashboard/StudentList";
import InstructorRegistration from "./pages/dashboard/InstructorRegistration";
import InstructorList from "./pages/dashboard/InstructorList";
import ProfileSettings from "./pages/dashboard/ProfileSettings";
import Support from "./pages/dashboard/Support";
import NotFound from "./pages/NotFound";

// Firebase
import { auth } from "@/lib/firebase";


import { useAuthState } from "react-firebase-hooks/auth";

// PrivateRoute Component
const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>; // optional spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* DEFAULT HOME PAGE → LOGIN */}
          <Route path="/" element={<Login />} />

          {/* AUTH PAGES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* DASHBOARD ROUTES */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Overview />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/courses"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <CourseManagement />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/certificates"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Certificates />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/student-registration"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <StudentRegistration />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/students"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <StudentList />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/instructor-registration"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <InstructorRegistration />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/instructors"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <InstructorList />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <ProfileSettings />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/support"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Support />
                </DashboardLayout>
              </PrivateRoute>
            }
          />

          {/* CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
