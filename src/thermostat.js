function Thermostat() {
  this._temperature = 20;
  this._min = 10
  this._max = 25

};

Thermostat.prototype.up = function() {
  if(this._temperature === this._max) {throw new Error("Ouch, my bones are hot! Owie!")}
  this._temperature++;
};

Thermostat.prototype.down = function() {
  if(this._temperature === this._min) {throw new Error("It's hecking freezing in here!")}
  this._temperature--;
};
