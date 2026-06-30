import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import QuickNavigation from "@/components/quick-navigation";
import Education from "@/components/sections/education";
import GitHubContributions from "@/components/sections/github-contributions";
import ProfileHeader from "@/components/sections/profile-header";
import Projects from "@/components/sections/projects";
import Socials from "@/components/sections/socials";
import TechStack from "@/components/sections/tech-stack";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl *:[[id]]:scroll-mt-18">
        <ProfileHeader />
        <Projects />
        <TechStack />
        <GitHubContributions />
        <Education />
        <Socials />
      </main>
      <QuickNavigation />
      <ThemeToggle
        enableHotKey
        showThemeIcon
        size="icon-lg"
        className="bg-background! fixed right-6 bottom-6 max-lg:hidden"
      />
      <Footer />
    </div>
  );
}
