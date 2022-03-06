import { Plant } from '../lib/datatypes.js';

export const POTATO_TYPE = "Potato",
    POTATO_HEIGHT = 32,
    POTATO_OUTPUT = 2;

/**
 * @function createPotato
 * @returns {Plant}
 */
export const createPotato = () => new Plant(
    POTATO_TYPE,
    POTATO_HEIGHT,
    POTATO_OUTPUT
);
