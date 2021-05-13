const process = require ('process');

console.log(process.argv);

process.stdout.write('qual seu nome\n');

process.stdin.on('data',(keyboard)=>{
  process.stdout.write(`texto do usuario: ${keyboard}`);
  process.exit();
})
