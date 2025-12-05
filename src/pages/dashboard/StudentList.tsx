import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useToast } from "@/hooks/use-toast";
import {
  Users,
  Pencil,
  Trash2,
  Mail,
  User,
  Phone,
  BookOpen,
  Search,
  Filter,
} from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const studentSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(50),
  course: z.string().min(1, "Please select a course"),
});

type Student = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  course: string;
  created_at: string;
};

const ITEMS_PER_PAGE = 10;
const COURSES = [
  "React Fundamentals",
  "Advanced JavaScript",
  "UI/UX Design",
  "Python for Data Science",
];

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [deleteStudent, setDeleteStudent] = useState<Student | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
  });

  const { toast } = useToast();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
  try {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    setStudents(data || []);
  } catch {
    // Removed: toast "Failed to load students"
  } finally {
    setLoading(false);
  }
};


  const handleEdit = (student: Student) => {
    setEditingStudent(student);
    setEditFormData({
      firstName: student.first_name,
      lastName: student.last_name,
      email: student.email,
      phone: student.phone,
      course: student.course,
    });
  };

  const handleUpdate = async () => {
    if (!editingStudent) return;

    try {
      const validated = studentSchema.parse(editFormData);

      const { error } = await supabase
        .from("students")
        .update({
          first_name: validated.firstName,
          last_name: validated.lastName,
          email: validated.email,
          phone: validated.phone,
          course: validated.course,
        })
        .eq("id", editingStudent.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Student updated successfully.",
      });

      setEditingStudent(null);
      fetchStudents();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const handleDelete = async () => {
    if (!deleteStudent) return;

    try {
      const { error } = await supabase
        .from("students")
        .delete()
        .eq("id", deleteStudent.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Student deleted successfully.",
      });

      setDeleteStudent(null);
      fetchStudents();
    } catch {
      setDeleteStudent(null);
    }
  };

  const filteredStudents = useMemo(() => {
    let filtered = students;

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (student) =>
          student.first_name.toLowerCase().includes(search) ||
          student.last_name.toLowerCase().includes(search) ||
          student.email.toLowerCase().includes(search) ||
          student.phone.includes(search)
      );
    }

    if (filterCourse !== "all") {
      filtered = filtered.filter(
        (student) => student.course === filterCourse
      );
    }

    return filtered;
  }, [students, searchTerm, filterCourse]);

  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);

  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStudents.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [filteredStudents, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterCourse]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Student List</h1>
        <p className="text-muted-foreground">Manage all registered students</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan" /> All Students
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="w-full md:w-64">
                <Select
                  value={filterCourse}
                  onValueChange={setFilterCourse}
                >
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {COURSES.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {loading ? (
              <p className="text-center py-8 text-muted-foreground">
                Loading students...
              </p>
            ) : filteredStudents.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">
                {students.length === 0
                  ? "No students registered yet."
                  : "No students match your search criteria."}
              </p>
            ) : (
              <>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {paginatedStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">
                            {student.first_name} {student.last_name}
                          </TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>{student.phone}</TableCell>
                          <TableCell>{student.course}</TableCell>

                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Dialog
                                open={
                                  editingStudent?.id === student.id
                                }
                                onOpenChange={(open) =>
                                  !open && setEditingStudent(null)
                                }
                              >
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(student)}
                                  >
                                    <Pencil className="w-4 h-4" />
                                  </Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[500px]">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Edit Student
                                    </DialogTitle>
                                  </DialogHeader>

                                  <div className="space-y-4 py-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="edit-firstName">
                                          First Name
                                        </Label>
                                        <div className="relative">
                                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                          <Input
                                            id="edit-firstName"
                                            value={
                                              editFormData.firstName
                                            }
                                            onChange={(e) =>
                                              setEditFormData({
                                                ...editFormData,
                                                firstName:
                                                  e.target.value,
                                              })
                                            }
                                            className="pl-10"
                                          />
                                        </div>
                                      </div>

                                      <div className="space-y-2">
                                        <Label htmlFor="edit-lastName">
                                          Last Name
                                        </Label>
                                        <div className="relative">
                                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                          <Input
                                            id="edit-lastName"
                                            value={
                                              editFormData.lastName
                                            }
                                            onChange={(e) =>
                                              setEditFormData({
                                                ...editFormData,
                                                lastName:
                                                  e.target.value,
                                              })
                                            }
                                            className="pl-10"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="edit-email">
                                        Email
                                      </Label>
                                      <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                          id="edit-email"
                                          type="email"
                                          value={editFormData.email}
                                          onChange={(e) =>
                                            setEditFormData({
                                              ...editFormData,
                                              email: e.target.value,
                                            })
                                          }
                                          className="pl-10"
                                        />
                                      </div>
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="edit-phone">
                                        Phone
                                      </Label>
                                      <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                          id="edit-phone"
                                          value={editFormData.phone}
                                          onChange={(e) =>
                                            setEditFormData({
                                              ...editFormData,
                                              phone: e.target.value,
                                            })
                                          }
                                          className="pl-10"
                                        />
                                      </div>
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="edit-course">
                                        Course
                                      </Label>
                                      <div className="relative">
                                        <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                                        <Select
                                          value={editFormData.course}
                                          onValueChange={(value) =>
                                            setEditFormData({
                                              ...editFormData,
                                              course: value,
                                            })
                                          }
                                        >
                                          <SelectTrigger className="pl-10">
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            {COURSES.map((course) => (
                                              <SelectItem
                                                key={course}
                                                value={course}
                                              >
                                                {course}
                                              </SelectItem>
                                            ))}
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex justify-end gap-2">
                                    <Button
                                      variant="outline"
                                      onClick={() =>
                                        setEditingStudent(null)
                                      }
                                    >
                                      Cancel
                                    </Button>
                                    <Button onClick={handleUpdate}>
                                      Save Changes
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>

                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                  setDeleteStudent(student)
                                }
                              >
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {totalPages > 1 && (
                  <Pagination className="mt-4">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            setCurrentPage((p) => Math.max(1, p - 1))
                          }
                          className={
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>

                      {Array.from(
                        { length: totalPages },
                        (_, i) => i + 1
                      ).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => setCurrentPage(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            setCurrentPage((p) =>
                              Math.min(totalPages, p + 1)
                            )
                          }
                          className={
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <AlertDialog
        open={!!deleteStudent}
        onOpenChange={(open) => !open && setDeleteStudent(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{" "}
              {deleteStudent?.first_name} {deleteStudent?.last_name} from
              the system. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default StudentList;
