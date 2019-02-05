const PubSub = require("../helpers/pub_sub.js");

const SolarSystem = function(planets) {
  this.planets = planets;
};


SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:selected_planet', (event) => {
    const chosenPlanet = event.detail;
    const selectedObject = this.findPlanet(chosenPlanet);
    PubSub.publish('PlanetInfo:all-info', selectedObject);
    console.log(selectedObject);
  });
};

SolarSystem.prototype.findPlanet = function(planetName) {
  const foundPlanet = this.planets.find((planet) => {
    return planet.name === planetName;
  });
  return foundPlanet;
};

module.exports = SolarSystem;
