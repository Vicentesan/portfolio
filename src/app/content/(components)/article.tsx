import Link from "next/link";

import { TypescriptIcon } from "@/app/shared/components/icons/typescript";

type ArticleProps = {
  title: string;
  url: string;
};

export function Article({ title, url }: ArticleProps) {
  return (
    <div className="flex items-center gap-4 w-full text-xl">
      <TypescriptIcon className="md:block hidden" width={24} height={24} />
      <Link
        href={url}
        target="_blank"
        className="hover:underline hover:underline-offset-2"
      >
        {title}
      </Link>
    </div>
  );
}
