cli-node
==================
Simple helper to do command line interfaces

require('cli-node')('OK >', 'quit', function(line) {
	console.log(line);
})
