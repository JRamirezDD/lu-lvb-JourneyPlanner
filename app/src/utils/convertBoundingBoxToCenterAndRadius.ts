import haversine from "haversine-distance"; //  commonly used for calculating distances taking into account earth's curvature

/**
* Converts a bounding box to center coordinates and radius.
*/
const convertBoundingBoxToCenterAndRadius = (bb: string): { center: string; radius: number } => {
   const [lat1, lon1, lat2, lon2] = bb.split(",").map(Number);

   // Calculate center (midpoint of diagonal)
   const centerLat = (lat1 + lat2) / 2;
   const centerLon = (lon1 + lon2) / 2;
   const center = `${centerLat},${centerLon}`;

   // Compute the radius as the max distance from center to any corner
   const centerPoint = { latitude: centerLat, longitude: centerLon };
   const corners = [
       { latitude: lat1, longitude: lon1 },
       { latitude: lat1, longitude: lon2 },
       { latitude: lat2, longitude: lon1 },
       { latitude: lat2, longitude: lon2 }
   ];
   
   const radius = Math.max(...corners.map(corner => haversine(centerPoint, corner)));

   return { center, radius };
};

export default convertBoundingBoxToCenterAndRadius;