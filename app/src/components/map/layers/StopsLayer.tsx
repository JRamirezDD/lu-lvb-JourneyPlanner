//fetch stops info a geojson 

import { mockStopsResponse } from "@/api/stopmonitorService/dto/__mock__/stopmonitorResponse.mock";
import { toStopsResponse } from "@/api/stopmonitorService/mappers";

const rawItem = mockStopsResponse;
const mockItem = toStopsResponse(rawItem);
const stopsLayer = mockItem.toGeoJson();

export default stopsLayer;