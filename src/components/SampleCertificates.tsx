import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SampleCertificates = () => {
  const { toast } = useToast();

  const certificates = [
    {
      id: 1,
      name: "Course Completion Certificate",
      description: "Standard certificate for completing any course",
      previewUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAyMzUwO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDlkZDI7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSI3NjAiIGhlaWdodD0iNTYwIiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjZ3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjgiIHJ4PSIxMCIvPgogIDxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjcyMCIgaGVpZ2h0PSI1MjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmY2EwMyIgc3Ryb2tlLXdpZHRoPSIyIiByeD0iNSIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMjM1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2VydGlmaWNhdGUgb2YgQ29tcGxldGlvbjwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UaGlzIGlzIHRvIGNlcnRpZnkgdGhhdDwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjIyMCIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0MCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDlkZDIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPltTdHVkZW50IE5hbWVdPC90ZXh0PgogIDx0ZXh0IHg9IjQwMCIgeT0iMjgwIiBmb250LWZhbWlseT0iJ09wZW4gU2FucycsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkPC90ZXh0PgogIDx0ZXh0IHg9IjQwMCIgeT0iMzQwIiBmb250LWZhbWlseT0iJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjM2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMjM1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W0NvdXJzZSBOYW1lXTwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjQwMCIgZm9udC1mYW1pbHk9IidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EYXRlOiBbRGF0ZV08L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSI1MDAiIGZvbnQtZmFtaWx5PSInT3BlbiBTYW5zJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW5zdHJ1Y3RvciBTaWduYXR1cmU8L3RleHQ+CiAgPGxpbmUgeDE9IjEwMCIgeTE9IjQ4MCIgeDI9IjMwMCIgeTI9IjQ4MCIgc3Ryb2tlPSIjMDAyMzUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8dGV4dCB4PSI2MDAiIHk9IjUwMCIgZm9udC1mYW1pbHk9IidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EaXJlY3RvciBTaWduYXR1cmU8L3RleHQ+CiAgPGxpbmUgeDE9IjUwMCIgeTE9IjQ4MCIgeDI9IjcwMCIgeTI9IjQ4MCIgc3Ryb2tlPSIjMDAyMzUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8Y2lyY2xlIGN4PSI3MDAiIGN5PSIxMDAiIHI9IjUwIiBmaWxsPSIjZmZjYTAzIiBvcGFjaXR5PSIwLjMiLz4KICA8cG9seWdvbiBwb2ludHM9IjcwMCw3NSA3MTAsOTUgNzMwLDk1IDcxNSwxMDUgNzIwLDEyNSA3MDAsMTEwIDY4MCwxMjUgNjg1LDEwNSA2NzAsOTUgNjkwLDk1IiBmaWxsPSIjZmZjYTAzIi8+Cjwvc3ZnPg==",
    },
    {
      id: 2,
      name: "Achievement Certificate",
      description: "Certificate for outstanding achievement",
      previewUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iYmdHcmFkIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmNWY1ZjU7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0idXJsKCNiZ0dyYWQpIi8+CiAgPHJlY3QgeD0iMzAiIHk9IjMwIiB3aWR0aD0iNzQwIiBoZWlnaHQ9IjU0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTExZjFlIiBzdHJva2Utd2lkdGg9IjgiIHJ4PSIxNSIvPgogIDxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmY2EwMyIgc3Ryb2tlLXdpZHRoPSIzIiByeD0iMTAiLz4KICA8dGV4dCB4PSI0MDAiIHk9IjkwIiBmb250LWZhbWlseT0iJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjU0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzkxMWYxZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q0VSVElGSUNBVEU8L3RleHQ+CiAgPHRleHQgeD0iNDAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSInTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAyMzUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vZiBBY2hpZXZlbWVudDwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm91ZGx5IHByZXNlbnRlZCB0bzwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjI2MCIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDlkZDIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPltTdHVkZW50IE5hbWVdPC90ZXh0PgogIDx0ZXh0IHg9IjQwMCIgeT0iMzIwIiBmb250LWZhbWlseT0iJ09wZW4gU2FucycsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjIiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZvciBvdXRzdGFuZGluZyBwZXJmb3JtYW5jZSBpbjwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjM3MCIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDIzNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPltDb3Vyc2UgTmFtZV08L3RleHQ+CiAgPHRleHQgeD0iNDAwIiB5PSI0MzAiIGZvbnQtZmFtaWx5PSInT3BlbiBTYW5zJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGF0ZTogW0RhdGVdPC90ZXh0PgogIDx0ZXh0IHg9IjIwMCIgeT0iNTIwIiBmb250LWZhbWlseT0iJ09wZW4gU2FucycsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkF1dGhvcml6ZWQgU2lnbmF0dXJlPC90ZXh0PgogIDxsaW5lIHgxPSIxMjAiIHkxPSI1MDAiIHgyPSIyODAiIHkyPSI1MDAiIHN0cm9rZT0iIzAwMjM1MCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHRleHQgeD0iNjAwIiB5PSI1MjAiIGZvbnQtZmFtaWx5PSInT3BlbiBTYW5zJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW5zdGl0dXRpb24gU2VhbDwvdGV4dD4KICA8Y2lyY2xlIGN4PSI2MDAiIGN5PSI0NzAiIHI9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5MTFmMWUiIHN0cm9rZS13aWR0aD0iMyIvPgogIDx0ZXh0IHg9IjYwMCIgeT0iNDgwIiBmb250LWZhbWlseT0iJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzkxMWYxZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TE1TPC90ZXh0Pgo8L3N2Zz4=",
    },
    {
      id: 3,
      name: "Excellence Award",
      description: "Certificate for excellence in performance",
      previewUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYm9yZGVyR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZjYTAzO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6IzkxMWYxZTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZjYTAzO3N0b3Atb3BhY2l0eToxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNmZmZmZmYiLz4KICA8cmVjdCB4PSIyNSIgeT0iMjUiIHdpZHRoPSI3NTAiIGhlaWdodD0iNTUwIiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjYm9yZGVyR3JhZCkiIHN0cm9rZS13aWR0aD0iMTAiIHJ4PSIyMCIvPgogIDxyZWN0IHg9IjQ1IiB5PSI0NSIgd2lkdGg9IjcxMCIgaGVpZ2h0PSI1MTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMjM1MCIgc3Ryb2tlLXdpZHRoPSIyIiByeD0iMTUiLz4KICA8dGV4dCB4PSI0MDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI1MiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDIzNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkF3YXJkIG9mIEV4Y2VsbGVuY2U8L3RleHQ+CiAgPHRleHQgeD0iNDAwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSInT3BlbiBTYW5zJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VGhpcyBjZXJ0aWZpY2F0ZSBpcyBwcmVzZW50ZWQgdG88L3RleHQ+CiAgPHRleHQgeD0iNDAwIiB5PSIyMzAiIGZvbnQtZmFtaWx5PSInTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDA5ZGQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5bU3R1ZGVudCBOYW1lXTwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjI5MCIgZm9udC1mYW1pbHk9IidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mb3IgZGVtb25zdHJhdGluZyBleGNlbGxlbmNlIGluPC90ZXh0PgogIDx0ZXh0IHg9IjQwMCIgeT0iMzUwIiBmb250LWZhbWlseT0iJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjM0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMjM1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W0NvdXJzZSBOYW1lXTwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjQxMCIgZm9udC1mYW1pbHk9IidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Jc3N1ZWQgb246IFtEYXRlXTwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjUxMCIgZm9udC1mYW1pbHk9IidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbnN0cnVjdG9yPC90ZXh0PgogIDxsaW5lIHgxPSIxMjAiIHkxPSI0OTAiIHgyPSIyODAiIHkyPSI0OTAiIHN0cm9rZT0iIzAwMjM1MCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHRleHQgeD0iNjAwIiB5PSI1MTAiIGZvbnQtZmFtaWx5PSInT3BlbiBTYW5zJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGlyZWN0b3I8L3RleHQ+CiAgPGxpbmUgeDE9IjUyMCIgeTE9IjQ5MCIgeDI9IjY4MCIgeTI9IjQ5MCIgc3Ryb2tlPSIjMDAyMzUwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cG9seWdvbiBwb2ludHM9IjQwMCwxNzAgNDEyLDE5NSA0MzcsMTk1IDQxOCwyMDggNDI1LDIzMyA0MDAsMjE4IDM3NSwyMzMgMzgyLDIwOCAzNjMsMTk1IDM4OCwxOTUiIGZpbGw9IiNmZmNhMDMiLz4KICA8Y2lyY2xlIGN4PSI0MDAiIGN5PSIxNzAiIHI9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmNhMDMiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPg==",
    },
  ];

  const handleDownload = (certificate: typeof certificates[0]) => {
    // Convert base64 to blob and download
    const byteCharacters = atob(certificate.previewUrl.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/svg+xml' });
    
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${certificate.name.toLowerCase().replace(/\s+/g, '-')}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Download Started",
      description: `${certificate.name} template has been downloaded.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Sample Certificate Templates</h2>
        <p className="text-muted-foreground">Download customizable certificate templates for your courses</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <Card key={certificate.id} className="glass overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="w-5 h-5 text-golden" />
                {certificate.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border">
                <img 
                  src={certificate.previewUrl} 
                  alt={certificate.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">{certificate.description}</p>
              <Button 
                onClick={() => handleDownload(certificate)}
                className="w-full"
                variant="outline"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-2">How to use these templates</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Download the SVG template of your choice</li>
                <li>Open in any vector graphics editor (Inkscape, Adobe Illustrator, Figma)</li>
                <li>Replace placeholder text with actual student and course information</li>
                <li>Export as PDF or high-resolution image for printing</li>
                <li>Customize colors and styles to match your institution's branding</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SampleCertificates;
