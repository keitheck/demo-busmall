'use strict';

Goat.allGoats = [];

function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Goats.allGoats.push(this);
}

Goat.allGoats = [];

new Goat('cool goat', 'img/cool-goat.png');
new Goat('mean goat', 'img/mean-goat.png');

console.log(Goat.allGoats);
