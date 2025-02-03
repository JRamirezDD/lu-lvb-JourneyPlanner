"use client"

import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import stopsLayer from "./map/layers/StopsLayer"
import type React from "react" // Added import for React
import routeLayer from "./map/layers/RouteLayer"
import RouteLayer from "./map/layers/RouteLayer"
import routeLayerData from "./map/layers/RouteLayer"

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(routeLayerData);
    //create map:
    mapboxgl.accessToken =
      "pk.eyJ1IjoibS1iZXJlbmdlciIsImEiOiJjbTZpYnQ2eTUwNjZ4Mm9zNTl4M2wwd2hmIn0.dypp0rb10-6yuJu1YqOjyA"

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.37701425222998, 51.3406130352673],
      zoom: 12,
    })

    map.on("load", () => {
      // get routelayer data
      map.addSource("geojson-source", {
        type: "geojson",
        data: routeLayer, 
      })

      // Adding the layer to display the first and last points as dots
      map.addLayer({
        id: "endpoint-layer",
        type: "circle",
        source: "geojson-source",
        paint: {
          "circle-radius": 8,
          "circle-color": "#007cbf",
        },
        filter: [
          "any",
          ["==", ["get", "stop_sequence"], 1],
          ["==", ["get", "stop_sequence"], ["length", ["get", "features"]]],
        ],
      }, 
    
    
    )

      // Adding the layer to connect other points with a dotted line
      map.addLayer({
        id: "route-layer",
        type: "line",
        source: "geojson-source",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#007cbf",
          "line-width": 2,
          "line-dasharray": [2, 2],
        },
      })
    })

    return () => map.remove()
  }, [])

  return <div ref={mapContainer} style={{ width: "100%", height: "700px" }} />
}

export default Map

