cli-node
==================
###Simple helper to do command line interfaces

cli-node(prompt, exit_cmd, handle_input)

````
require('cli-node')('OK >', 'quit', function(line) {
	console.log(line);
})
````

OR read a script line by line
````
require('cli-node')('script.txt', function(s){
	console.log(s);
})
````
