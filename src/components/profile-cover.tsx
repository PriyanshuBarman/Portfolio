import Image from "next/image";

export default function ProfileCover() {
  return (
    <div className="relative">
      <Image
        preload
        width={1983}
        height={793}
        alt="Profile Cover"
        className="h-45 w-full object-cover sm:h-66 dark:hidden"
        src="/cover-day.png"
      />
      <Image
        preload
        width={1983}
        height={793}
        alt="Profile Cover"
        className="hidden h-45 w-full object-cover sm:h-66 dark:block"
        src="/cover-night.png"
      />
      <div className="absolute inset-0 bg-linear-to-t from-white/35 via-white/5 to-transparent dark:from-black/70 dark:via-black/20" />
    </div>
  );
}
