var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// First, you need to instantiate a Mocha instance.
var mocha = new Mocha;

// Then, you need to use the method "addFile" on the mocha
// object for each file.

// Here is an example:
var test_regex = /test_.*\.js/;
fs.readdirSync(__dirname).filter(function(file){
    // Only keep the .js files starting with 'test_'
    return test_regex.test(file);
}).forEach(function(file){
    // Use the method "addFile" to add the file to mocha
    mocha.addFile(
        path.join(__dirname, file)
    );
});

// Now, you can run the tests.
mocha.growl().run(function(failures){
  process.on('exit', function () {
    process.exit(failures);
  });
});