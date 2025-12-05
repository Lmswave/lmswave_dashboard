import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MoreVertical, Users, TrendingUp } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    students: 342,
    engagement: 92,
    status: "active",
    instructor: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    students: 256,
    engagement: 85,
    status: "active",
    instructor: "Michael Chen",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    students: 198,
    engagement: 78,
    status: "active",
    instructor: "Emma Wilson",
  },
  {
    id: 4,
    title: "Python for Data Science",
    students: 412,
    engagement: 88,
    status: "active",
    instructor: "David Martinez",
  },
];

const CourseManagement = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Course Management</h1>
          <p className="text-muted-foreground">Manage and monitor all your courses</p>
        </div>
       
      </div>

      {/* Search and Filter */}
      <Card className="glass">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              className="pl-10 glass border-primary/20"
            />
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Instructor: {course.instructor}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan" />
                    <div>
                      <p className="text-sm text-muted-foreground">Students</p>
                      <p className="text-lg font-semibold">{course.students}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-golden" />
                    <div>
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="text-lg font-semibold">{course.engagement}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className="bg-green-500/10 text-green-600 border-green-500/20"
                    >
                      {course.status}
                    </Badge>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" className="glass">
                    View Details
                  </Button>
                  <Button variant="outline" className="glass">
                    Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;
