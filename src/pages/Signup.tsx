import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Brain, Mail, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Firebase imports
import { auth } from "@/lib/firebase";

import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // Email/Password signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Set display name
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }

      toast({
        title: "Account Created",
        description: `Welcome, ${name}!`,
      });

      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Signup Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      toast({
        title: "Signed in with Google",
        description: `Welcome, ${user.displayName}!`,
      });

      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Google Sign-In Error",
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
          <a href="https://lmswave.com/"> 
        <img src="/Dashboard2.jpg" alt="Signup Illustration" className="absolute inset-0 w-full h-full object-cover" />
        </a>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* RIGHT SIDE SIGNUP FORM */}
      <div className="flex items-center justify-center p-6 md:p-12 relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-golden/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative w-full max-w-md">
          <div className="glass rounded-3xl p-8 shadow-glass">
            <div className="flex items-center justify-center gap-3 mb-8">
              <img src="/logo.png" alt="LMSWave Logo" className="w-60 h-12" />
            </div>

            <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
            <p className="text-center text-muted-foreground mb-8">Get started with LMSWave today</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 glass border-primary/20"
                    required
                  />
                </div>
              </div>

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

              <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90 transition-opacity" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4">
              <span className="flex-grow border-t border-gray-300"></span>
              <span className="mx-2 text-gray-500">OR</span>
              <span className="flex-grow border-t border-gray-300"></span>
            </div>

            {/* Google Sign-In */}
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 transition rounded-lg p-2"
              disabled={loading}
            >
              <img src="/google-logo.png" alt="Google Logo" className="w-5 h-5" />
              {loading ? "Signing in..." : "Sign up with Google"}
            </Button>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-cyan hover:underline font-medium">Sign in</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
