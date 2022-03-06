import { addPlant } from "./field.js";
import { plantTypeToPlant } from "./lib/transformations.js";

/**
 * @function plantPlanRow
 * @param {String[]} seedRow
 */
export const plantPlanRow = (seedRow = []) => seedRow
    .map(plantTypeToPlant)
    .forEach(addPlant);

/**
 * @function plantSeeds
 * @param {String[][]} plantingPlan
 */
export const plantSeeds = (plantingPlan = []) => plantingPlan
    .forEach(plantPlanRow);
