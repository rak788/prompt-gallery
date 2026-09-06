import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-sm">
            ب
          </span>
          <div>
            <p className="text-base font-bold text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-50 dark:group-hover:text-emerald-400">
              معرض البرومبتات التعليمية
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              صورة + برومت جاهز للنسخ
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}
