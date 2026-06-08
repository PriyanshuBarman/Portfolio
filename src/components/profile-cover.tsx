import Image from "next/image";

export default function ProfileCover() {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        preload
        width={876}
        height={580}
        alt="Profile Cover - Mountains"
        className="h-45 w-full object-cover sm:h-55"
        src="/everest.webp"
      />
      <div className="absolute inset-0 bg-linear-to-t from-white/40 via-white/10 to-transparent dark:from-black/50 dark:via-black/20" />
      <span className="text-background/85 dark:text-foreground/75 absolute mb-10 gap-2 sm:mb-16 sm:text-xl">
        Everest is <span className="line-through">the limit</span>
      </span>
    </div>
  );
}
