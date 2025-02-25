import { generateStaticParams } from "./generateStaticParams";
export { generateStaticParams };

import MainView from "@/components/MainView";

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh" }}>
      {/* Header */}
      <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <h1>My Application</h1>
      </header>
      {/* Main content area */}
      <main style={{ flex: 1, display: "flex", overflow: "hidden", width: "100%" }}>
        <MainView />
      </main>
      {/* Optional Footer */}
      <footer style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        Footer Content
      </footer>
    </div>
  );
}
