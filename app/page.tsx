import Certification from "@/components/Certifications";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import SidebarHandler from "@/components/SidebarHandler";
import Welcome from "@/components/Welcome";

export default function Page() {
  return (
    <SidebarHandler>
      <Welcome />
      <Experience />
      <Certification />
      <Education />
    </SidebarHandler>
  );
}
