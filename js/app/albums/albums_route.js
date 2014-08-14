PhotoApp.AlbumsRoute = Ember.Route.extend({
    model: function() {
        var albums = [];

        albums.pushObject(Ember.Object.create({"id": "albumOne"}));
        albums.pushObject(Ember.Object.create({"id": "albumTwo"}));
        albums.pushObject(Ember.Object.create({"id": "albumThree"}));

        return albums;
    }
});