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

  it("max temperature should be 32 when power saving mode is off", function() {
    thermostat.toggle();
    expect(thermostat._max).toEqual(32);
  });

  it("max temperature should be 25 when power saving mode is on", function() {
    expect(thermostat._max).toEqual(25);
  });

  it("temp can be reset to 20 using reset function", function() {
    while(thermostat._temperature > thermostat._min) {thermostat.down();}
    thermostat.reset();
    expect(thermostat._temperature).toEqual(20)
  });

  it("lets user know current energy usage is low-usage", function(){
    for(var i=0; i < 3; i++){
      thermostat.down()
    }
    expect(thermostat.usage()).toEqual("Low")
  });

  it("lets user know current energy usage is low-usage", function(){
    expect(thermostat.usage()).toEqual("Med")
  });

  it("lets user know current energy usage is low-usage", function(){
    for(var i=0; i < 5; i++){
      thermostat.up()
    }
    expect(thermostat.usage()).toEqual("High")
  });

});
