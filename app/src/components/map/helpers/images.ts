import loadSVGImage from "@/utils/loadSVGImage";
import loadPNGImage from "@/utils/loadPNGImage";

export const loadAllMapIcons = async (map: maplibregl.Map) => {
    const images = [
        { path: "/lu-lvb-JourneyPlanner/icons/otp-icons/haltestelle.svg", id: "haltestelle", size: 19 },
        { path: "/lu-lvb-JourneyPlanner/icons/otp-icons/Bus-Logo.svg", id: "Bus-Logo" },
        { path: "/lu-lvb-JourneyPlanner/icons/otp-icons/ticket.svg", id: "ticket" },
        { path: "/lu-lvb-JourneyPlanner/icons/otp-icons/taxi.svg", id: "taxi" },
        { path: "/lu-lvb-JourneyPlanner/icons/otp-icons/nextbike.svg", id: "nextbike" },
        { path: "/lu-lvb-JourneyPlanner/icons/otp-icons/scooter.svg", id: "scooter" },
        { path: "/lu-lvb-JourneyPlanner/icons/otp-icons/charger.svg", id: "charger" },
        { path: "/lu-lvb-JourneyPlanner/filled_pin.svg", id: "filled_pin" },
        { path: "/lu-lvb-JourneyPlanner/hollow_pin.svg", id: "hollow_pin" },
        { path: "/lu-lvb-JourneyPlanner/icons/map-icons/current-location-icon.png", id: "current-location-icon" },
    ];
    
    async function loadImages(map: maplibregl.Map): Promise<void> {
        const promises = images.map(({ path, id, size }) => {
          const loader = path.endsWith('.png') ? loadPNGImage : (path: string) => loadSVGImage(path, size || 19);
          return loader(path).then(image => {
            if (!map.hasImage(id)) map.addImage(id, image as HTMLImageElement | ImageBitmap);
          });
        });
        await Promise.all(promises);
    }

    await loadImages(map);
};


  