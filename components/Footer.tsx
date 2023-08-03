import Link from "next/link";
import DiscordSVG from "../public/discord.svg";
import GitHubSVG from "../public/github.svg";
import HomeSVG from "../public/home.svg";
import MailSVG from "../public/mail.svg";
import MinecraftSVG from "../public/minecraft.svg";
import NotionSVG from "../public/notion.svg";
import TwtichSVG from "../public/twitch.svg";
import YoutubeSVG from "../public/youtube.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-screen gap-4 px-4 py-8 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 lg:py-12 lg:gap-6">
      <div className="flex flex-row gap-4">
        <Link href="https://uni0305.me" target="_blank">
          <HomeSVG className="w-6 h-6 fill-neutral-600 dark:fill-neutral-400 hover:fill-blue-500" />
        </Link>
        <Link href="https://uni0305.me/discord">
          <DiscordSVG className="w-6 h-6 fill-neutral-600 dark:fill-neutral-400 hover:fill-[#5865F2]" />
        </Link>
        <Link href="mailto:contact@uni0305.me">
          <MailSVG className="w-6 h-6 fill-neutral-600 dark:fill-neutral-400 hover:fill-blue-500" />
        </Link>
        <Link href="https://uni0305.me/notion" target="_blank">
          <NotionSVG className="w-6 h-6 fill-neutral-600 dark:fill-neutral-400 hover:fill-black dark:hover:fill-white" />
        </Link>
        <Link href="https://uni0305.me/youtube" target="_blank">
          <YoutubeSVG className="w-6 h-6 fill-neutral-600 dark:fill-neutral-400 hover:fill-[#FF0000]" />
        </Link>
        <Link href="https://uni0305.me/github" target="_blank">
          <GitHubSVG className="w-6 h-6 fill-neutral-600 dark:fill-neutral-400 hover:fill-black dark:hover:fill-white" />
        </Link>
        <Link href="https://uni0305.me/twitch" target="_blank">
          <TwtichSVG className="w-6 h-6 fill-neutral-600 dark:fill-neutral-400 hover:fill-[#9146FF]" />
        </Link>
        <Link href="https://uni0305.me/namemc" target="_blank">
          <MinecraftSVG className="w-6 h-6 fill-neutral-600 dark:fill-neutral-400 hover:fill-[#62B47A]" />
        </Link>
      </div>
      <p className="text-base font-normal lg:text-lg">
        © 2023, Uni0305. All rights reserved.
      </p>
    </footer>
  );
}
