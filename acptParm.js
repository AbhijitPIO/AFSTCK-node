const command = process.argv[2];
//const yargs = require('yargs')

console.log(process.argv);
//console.log(yargs.argv)
// customize yargs version if required
// yargs.version('1.1.0')
// Create Add command
// yargs.command({command: 'add',
//describe: 'Add a new note',
//handler: function() {console.log('Adding a new note')}}
//)

if (command === 'add') {
  console.log('Adding Note!');
} else if (command === 'remove') {
  console.log('Removing Note!');
}
