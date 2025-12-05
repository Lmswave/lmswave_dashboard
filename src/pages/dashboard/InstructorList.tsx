import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Pencil, Trash2, Mail, Phone, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const instructorSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(50),
  expertise: z.string().trim().min(1, "Expertise is required").max(255),
  bio: z.string().trim().min(1, "Bio is required").max(1000),
});

type Instructor = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  expertise: string;
  bio: string;
  photo_url: string | null;
  subjects: string[] | null;
  created_at: string;
};

const ITEMS_PER_PAGE = 9;

const InstructorList = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingInstructor, setEditingInstructor] = useState<Instructor | null>(null);
  const [deleteInstructor, setDeleteInstructor] = useState<Instructor | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    expertise: "",
    bio: "",
  });
  const { toast } = useToast();

  // -------------------------
  // ⭐ SAMPLE DEMO INSTRUCTOR
  // -------------------------
  const demoInstructor: Instructor = {
    id: "demo-1",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    phone: "+1 555 123 4567",
    expertise: "Full Stack Development",
    bio: "Demo instructor profile used when Supabase data is unavailable. Specializes in web development and cloud systems.",
    photo_url: null,
    subjects: ["JavaScript", "React", "Node.js"],
    created_at: new Date().toISOString(),
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const { data, error } = await supabase
        .from("instructors")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      if (!data || data.length === 0) {
        setInstructors([demoInstructor]);
      } else {
        setInstructors(data);
      }
    } catch {
      // Removed toast notification for failed fetch
      setInstructors([demoInstructor]);
    } finally {
      setLoading(false);
    }
  };

  // Search filter
  const filteredInstructors = useMemo(() => {
    if (!searchTerm) return instructors;
    const search = searchTerm.toLowerCase();
    return instructors.filter(
      (instructor) =>
        instructor.first_name.toLowerCase().includes(search) ||
        instructor.last_name.toLowerCase().includes(search) ||
        instructor.email.toLowerCase().includes(search) ||
        instructor.expertise.toLowerCase().includes(search) ||
        instructor.bio.toLowerCase().includes(search)
    );
  }, [instructors, searchTerm]);

  const totalPages = Math.ceil(filteredInstructors.length / ITEMS_PER_PAGE);

  const paginatedInstructors = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredInstructors.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredInstructors, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // -------------------------
  // Edit Instructor
  // -------------------------
  const handleEdit = (instructor: Instructor) => {
    setEditingInstructor(instructor);
    setEditFormData({
      firstName: instructor.first_name,
      lastName: instructor.last_name,
      email: instructor.email,
      phone: instructor.phone,
      expertise: instructor.expertise,
      bio: instructor.bio,
    });
  };

  const handleUpdate = async () => {
    if (!editingInstructor) return;

    if (editingInstructor.id === "demo-1") {
      toast({
        title: "Demo Mode",
        description: "Editing is disabled for demo instructor.",
      });
      return;
    }

    try {
      const validated = instructorSchema.parse(editFormData);

      const { error } = await supabase
        .from("instructors")
        .update({
          first_name: validated.firstName,
          last_name: validated.lastName,
          email: validated.email,
          phone: validated.phone,
          expertise: validated.expertise,
          bio: validated.bio,
        })
        .eq("id", editingInstructor.id);

      if (error) throw error;

      toast({ title: "Success", description: "Instructor updated successfully." });
      setEditingInstructor(null);
      fetchInstructors();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.errors?.[0]?.message || "Failed to update instructor.",
        variant: "destructive",
      });
    }
  };

  // -------------------------
  // Delete Instructor
  // -------------------------
  const handleDelete = async () => {
    if (!deleteInstructor) return;

    if (deleteInstructor.id === "demo-1") {
      toast({
        title: "Demo Mode",
        description: "Cannot delete demo instructor.",
      });
      setDeleteInstructor(null);
      return;
    }

    try {
      const { error } = await supabase
        .from("instructors")
        .delete()
        .eq("id", deleteInstructor.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Instructor deleted successfully.",
      });

      setDeleteInstructor(null);
      fetchInstructors();
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete instructor.",
        variant: "destructive",
      });
    }
  };

  const getInitials = (f: string, l: string) => `${f[0]}${l[0]}`.toUpperCase();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Instructor List</h1>
        <p className="text-muted-foreground">Manage all registered instructors</p>
      </div>

      {/* Search */}
      <Card className="glass">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Loading */}
      {loading ? (
        <p className="text-center py-8 text-muted-foreground">Loading instructors...</p>
      ) : (
        <>
          {/* Instructor Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedInstructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={instructor.photo_url || undefined} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {getInitials(instructor.first_name, instructor.last_name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {instructor.first_name} {instructor.last_name}
                        </CardTitle>
                        <Badge variant="secondary">{instructor.expertise}</Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{instructor.bio}</p>

                    <div className="text-sm space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4" /> {instructor.email}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4" /> {instructor.phone}
                      </div>
                    </div>

                    {instructor.subjects && (
                      <div className="flex flex-wrap gap-1">
                        {instructor.subjects.map((sub, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {sub}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(instructor)}
                        disabled={instructor.id === "demo-1"}
                        className="flex-1"
                      >
                        <Pencil className="w-4 h-4 mr-2" /> Edit
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDeleteInstructor(instructor)}
                        disabled={instructor.id === "demo-1"}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}

      {/* Delete Confirmation */}
      <AlertDialog
        open={!!deleteInstructor}
        onOpenChange={(open) => !open && setDeleteInstructor(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{" "}
              {deleteInstructor?.first_name} {deleteInstructor?.last_name}.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-white"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default InstructorList;
