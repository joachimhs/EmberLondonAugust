module.exports = {
    options: {
        separator: '\n'
    },
    dist: {
        src: ['js/app/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
    }
};