import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyButton from "@/components/CopyButton";
import { getAllPrompts, getPromptById } from "@/lib/prompts";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllPrompts().map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const item = getPromptById(id);
  if (!item) {
    return { title: "غير موجود | معرض البرومبتات" };
  }
  return {
    title: `${item.title} | معرض البرومبتات التعليمية`,
    description: item.description ?? item.prompt.slice(0, 120),
  };
}

export default async function PromptDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = getPromptById(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-400"
      >
        <span aria-hidden="true">→</span>
        العودة للمعرض
      </Link>

      <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="space-y-5 p-5 sm:p-8">
          <div className="space-y-2">
            {item.category ? (
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                {item.category}
              </span>
            ) : null}
            <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">
              {item.title}
            </h1>
            {item.description ? (
              <p className="text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                {item.description}
              </p>
            ) : null}
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              البرومت التعليمي
            </h2>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-base leading-8 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
              {item.prompt}
            </div>
          </div>

          <CopyButton text={item.prompt} className="w-full sm:w-auto" />
        </div>
      </article>
    </div>
  );
}
