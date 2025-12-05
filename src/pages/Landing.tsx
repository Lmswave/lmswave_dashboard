
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, TrendingUp, Target, Users, Award, BarChart3, Sparkles } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-golden/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="text-sm font-medium">AI-Powered Learning Analytics</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Learning with{" "}
            <span className="text-gradient">LMSWave</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Analyze learner engagement patterns, identify effective course materials, 
            and discover where students struggle—all powered by cutting-edge AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity text-lg px-8">
              <Link to="/login">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/20 text-lg px-8">
              <Link to="/login">View Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for Modern Learning
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to optimize learning outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI-Powered Analytics",
                description: "Deep learning algorithms analyze engagement patterns and provide actionable insights",
                color: "text-cyan",
              },
              {
                icon: TrendingUp,
                title: "Engagement Tracking",
                description: "Monitor student interaction with course materials in real-time",
                color: "text-golden",
              },
              {
                icon: Target,
                title: "Struggle Detection",
                description: "Identify exactly where students face challenges and intervene early",
                color: "text-danger",
              },
              {
                icon: Users,
                title: "Student Management",
                description: "Comprehensive student profiles and performance tracking",
                color: "text-cyan",
              },
              {
                icon: Award,
                title: "Certificate Management",
                description: "Automated certificate generation and distribution",
                color: "text-golden",
              },
              {
                icon: BarChart3,
                title: "Advanced Reporting",
                description: "Beautiful visualizations and detailed performance reports",
                color: "text-primary",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-8 hover:shadow-soft transition-all duration-300"
              >
                <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Learning Platform?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of educators leveraging AI to improve learning outcomes
          </p>
          <Button asChild size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity text-lg px-8">
            <Link to="/login">Start Your Journey</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Landing;

