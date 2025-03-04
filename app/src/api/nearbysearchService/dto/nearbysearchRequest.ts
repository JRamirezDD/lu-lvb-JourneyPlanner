/**
 * Defines the query parameters for the nearby search API.
 */
export interface NearBySearchParams {
    center: string; //Coordinate in the format "lat,lon" (e.g., "51.35,12.35").
    radius: number; //Search radius in meters.
    format?: string; //Optional response format. Valid values: "TRIAS", "TRIAS12", or omitted for default.
    types?: string;//Optional comma-separated list of types.
                  //Valid values include: "station", "stop", "free_floating", "parkingarea", "operationarea", "mobistation".
    vehicletypes?: string;  //Optional comma-separated list of vehicle types.
                            //Valid values include: "car", "bike".
    sources?: string; //Optional comma-separated list of sources.
                      //Valid values include: "nextbike", "cantamen", "flinkster", "taxi", "lvb", "gtfs-mdv", "escooter", "ticket-seller", "parkit", "flexa".
    provider?: string;  //Optional comma-separated list of provider names (e.g., "nextbike Leipzig", "LTB Leipzig", "teilAuto", "escooter", "S O NAH").
    number?: number;  //Optional number indicating the maximum number of results to return.
  }
  

export interface NearBySearchParamsWithBoundingBox {
  bb: string // bounding box in the format "lat1,lon1,lat2,lon2" (e.g., "51.35,12.35,51.36,12.36"). 
  format?: string; //Optional response format. Valid values: "TRIAS", "TRIAS12", or omitted for default.
  types?: string;//Optional comma-separated list of types.
                  //Valid values include: "station", "stop", "free_floating", "parkingarea", "operationarea", "mobistation".
  vehicletypes?: string;  //Optional comma-separated list of vehicle types.
                            //Valid values include: "car", "bike".
  sources?: string; //Optional comma-separated list of sources.
                      //Valid values include: "nextbike", "cantamen", "flinkster", "taxi", "lvb", "gtfs-mdv", "escooter", "ticket-seller", "parkit", "flexa".
  provider?: string;  //Optional comma-separated list of provider names (e.g., "nextbike Leipzig", "LTB Leipzig", "teilAuto", "escooter", "S O NAH").
  number?: number;  //Optional number indicating the maximum number of results to return.
}