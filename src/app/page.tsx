import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ScrollSpy from "@/components/scroll-spy";
import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import GitHubContributions from "@/components/sections/github-contributions";
import ProfileHeader from "@/components/sections/profile-header";
import Projects from "@/components/sections/projects";
import Socials from "@/components/sections/socials";
import TechStack from "@/components/sections/tech-stack";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <main className="mx-auto max-w-200 [&_section]:px-4 sm:[&_section]:px-6 md:[&_section]:px-8 *:[[id]]:scroll-mt-18">
        <ProfileHeader />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <GitHubContributions />
        <Education />
        <Socials />
      </main>
      <ScrollSpy />
      <ThemeToggle
        enableHotKey
        showThemeIcon
        size="icon-lg"
        className="bg-background! fixed right-6 bottom-6 max-lg:hidden"
      />
      <SiteFooter />
    </div>
  );
}
