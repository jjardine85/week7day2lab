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

  const info = document.createElement('div');
  info.classList.add('info');

  const infoName = document.createElement('p');
  infoName.textContent = `${planet.name}`;

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
  this.container.appendChild(info);
  info.appendChild(infoName);
  info.appendChild(infoOrbit);
  info.appendChild(infoSurface);
  info.appendChild(infoVolume);
  info.appendChild(infoGravity);
  info.appendChild(infoMoons);


  const planetPicture = document.createElement('div');
  planetPicture.classList.add('picture');
  this.container.appendChild(planetPicture);
  if (planet.name === "Earth") {
    planetPicture.classList.add('earth');
  }
  if (planet.name === "Mercury") {
    planetPicture.classList.add('mercury');
  }
  if (planet.name === "Venus") {
    planetPicture.classList.add('venus');
  }
  if (planet.name === "Mars") {
    planetPicture.classList.add('mars');
  }
  if (planet.name === "Jupiter") {
    planetPicture.classList.add('jupiter');
  }
  if (planet.name === "Saturn") {
    planetPicture.classList.add('saturn');
  }
  if (planet.name === "Uranus") {
    planetPicture.classList.add('uranus');
  }
  if (planet.name === "Neptune") {
    planetPicture.classList.add('neptune');
  }
}

module.exports = PlanetInfo;
