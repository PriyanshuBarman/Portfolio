export default function About() {
  return (
    <section className="border-t border-dashed py-6">
      <h2 className="text-xl font-semibold sm:text-2xl">About</h2>
      <p className="text-muted-foreground mt-2">
        Hi, I&apos;m Priyanshu. I build full stack applications end-to-end, from
        database schema to deployed UI. I enjoy turning ideas into software and
        have a deep interest in fintech.{" "}
        <span className="max-sm:hidden">
          My current stack is Next.js, TypeScript, and Tailwind CSS.
        </span>
      </p>
    </section>
  );
}
