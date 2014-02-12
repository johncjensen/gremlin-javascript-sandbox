function Gremlin( name, size, color, hairlength, eyecolor, birthyear ) {
  this.name = name;
  this.size = size;
  this.color = color;
  this.hairlength = hairlength;
  this.eyecolor = eyecolor;
  this.birthyear = birthyear;

  this.toString = function () {
  return this.name + " the " + this.size + " " + this.color + " Gremlin with " +this.hairlength + " hair and " + this.eyecolor + " eyes was born in " + this.birthyear;
  };
}

var gizmo = new Gremlin("Gizmo", "Tiny", "Green", "Long", "Brown", 1984);
var mogwai = new Gremlin("Mogwai", "Medium", "Blue", "Spikey", "Green", 1985);
var lenny = new Gremlin("Lenny", "Gigantic", "Yellow", "Buzzed", "Red", 1986);

console.log( gizmo.toString() );
console.log( mogwai.toString() );
console.log( lenny.toString() );
