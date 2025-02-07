import { generateStaticParams } from "../generateStaticParams";
export { generateStaticParams };

import ControlPanel from "@/components/controlPanel/ControlPanel";

export default function HomePage() {
    return (
            <main className="flex h-screen">
                <ControlPanel />
            </main>
    );
}
