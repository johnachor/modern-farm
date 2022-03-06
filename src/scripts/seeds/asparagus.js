import { Plant } from '../lib/datatypes.js';

export const ASPARAGUS_TYPE = "Asparagus",
    ASPARAGUS_HEIGHT = 24,
    ASPARAGUS_OUTPUT = 4;

/**
 * @function createAsparagus
 * @returns {Plant}
 */
export const createAsparagus = () => new Plant(
    ASPARAGUS_TYPE,
    ASPARAGUS_HEIGHT,
    ASPARAGUS_OUTPUT
);
