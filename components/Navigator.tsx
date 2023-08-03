import Image from "next/image";
import uni0305_avatar from "../public/uni0305_avatar.png";

export default function Navigator() {
  return (
    <nav className="fixed top-0 flex flex-row w-screen p-4 border-b border-b-neutral-200 dark:border-b-neutral-800 bg-neutral-100 dark:bg-neutral-900 lg:justify-center">
      <div className="flex flex-row items-center gap-4 lg:container">
        <Image
          className="w-8 h-8 lg:w-12 lg:h-12"
          src={uni0305_avatar}
          alt="Uni0305 Avatar"
          height={64}
        />
        <h1 className="text-2xl font-bold lg:text-4xl">Uni0305 Web Clips</h1>
      </div>
    </nav>
  );
}
