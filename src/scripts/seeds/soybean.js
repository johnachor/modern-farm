import { Plant } from '../lib/datatypes.js';

export const SOYBEAN_TYPE = "Soybean",
    SOYBEAN_HEIGHT = 20,
    SOYBEAN_OUTPUT = 4;

/**
 * @function createSoybean
 * @returns {Plant}
 */
export const createSoybean = () => new Plant(
    SOYBEAN_TYPE,
    SOYBEAN_HEIGHT,
    SOYBEAN_OUTPUT
);
