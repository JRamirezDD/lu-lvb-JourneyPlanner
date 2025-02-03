//fetch route info as geojson

import { mockOtpResponse } from "@/api/routingService/dto/__mock__/otpResponse.mock";
import { toOtpResponse } from "@/api/routingService/mappers";


const routeLayer = JSON.parse(toOtpResponse(mockOtpResponse).toGeoJson());

export default routeLayer;