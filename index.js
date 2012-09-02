module.exports = function(prompt, endcmd, f) {
    var r = require('readline').createInterface(process.stdin, process.stdout);
    r.setPrompt(prompt);
    r.prompt();
    r.on('line', function(line) {
        if(line == endcmd) process.exit(0);
        f(line);
        r.prompt();
    })
}
