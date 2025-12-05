import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/hooks/use-toast";

// Firebase imports
import { auth } from "@/lib/firebase";

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Email/Password login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.displayName || "User"}!`,
      });

      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      toast({
        title: "Login Successful",
        description: `Welcome, ${user.displayName || "User"}!`,
      });

      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-background via-secondary to-background">

      {/* LEFT SIDE IMAGE */}
      <div className="hidden md:block relative w-full h-screen">
        <img src="/Dashboard1.jpg" alt="Login Illustration" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* RIGHT SIDE LOGIN FORM */}
      <div className="flex items-center justify-center p-6 md:p-12 relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative w-full max-w-md">
          <div className="glass rounded-3xl p-8 shadow-glass">

            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <a href="https://lmswave.com/"> 
              <img src="/logo.png" alt="LMSWave Logo" className="w-60 h-12" />
               </a>            
               </div>
            <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
            <p className="text-center text-muted-foreground mb-8">Sign in to access your dashboard</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 glass border-primary/20"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 glass border-primary/20"
                    required
                  />
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-primary/20" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-cyan hover:underline">Forgot password?</a>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90 transition-opacity" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Google Sign-In Button */}
            <div className="mt-4">
              <Button
                type="button"
                className="w-full bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 flex items-center justify-center gap-2"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <FcGoogle className="w-5 h-5" />
                {loading ? "Signing in..." : "Sign in with Google"}
              </Button>
            </div>

            {/* Signup Link */}
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/signup" className="text-cyan hover:underline font-medium">Sign up</Link>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
