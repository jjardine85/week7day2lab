const PubSub = require('../helpers/pub_sub.js');

const SelectPlanet = function(element){
  this.element = element;
};

SelectPlanet.prototype.bindEvents = function() {
  this.element.addEventListener('click', (event) => {
    const selectedPlanet = event.target.id;
    PubSub.publish('Planets:selected_planet', selectedPlanet);
    console.log(selectedPlanet);
  })
};

module.exports = SelectPlanet;
