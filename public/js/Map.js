import { mapLayers } from './MapLayers.js';
import { mapLegend } from './MapLegend.js';

import { generateRegions } from './MapRegions.js';
import { generateMapItems } from './MapItems.js';

// Map
const map = L.map("map", {
    // Map State Options
    crs: L.CRS.Simple,
    center: [-128, 128],
    zoom: 3,
    minZoom: 2,
    maxZoom: 5,
    maxBounds: [[-256,-50],[0,306]],
    maxBoundsViscosity: 1.0,

    // Layer Groups
    layers: [
        mapLayers.OriginalMapTiles,

        mapLayers.RegionNames,
        mapLayers.RegionBorders,

        mapLayers.TownBases,
        mapLayers.RelicBases,
        mapLayers.Keeps,
        mapLayers.Safehouses,

        mapLayers.ObservationTowers,
        mapLayers.RocketSites,
        mapLayers.CoastalGuns,
        
        mapLayers.Hospitals,
        mapLayers.Factories,
        mapLayers.VehicleFactories,
        mapLayers.StorageDepot,
        mapLayers.Refineries,
        mapLayers.Shipyards,
        mapLayers.ConstructionYards,
        mapLayers.MassProductionFactories,
        mapLayers.Seaports,
        mapLayers.EngineeringCenters,
        
        mapLayers.SalvageFields,
        mapLayers.ComponentFields,
        mapLayers.SulfurFields,
        
        mapLayers.SalvageMines,
        mapLayers.ComponentMines,
        mapLayers.SulfurMines,
        mapLayers.OilWells,

        mapLayers.StormCannons,
        mapLayers.IntelCenters,
    ]
});

// Panes
map.createPane('basesPane').style.zIndex = 609;
map.createPane('structuresPane').style.zIndex = 608;
map.createPane('resourcesPane').style.zIndex = 607;
map.createPane('regionLabelsPane').style.zIndex = 620;
map.createPane('regionBordersPane').style.zIndex = 400;
map.createPane('backgroundPane').style.zIndex = 100;

// Regions
generateRegions();

// Map Items
generateMapItems();

// Map Legend
mapLegend().addTo(map);

// Monkey messing around drawing circles
//L.circle([-128, 128], {radius: 10}).addTo(map);



map.on('click', function(ev) {
    //alert(ev.latlng); // ev is an event object (MouseEvent in this case)
    console.log(ev.latlng);
    //L.circle([-100,120], {radius: 10}).addTo(map);
   // THIS FUCKING WORKS FOR DRAWINGA CIRCLE WHERE I CLICK! WOOOOOOOOOOOOO
    L.circle([ev.latlng.lat,ev.latlng.lng], {radius: 10}).addTo(map);
});
