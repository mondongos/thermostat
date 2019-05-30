describe('Thermostat', function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat._temperature).toEqual(20);
  });

  it("should increase the temperature by 1 with an 'up' method", function() {
    thermostat.up()
    expect(thermostat._temperature).toEqual(21);
  });

  it("should decrease the temperature by 1 with a 'down' method", function() {
    thermostat.down()
    expect(thermostat._temperature).toEqual(19);
  });

  it("should throw error when temperature reaches minimum temp", function() {
    while(thermostat._temperature > thermostat._min) {thermostat.down();}
    expect(function() {thermostat.down()}).toThrowError("It's hecking freezing in here!")
  });

  it("should throw error when temperature reaches max temp", function() {
    while(thermostat._temperature < thermostat._max) {thermostat.up();}
    expect(function() {thermostat.up()}).toThrowError("Ouch, my bones are hot! Owie!")
  });
});
