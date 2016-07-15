'use strict'

module.exports = {
    roomA: {
      north: 'wall',
      south: 'roomC',
      east: 'roomB',
      west: 'wall',
      monsterChanse: 0.2,
      potionChanse: 0.5,
    },
    roomB: {
      north: 'wall',
      south: 'roomD',
      east: 'wall',
      west: 'roomC',
      monsterChanse: 0.7,
      potionChanse: 0.2,
    },
    roomC: {
      north: 'roomA',
      south: 'wall',
      east: 'roomD', 
      west: 'wall',
      monsterChanse: 0.3,
      potionChanse: 1,
    },
    roomD: {
      north: 'roomB',
      south: 'wall',
      east: 'wall', 
      west: 'roomC',
      monsterChanse: 0.5,
      potionChanse: 0.5,
    }
  }
