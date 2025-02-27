import maplibregl, { LayerSpecification, Map, SourceSpecification } from "maplibre-gl";

export class LayerManager {
  private map: maplibregl.Map;

  constructor(map: maplibregl.Map) {
    this.map = map;
  }

  addSource(sourceId: string, sourceConfig: SourceSpecification) {
    if (!this.map.getSource(sourceId)) {
      this.map.addSource(sourceId, sourceConfig);
    }
  }

  addLayer(layerConfig: LayerSpecification, interactive = false, onClick?: (e: maplibregl.MapMouseEvent) => void) {
    if (this.map.getLayer(layerConfig.id)) {
      console.warn(`Layer ${layerConfig.id} already exists. Skipping addition.`);
      return;
    }

    this.map.addLayer(layerConfig);
    
    console.log("layer added with properties", layerConfig);

    if (interactive && onClick) {
      this.map.on("click", layerConfig.id, onClick);
    }
  }

  removeLayer(layerId: string) {
    if (this.map.getLayer(layerId)) {
      this.map.removeLayer(layerId);
    }
  }

  removeSource(sourceId: string) {
    if (this.map.getSource(sourceId)) {
      this.map.removeSource(sourceId);
    }
  }

  updateLayer(layerConfig: LayerSpecification) {
    this.removeLayer(layerConfig.id);
    this.addLayer(layerConfig);
  }
}
