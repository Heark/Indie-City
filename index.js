var ready = require('enyo/ready'),
    kind = require('enyo/kind'),
    Toolbar = require('onyx/Toolbar'),
    Application = require('enyo/Application');

ready(function() {
    var MAIN_METHOD = kind({
        name: "_main",
        components: [
            {kind: Toolbar, content: "Indie City"},
            {kind: Toolbar, content: "Welcome!"}
        ]
    });

    new Application({view: MAIN_METHOD});
});
