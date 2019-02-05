const PubSub = require('../helpers/pub_sub.js')

const PlanetInfo = function(container){
  this.container = container;
};

PlanetInfo.prototype.bindEvents = function() {
  PubSub.subscribe('PlanetInfo:all-info', (event) => {
    const planetInfo = event.detail;
    this.render(planetInfo);
  });
};

PlanetInfo.prototype.render = function(planet) {
  const infoName = document.createElement('p');
  infoName.textContent = `Name: ${planet.name}`;

  const infoOrbit = document.createElement('p');
  infoOrbit.textContent = `Orbit: ${planet.orbit}`;

  const infoSurface = document.createElement('p');
  infoSurface.textContent = `Surface Area: ${planet.surfaceArea}`;

  const infoVolume = document.createElement('p');
  infoVolume.textContent = `Volume: ${planet.volume}`;

  const infoGravity = document.createElement('p');
  infoGravity.textContent = `Gravity: ${planet.gravity}`;

  const infoMoons = document.createElement('p');
  infoMoons.textContent = `Moons: ${planet.moons}`;


  this.container.innerHTML='';
  this.container.appendChild(infoName);
  this.container.appendChild(infoOrbit);
  this.container.appendChild(infoSurface);
  this.container.appendChild(infoVolume);
  this.container.appendChild(infoGravity);
  this.container.appendChild(infoMoons);
}

module.exports = PlanetInfo;
