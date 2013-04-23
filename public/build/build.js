({
    name: '../app/main',
    baseUrl: '../app',
    out: 'output/app/main.js',
    findNestedDependencies: true,
    mainConfigFile: '../app/main.js',
    optimize: 'uglify' // 'none' or 'uglify'(requires nodejs and uglify-js installed)
})
