import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import { Catalog } from './catalog.js';

const plan = createPlan();

plantSeeds(plan);

document.querySelector(".container").innerHTML += Catalog(harvestPlants(usePlants()));
