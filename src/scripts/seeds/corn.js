import { Plant } from '../lib/datatypes.js';

export const CORN_TYPE = "Corn",
    CORN_HEIGHT = 180,
    CORN_OUTPUT = 6;

/**
 * @function createIndividualCorn
 * @returns {Plant}
 */
export const createIndividualCorn = () => new Plant(
    CORN_TYPE,
    CORN_HEIGHT,
    CORN_OUTPUT
);

/**
 * @function createCorn
 * @returns {Plant[]}
 */
export const createCorn = () => [
    createIndividualCorn(),
    createIndividualCorn()
];
