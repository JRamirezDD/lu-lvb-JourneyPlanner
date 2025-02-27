import MainView from "@/components/MainView";
import { generateStaticParams } from "./generateStaticParams";
export { generateStaticParams };

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Main content area */}
      <main style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* MainView fills this section */}
        <MainView />
      </main>
    </div>
  );
}
