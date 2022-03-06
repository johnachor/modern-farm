import {
    ASPARAGUS_TYPE,
    CORN_TYPE,
    POTATO_TYPE,
    SOYBEAN_TYPE,
    SUNFLOWER_TYPE,
    WHEAT_TYPE,
    createAsparagus,
    createCorn,
    createPotato,
    createSoybean,
    createSunflower,
    createWheat
} from "../seeds/index.js";
import { Plant } from "./datatypes.js";


/**
 * @function plantTypeToPlant
 * @param {String} plantName
 * @returns {Plant}
 */
export const plantTypeToPlant = (plantName = "") => {
    switch (plantName) {
        case ASPARAGUS_TYPE:
            return createAsparagus();
        case CORN_TYPE:
            return createCorn();
        case POTATO_TYPE:
            return createPotato();
        case SOYBEAN_TYPE:
            return createSoybean();
        case SUNFLOWER_TYPE:
            return createSunflower();
        case WHEAT_TYPE:
            return createWheat();
        default:
            return new Plant();
    }
}

/**
 * @function plantToType
 * @param {Plant} plant
 * @param {String} plant.type
 * @returns {String}
 */
export const plantToType = ({ type } = new Plant()) => type;

/**
 * @function plantToOutput
 * @param {Plant} plant
 * @param {Number} plant.output
 * @returns {Number}
 */
export const plantToOutput = ({ output } = new Plant()) => output;
