#! /usr/bin/env node

var glob = require('glob' ),
    _ = require('underscore' ),
    path = require('path' ),
    Table = require('cli-table')

// Setup the environmentalist object
var environment = {}

// Use glob to find environmentalist files
glob("./**/environmentalist.json", {}, function (err, files) {

    // If there was some sort of error then kill it
    if ( err ) {
        throw err
        return
    }

    // Create a table to display the environmental variables
    var table = new Table({
        head: ['Name', 'Description', 'Default', 'Required']
    })

    // Iterate over all returned environmentalist files
    _.each(files, function(file) {

        // Load the file from the filesystem
        var fileContent = require(path.resolve(process.cwd(), file))

        // For each file, merge it into the environmental status object
        environment = _.union(environment, fileContent)

        _.each(fileContent, function(variable) {

            table.push([variable.name, variable.description || "", variable.default || "", variable.required || false])

        })

    })

    // Display the finalized
    console.log(table.toString())

})