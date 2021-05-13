const moment = require('moment')

function sayMyName(nome){
  console.log(`nome: ${nome}`);
  console.log(moment().format('HH:mm'));
}

sayMyName("mauro")
