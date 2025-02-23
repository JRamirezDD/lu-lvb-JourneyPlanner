import ControlPanel from "@/components/controlPanel/ControlPanel";
import { generateStaticParams } from "./generateStaticParams";
import Map from "@/components/Map";
export { generateStaticParams };

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <ControlPanel />
      <Map />
    </main>
  );
}
