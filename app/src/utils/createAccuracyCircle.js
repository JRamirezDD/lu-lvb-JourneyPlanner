import circle from '@turf/circle';

export const createAccuracyCircle = (lon, lat, accuracy) => {
  return circle([lon, lat], accuracy, { steps: 64, units: 'meters' });
};
