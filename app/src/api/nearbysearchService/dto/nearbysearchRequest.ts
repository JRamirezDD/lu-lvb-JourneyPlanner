/**
 * Defines the query parameters for the nearby search API.
 */
export interface NearBySearchParams {
    /**
     * Coordinate in the format "lat,lon" (e.g., "51.35,12.35").
     */
    center: string;
  
    /**
     * Search radius in meters.
     */
    radius: number;
  
    /**
     * Optional response format. Valid values: "TRIAS", "TRIAS12", or omitted for default.
     */
    format?: string;
  
    /**
     * Optional comma-separated list of types.
     * Valid values include: "station", "stop", "free_floating", "parkingarea", "operationarea", "mobistation".
     */
    types?: string;
  
    /**
     * Optional comma-separated list of vehicle types.
     * Valid values include: "car", "bike".
     */
    vehicletypes?: string;
  
    /**
     * Optional comma-separated list of sources.
     * Valid values include: "nextbike", "cantamen", "flinkster", "taxi", "lvb", "gtfs-mdv", "escooter", "ticket-seller", "parkit", "flexa".
     */
    sources?: string;
  
    /**
     * Optional comma-separated list of provider names (e.g., "nextbike Leipzig", "LTB Leipzig", "teilAuto", "escooter", "S O NAH").
     */
    provider?: string;
  
    /**
     * Optional number indicating the maximum number of results to return.
     */
    number?: number;
  }
  