// Refer to https://www.ibm.com/docs/en/db2/11.5?topic=formats-geojson-format for GeoJSON specification

import { LayerSpecification, Map, SourceSpecification } from "mapbox-gl";

export interface SourceConfig {
  id: string;
  type: "geojson";
  // Corresponds to Geometry Types
  // type: "Linestring" | "Polygon" | "MultiPoint" | "MultiLinestring" | "MultiPolygon" | "GeometryCollection"; 
  data: any;
}

export interface LayerConfig {
  id: string;
  type: "fill" | "line" | "circle" | "symbol"; // Extend for other types
  source: SourceSpecification;
  layout?: LayerSpecification["layout"];
  paint?: LayerSpecification["paint"];
  filter?: any[];
  interactive?: boolean;
  onClick?: (event: mapboxgl.MapMouseEvent) => void;
}

export class LayerManager {
  private map: Map;

  constructor(map: Map) {
    this.map = map;
  }

  addLayer(layerConfig: LayerConfig) {
    const { id, source, type, layout, paint, filter, interactive, onClick } = layerConfig;

    if (this.map.getLayer(id)) {
      console.warn(`Layer ${id} already exists. Skipping addition.`);
      return;
    }

    if (!this.map.getSource(id)) {
      this.map.addSource(id, source);
    }

    this.map.addLayer({
      id,
      type,
      source: id,
      layout,
      paint,
      filter,
    });

    if (interactive && onClick) {
      this.map.on("click", id, onClick);
    }
  }

  removeLayer(layerId: string) {
    if (this.map.getLayer(layerId)) {
      this.map.removeLayer(layerId);
    }
    if (this.map.getSource(layerId)) {
      this.map.removeSource(layerId);
    }
  }

  updateLayer(layerConfig: LayerConfig) {
    this.removeLayer(layerConfig.id);
    this.addLayer(layerConfig);
  }
}
