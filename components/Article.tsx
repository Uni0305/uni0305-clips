import Image from "next/image";
import Link from "next/link";

export type ArticleProps = {
  id: string;
  title: string;
  link: string;
  cover: string;
  icon: string;
};

export default function Article({ cover, icon, title, link }: ArticleProps) {
  const url = new URL(link);

  return (
    <Link
      className="w-screen md:w-[490px] flex flex-col hover:text-blue-500"
      href={url.href}
      target="_blank"
    >
      <Image
        className="w-full h-[204px] object-cover md:h-[254px]"
        src={cover}
        alt="Cover"
        width={490}
        height={254}
        unoptimized
      />
      <div className="flex flex-row items-center justify-center w-full gap-4 px-4 py-2 lg:px-2 lg:py-4">
        <Image
          className="rounded-lg w-[40px] h-[40px] lg:w-16 lg:h-16"
          src={icon}
          alt="Icon"
          width={64}
          height={64}
          unoptimized
        />
        <div className="flex flex-col w-full">
          <p className="text-base font-semibold lg:text-xl">{title}</p>
          <p className="text-sm font-medium text-neutral-500 lg:text-lg">
            {url.hostname}
          </p>
        </div>
      </div>
    </Link>
  );
}
