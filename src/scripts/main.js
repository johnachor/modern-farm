import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import { Catalog } from './catalog.js';

plantSeeds(createPlan());

document.querySelector(".container").innerHTML += Catalog(
    harvestPlants(
        usePlants()
    )
);
