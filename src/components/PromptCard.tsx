import Image from "next/image";
import Link from "next/link";
import type { PromptItem } from "@/lib/types";
import CopyButton from "./CopyButton";

type PromptCardProps = {
  item: PromptItem;
};

export default function PromptCard({ item }: PromptCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <Link href={`/prompt/${item.id}`} className="relative block aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {item.category ? (
          <span className="absolute end-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {item.category}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-1.5">
          <Link
            href={`/prompt/${item.id}`}
            className="block text-lg font-semibold text-zinc-900 transition hover:text-emerald-700 dark:text-zinc-50 dark:hover:text-emerald-400"
          >
            {item.title}
          </Link>
          <p className="line-clamp-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {item.prompt}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-1">
          <CopyButton text={item.prompt} className="flex-1" />
          <Link
            href={`/prompt/${item.id}`}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </article>
  );
}
