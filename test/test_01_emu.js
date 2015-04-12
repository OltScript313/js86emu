var path = require('path');
var requirejs = require('requirejs');
var should = require('should');
var sinon = require('sinon');
var u = require('./utils');

require('es6-promise').polyfill();

// Minimal configuration of require.js for this test run
requirejs.config({
    baseUrl: path.normalize(__dirname + "/../src/js"),
    nodeRequire: require,
    paths: {
        'jquery'     : '../js/lib/jquery-1.11.0',
        'underscore' : '../lib/underscore-1.6.0',
        'promise'    : '../js/lib/es6-promise-2.0.1.js'
    }
});


/**
 * Emulator tests
 */
describe('Emu', function () {

    var mockEmu, jQuery;

    before("Emulator Setup", function(done){
        // Load the Emu module using require.js
        requirejs([
            'jquery',
            'underscore',
            'emu/emu'
        ], function (
            _jQuery,
            _,
            _File
        ) {
            jQuery = _jQuery;
            mockEmu = _File;
            done();
        });
    });

    it('should run pre-boot steps', function() {
        var Cpu = mockEmu.t_getCpu();

        var mock = sinon.mock(Cpu)
            .expects("clearMemory").once();

        console.log("HERE");
        var p = mockEmu.pre_boot();

        p.then(function(){
            console.log("IN CALLBACK")
            mock.verify();
            done();
        }, function(e){
            console.log(e);
        });
    });

    it.skip('should boot CPU', function() {
        // TODO: Write test
        false.should.be.true;
        // mockEmu.boot();
    });

    it.skip('should run emulation', function() {
        // TODO: Write test
        false.should.be.true;
        // mockEmu.run();
    });

    it.skip('should reset the CPU state', function() {
        // TODO: Write test
        false.should.be.true;
        // mockEmu.reset();
    });

    it.skip('should pause emulation', function() {
        // TODO: Write test
        false.should.be.true;
        // mockEmu.pause();
    });

    it.skip('should halt emulation', function() {
        // TODO: Write test
        false.should.be.true;
        // mockEmu.halt();
    });

    it.skip('should step one instruction', function() {
        // TODO: Write test
        false.should.be.true;
        // mockEmu.step();
    });

    it.skip('should run a binary program', function() {
        // TODO: Write test
        false.should.be.true;
        // mockEmu.runBlob();
    });

    it.skip('should return debug state', function() {
        // TODO: Write test
        false.should.be.true;
        // mockEmu.isDebug();
    });

});