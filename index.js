module.exports = function(prompt, endcmd, f) {

	var fs = require('fs');

	if(fs.existsSync(prompt)){
		f = endcmd;
		var script = require('fs').readFileSync(prompt).toString().split(/\r?\n/);
		script.forEach(function(line){
			f(line);
		})
		return;
	}

    var r = require('readline').createInterface(process.stdin, process.stdout);
    r.setPrompt(prompt);
    r.prompt();
    r.on('line', function(line) {
        if(line == endcmd) process.exit(0);
        f(line);
        r.prompt();
    })
}
