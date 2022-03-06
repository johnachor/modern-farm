import { Plant } from '../lib/datatypes.js';

export const SUNFLOWER_TYPE = "Sunflower",
    SUNFLOWER_HEIGHT = 380,
    SUNFLOWER_OUTPUT = 3;

/**
 * @function createSunflower
 * @returns {Plant}
 */
export const createSunflower = () => new Plant(
    SUNFLOWER_TYPE,
    SUNFLOWER_HEIGHT,
    SUNFLOWER_OUTPUT
);
