import Footer from "@/components/footer";
import QuickNavigation from "@/components/quick-navigation";
import About from "@/components/sections/about";
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
      <main className="mx-auto max-w-3xl">
        <ProfileHeader />
        <About />
        <Projects />
        <TechStack />
        <GitHubContributions />
        <Education />
        <Socials />
      </main>
      <QuickNavigation />
      <ThemeToggle
        showThemeIcon
        size="icon-lg"
        className="bg-background! fixed right-6 bottom-6 max-lg:hidden"
      />
      <Footer />
    </div>
  );
}
