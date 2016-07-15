'use strict'

const angular = require('angular')
angular.module('demoApp').controller('GameController', [GameController])

function GameController(){
  this.defaults = {
    weapons: ['axe', 'knife', 'wand', 'rock']
  }

  this.history = [];
  this.player = {
    name: 'sluggy',
    hp: 100,
    weapon: 'axe',
    location: 'roomA',
  }

  this.room = {
    name: this.player.location,
    monster: null
  }

  this.gameForm = {
    direction: 'north'
  }

  this.map = require('../lib/map')
}

GameController.prototype.moveDirection = function(direction){
  console.log('direction', direction)
  let oldLocation = this.player.location;
  let newLocation = this.map[oldLocation][direction]
  if (newLocation === 'wall') return
  this.updateLocation(newLocation)
}

GameController.prototype.updateLocation = function(location){
  this.player.location = location
  this.room.name = location
  this.room.monster = this.getMonster(location)
  if (this.room.monster){
    this.player.hp -= this.room.monster.damagePoints;
    this.history.push(`${this.player.name} has entered ${this.room.name}. A ${this.room.monster.name} appeared and hurt you. you lost ${this.room.monster.damagePoints}`)
    return
  }
    this.history.push(`${this.player.name} has entered ${this.room.name}. the room is empty ${Math.random()}`)
}

GameController.prototype.getMonster = function(roomName){
  if (Math.random() < this.map[roomName].monsterChanse){
    return new Monster()
  }
  return null
}

function Monster (){
  var names = ['spooky worm', 'boogy bug', 'scary virus']
  this.name = randomArrayElement(names)
  this.damagePoints = Math.floor(Math.random() * 20)
}

function randomArrayElement(array){
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}
