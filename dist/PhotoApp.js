var PhotoApp = Ember.Application.create({});
PhotoApp.Router.map(function() {
    this.resource("albums", {path: '/'}, function() {

    });
});