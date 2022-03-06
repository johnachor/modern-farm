import { Plant } from "./lib/datatypes.js";

const field = [];

/**
 * @function tillSeed
 * @param {Plant} seed
 * @returns {Number} - The length of the field array
 */
export const tillSeed = (seed = new Plant()) => field.push(seed);

/**
 * @function addPlant
 * @param {Plant|Plant[]} seed - A Plant, or an array which may contain Plant and/or Plant[]
 */
export const addPlant = (seed = new Plant()) => {
    if (Array.isArray(seed)) {
        seed.forEach(addPlant);
    } else {
        tillSeed(seed);
    }
};

/**
 * @function usePlants
 * @returns {Plant[]}
 */
export const usePlants = () => [...field];
