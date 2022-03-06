import { Plant } from "./lib/datatypes.js";
import { plantToType } from "./lib/transformations.js";

/**
 * @function plantToCard
 * @param {Plant} plant
 * @returns {String} - a string representing an HTML Section element
 */
export const plantToCard = (plant = new Plant()) => `<section class="plant">${plantToType(plant)}</section>`;

export const Catalog = (harvestedPlants = []) => harvestedPlants
    .map(plantToCard)
    .join("");
