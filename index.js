const sapphire_jsverse_x = require('sapphire-jsverse-x');
const sapphire_pythverse_x = require('sapphire-pythverse-x');
const web3_utils = require('web3-utils');
const jquery = require('jquery');
const ethereumjs_util = require('ethereumjs-util');
const moment = require('moment');
const bcrypt = require('bcrypt');
const eslint = require('eslint');
const passport = require('passport');
const commander = require('commander');
const socket.io = require('socket.io');
const sinon = require('sinon');
const webpack_cli = require('webpack-cli');
const babel_core = require('babel-core');
const redux = require('redux');
const xml2js = require('xml2js');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}

const fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);
fruits.forEach((value, key) => {
    console.log(`There are ${value} ${key} in the store.`);
});

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(2000, 'done').then(value => {
  console.log(value);
});

const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple is $0.65 per pound.');
    break;
  case 'banana':
    console.log('Banana is $0.33 per pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog('Buddy');
dog.speak();