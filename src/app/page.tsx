import PromptCard from "@/components/PromptCard";
import { getAllPrompts } from "@/lib/prompts";

export default function HomePage() {
  const prompts = getAllPrompts();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="mb-10 space-y-3 text-center sm:mb-14 sm:text-start">
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          تعلّم أسرع مع برومبتات جاهزة
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          معرض الصور والبرومبتات التعليمية
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-600 sm:mx-0 dark:text-zinc-400">
          كل بطاقة تعرض صورة في الأعلى والبرومت التعليمي تحتها. انسخ البرومت
          بنقرة واحدة، أو افتح التفاصيل لمشاهدته كاملاً.
        </p>
      </section>

      <section
        aria-label="قائمة البرومبتات"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {prompts.map((item) => (
          <PromptCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
