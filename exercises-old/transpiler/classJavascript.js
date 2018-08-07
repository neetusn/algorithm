// Everything below is Babel's output.
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]; 
            descriptor.enumerable = descriptor.enumerable || false; 
            descriptor.configurable = true; 
            if ("value" in descriptor) descriptor.writable = true; 
            Object.defineProperty(target, descriptor.key, descriptor); 
        } 
    } 
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps); 
        if (staticProps) defineProperties(Constructor, staticProps); 
        return Constructor; 
    }; 
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Planet = function () {
  function Planet(mass, moons) {
    _classCallCheck(this, Planet);

    this.mass = mass;
    this.moons = moons || 0;
  }

  _createClass(Planet, [{
    key: 'reportMoons',
    value: function reportMoons() {
      console.log('I have ' + this.moons + ' moons.');
    }
  }]);

  return Planet;
}();
"use strict";

class Planet {

  constructor (mass, moons) {
    this.mass  = mass;
    this.moons = moons || 0;
  }

  reportMoons () {
    console.log(`I have ${this.moons} moons.`)
  }

}

// Yeah, Jupiter really does have (at least) 67 moons.
const jupiter = new Planet('Pretty Big', 67);
jupiter.reportMoons();
