import mapboxgl, { LayerSpecification, Map, SourceSpecification } from "mapbox-gl";

export interface SourceConfig {
  id: string;
  type: "geojson";
  data: any;
}

export interface LayerConfig {
  id: string;
  type: "fill" | "line" | "circle" | "symbol";
  // Use sourceId to reference an existing source if needed
  sourceId?: string;
  // Fallback to inline source if no sourceId is provided
  source?: SourceConfig;
  layout?: LayerSpecification["layout"];
  paint?: LayerSpecification["paint"];
  filter?: any[];
  interactive?: boolean;
  onClick?: (event: mapboxgl.MapMouseEvent) => void;
  imageUrl?: string;
  imageId?: string;
  iconSize?: number;
}


export class LayerManager {
  private map: mapboxgl.Map;

  constructor(map: mapboxgl.Map) {
    this.map = map;
  }

  loadAndAddImage(imageId: string, url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.map.hasImage(imageId)) {
        resolve();
        return;
      }
      this.map.loadImage(url, (error, image) => {
        if (error || !image) {
          reject(error);
          return;
        }
        this.map.addImage(imageId, image);
        resolve();
      });
    });
  }

  async addLayer(layerConfig: LayerConfig) {
    const {
      id,
      sourceId,
      source,
      type,
      layout,
      paint,
      filter,
      interactive,
      onClick,
      imageUrl,
      imageId,
      iconSize,
    } = layerConfig;

    if (this.map.getLayer(id)) {
      console.warn(`Layer ${id} already exists. Skipping addition.`);
      return;
    }

    // If image is required for a symbol layer, load it.
    if (type === "symbol" && imageUrl && imageId) {
      try {
        await this.loadAndAddImage(imageId, imageUrl);
      } catch (error) {
        console.error("Error loading image:", error);
        return;
      }
      // Merge icon settings into layout.
      const defaultLayout = {
        "icon-image": imageId,
        "icon-size": iconSize || 1,
        "icon-allow-overlap": true,
      };
      layerConfig.layout = { ...defaultLayout, ...layout };
    }

    // Determine which source id to use.
    // If a sourceId is provided, we assume that source is already added.
    // Otherwise, we use the layer id as the source id and add it if necessary.
    const srcId = sourceId || id;
    if (!this.map.getSource(srcId)) {
      if (source) {
        this.map.addSource(srcId, source);
      } else {
        console.error(`Source ${srcId} not found and no inline source provided.`);
        return;
      }
    }

    // Add the layer, referencing the determined source id.
    this.map.addLayer({
      id,
      type,
      source: srcId,
      layout: layerConfig.layout,
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
    // Logic to remove source can be implemented here.
      // Must be safe to remove (ie. no layers are using the source.)
  }

  updateLayer(layerConfig: LayerConfig) {
    this.removeLayer(layerConfig.id);
    this.addLayer(layerConfig);
  }
}
