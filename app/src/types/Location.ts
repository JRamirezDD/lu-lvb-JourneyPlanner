import { Coordinates } from "./Coordinates";

export type Location = { timestamp?: number, coords: Coordinates; heading?: number | null; speed?: number | null; };
