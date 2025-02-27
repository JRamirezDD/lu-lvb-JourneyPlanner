import { MapWidget } from "@/components/map/MapWidget";
import { generateStaticParams } from "../generateStaticParams";
export { generateStaticParams };



export default function Home() {
  return (
    <div style={{ width: "100%", height: "100%" }}> 
      <MapWidget />
    </div>
  );
}
