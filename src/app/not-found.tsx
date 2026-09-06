import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        الصفحة غير موجودة
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        لم نعثر على البرومت المطلوب.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
      >
        العودة للمعرض
      </Link>
    </div>
  );
}
