cli-node
==================
###Simple helper to do command line interfaces

cli-node(prompt, exit_cmd, handle_input)

```javascript
require('cli-node')('OK >', 'quit', function(line) {
	console.log(line);
})
```

