import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, TrendingUp, Award } from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const stats = [
  {
    title: "Total Students",
    value: "2,543",
    change: "+12.5%",
    icon: Users,
    color: "text-cyan",
  },
  {
    title: "Active Courses",
    value: "48",
    change: "+8.2%",
    icon: BookOpen,
    color: "text-golden",
  },
  {
    title: "Engagement Rate",
    value: "87.3%",
    change: "+5.1%",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    title: "Certificates Issued",
    value: "1,234",
    change: "+18.7%",
    icon: Award,
    color: "text-danger",
  },
];

const engagementData = [
  { name: "Mon", value: 85 },
  { name: "Tue", value: 78 },
  { name: "Wed", value: 90 },
  { name: "Thu", value: 82 },
  { name: "Fri", value: 88 },
  { name: "Sat", value: 75 },
  { name: "Sun", value: 80 },
];

const coursePerformance = [
  { name: "React Basics", completion: 92, engagement: 88 },
  { name: "Advanced JS", completion: 85, engagement: 82 },
  { name: "UI/UX Design", completion: 78, engagement: 90 },
  { name: "Python 101", completion: 88, engagement: 85 },
];

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Engagement Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle>Weekly Engagement Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--cyan))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--cyan))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Course Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle>Course Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={coursePerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="completion" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="engagement" fill="hsl(var(--golden))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="glass border-cyan/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan rounded-full animate-pulse"></div>
              AI-Powered Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-cyan/5 rounded-lg border border-cyan/20">
              <p className="text-sm font-medium mb-1">High Engagement Detected</p>
              <p className="text-sm text-muted-foreground">
                React Basics course shows 92% completion rate. Consider creating advanced follow-up content.
              </p>
            </div>
            <div className="p-4 bg-golden/5 rounded-lg border border-golden/20">
              <p className="text-sm font-medium mb-1">Support Recommended</p>
              <p className="text-sm text-muted-foreground">
                15 students struggling with Module 3 in Advanced JS. Recommend scheduling a Q&A session.
              </p>
            </div>
            <div className="p-4 bg-danger/5 rounded-lg border border-danger/20">
              <p className="text-sm font-medium mb-1">Retention Alert</p>
              <p className="text-sm text-muted-foreground">
                UI/UX Design course has lower completion rate. Review content difficulty and pacing.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Overview;
