// In this case, Yin will represent the negative de
// of each personal proprieties

// import {BadCivilian} from './NegativeQualityGoodCivilian.js'
const BadCivilian = require('./NegativeQualityGoodCivilian.js')


function f(length.BadCivilian) {
  if(length.BadCivilian <= 2) return 1;
  let fi = [0, 1, 1]
  for (let i = 3; i <= length.BadCivilian; i++) {
    fi[i] = fi[i-1] + fi[i-2];
  }
  return fi[length.BadCivilian]
