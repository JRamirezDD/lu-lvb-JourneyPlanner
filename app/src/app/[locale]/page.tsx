import { generateStaticParams } from "./generateStaticParams";
export { generateStaticParams };

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Language: {locale}</h1>
      <p>There&apos;s nothing supposed to be here for now.</p>
      <p>
        Go to <a href={`/${locale}/map`}>/{locale}/map</a> or{" "}
        <a href={`/${locale}/controlPanel`}>/{locale}/controlPanel</a>.
      </p>
      <p>
        For an overview of the contexts, visit{" "}
        <a href={`/${locale}/examples/contexts/multi-component`}>
          /{locale}/examples/contexts/multi-component
        </a>.
      </p>
    </main>
  );
}
