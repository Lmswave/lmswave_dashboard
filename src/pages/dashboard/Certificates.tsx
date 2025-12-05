import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Eye, Calendar } from "lucide-react";
import SampleCertificates from "@/components/SampleCertificates";

const certificates = [
  {
    id: 1,
    studentName: "John Anderson",
    courseName: "React Fundamentals",
    issueDate: "2024-01-15",
    certificateId: "CERT-2024-001",
  },
  {
    id: 2,
    studentName: "Emily Davis",
    courseName: "Advanced JavaScript",
    issueDate: "2024-01-14",
    certificateId: "CERT-2024-002",
  },
  {
    id: 3,
    studentName: "Michael Brown",
    courseName: "UI/UX Design",
    issueDate: "2024-01-13",
    certificateId: "CERT-2024-003",
  },
];

const Certificates = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">Certificates</h1>
          <p className="text-muted-foreground">Manage and issue course completion certificates</p>
        </div>
        
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-golden/10 rounded-xl">
                <Award className="w-6 h-6 text-golden" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Issued</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan/10 rounded-xl">
                <Calendar className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">87</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Downloads</p>
                <p className="text-2xl font-bold">956</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sample Certificate Templates */}
      <SampleCertificates />

      {/* Certificates List */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Issued Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-golden/10 rounded-xl">
                      <Award className="w-6 h-6 text-golden" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{cert.studentName}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{cert.courseName}</p>
                      <p className="text-xs text-muted-foreground">
                        Certificate ID: {cert.certificateId}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right mr-4">
                      <p className="text-sm text-muted-foreground">Issue Date</p>
                      <p className="text-sm font-medium">{cert.issueDate}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="glass">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="glass">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Certificates;
