// les imports se font toujours tout en haut du document 
import './style.css'; // importation du style créer en local au format css 
import {Map, View} from 'ol'; // importation de fonction d'OpenLayers 
import { ImageWMS } from 'ol/source'; // importation de fonction d'OpenLayers 
import TileLayer from 'ol/layer/Tile'; // importation de fonction d'OpenLayers 
import ImageLayer from 'ol/layer/Image'; // importation de fonction d'OpenLayers 
import OSM from 'ol/source/OSM'; // importation de fonction Open Street Map 

const couche_osm = new TileLayer({ source: new OSM() });  // creation d'une variable constante (qui ne peut être changer) ici on créer une couche osm

// Creation d'une image que l'on stock dans ma_source 
const ma_source = new ImageWMS({
  url: 'https://ahocevar.com/geoserver/wms',
  params: { 'LAYERS' : 'topp:states' },
  serverType: 'geoserver',
}); 

// Création d'une constante ma _couche dans laquelle on stocke 
const ma_couche = new ImageLayer({
  source: ma_source,
});

const map = new Map({
  target: 'map',
  layers: [ couche_osm, ma_couche ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});


