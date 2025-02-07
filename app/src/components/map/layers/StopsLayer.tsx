//fetch stops info a geojson 

import { mockStopsResponse } from "@/api/stopmonitorService/dto/__mock__/stopmonitorResponse.mock";
import { toStopsResponse } from "@/api/stopmonitorService/mappers";

const rawItem = mockStopsResponse;
const mockItem = toStopsResponse(rawItem);
const stopsLayer = () => {
    return mockItem.toGeoJson();
  };
export default stopsLayer;