import { generateStaticParams } from "./generateStaticParams";
export { generateStaticParams };

import MainView from "@/components/MainView";

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh" }}>
      {/* Example additional content */}
      <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <h1>THIS IS SOME EXAMPLE CONTENT</h1>
      </header>
      <main style={{ flex: 1, display: "flex", overflow: "hidden", width: "100%" }}>
        <MainView />
      </main>
    </div>
  );
}
