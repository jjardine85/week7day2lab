const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectPlanet = require('./views/select_planet.js');
const PlanetInfo = require('./views/planet_info.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const links = document.querySelector('nav.planets-menu');
  const linksView = new SelectPlanet(links);
  linksView.bindEvents();

  const details = document.querySelector('.planet-details');
  const detailsInfo = new PlanetInfo(details);
  detailsInfo.bindEvents();

});
