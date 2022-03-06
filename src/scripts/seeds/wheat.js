import { Plant } from '../lib/datatypes.js';

export const WHEAT_TYPE = "Wheat",
    WHEAT_HEIGHT = 230,
    WHEAT_OUTPUT = 6;

/**
 * @function createWheat
 * @returns {Plant}
 */
export const createWheat = () => new Plant(
    WHEAT_TYPE,
    WHEAT_HEIGHT,
    WHEAT_OUTPUT
);
