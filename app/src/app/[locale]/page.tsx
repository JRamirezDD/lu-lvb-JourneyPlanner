import { generateStaticParams } from "./generateStaticParams";
export { generateStaticParams };

import MainView from "@/components/MainView";

export default function MainPage() {
  return (
    <div id="app" style={{ width: "100%", height: "100%" }}>
        <MainView />
      </div>
  );
}