import { Plant } from "./lib/datatypes.js";
import { plantTypeToPlant, plantToOutput, plantToType } from "./lib/transformations.js";
import { CORN_TYPE, CORN_OUTPUT_DIVISOR, createIndividualCorn } from "./seeds/index.js";

/**
 * Divide corn output due to sales to cattle ranchers
 * @function cornOutputToOutput
 * @param {Number} cornOutput
 * @returns {Number}
 */
export const cornOutputToOutput = (cornOutput = 0) => cornOutput / CORN_OUTPUT_DIVISOR;

/**
 * Modify output if provided type is corn
 * @function plantTypeAndOutputToModifiedOutput
 * @param {String} type
 * @param {Number} output
 * @returns {Number}
 */
export const plantTypeAndOutputToModifiedOutput = (type = "", output = 0) => type === CORN_TYPE
    ? cornOutputToOutput(output)
    : output;

/**
 * Need to use the creator for individual corn here since we don't want corn arrays
 * @function plantTypeToHarvestedPlant
 * @param {String} plantType
 * @returns {Plant}
 */
export const plantTypeToHarvestedPlant = (plantType = '') => plantType === CORN_TYPE
    ? createIndividualCorn()
    : plantTypeToPlant(plantType);

/**
 * Return an array of X plant objects of the provided plant's type, where X is a function of the plant's output
 * @function harvestPlant
 * @param {Plant} plant
 * @returns {Plant[]}
 */
export const harvestPlant = (plant = new Plant()) => {
    const modifiedOutput = plantTypeAndOutputToModifiedOutput(
        plantToType(plant),
        plantToOutput(plant)
    );

    return new Array(modifiedOutput) // create array with length equal to modified output
        .fill(plantToType(plant))    // set each array element to plant name
        .map(plantTypeToHarvestedPlant);
}

/**
 * @function harvestPlants
 * @param {Plant[]} plantField
 * @returns {Plant[]} - the combined harvest of all plants in the input array
 */
export const harvestPlants = (plantField = []) => plantField
    .map(harvestPlant)
    .flat();
