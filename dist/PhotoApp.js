var PhotoApp = Ember.Application.create({});
PhotoApp.AlbumsAlbumRoute = Ember.Route.extend({
    model: function(album) {
        return Ember.Object.create({"id": album.album_id + "_abvahare"});
    }
});
PhotoApp.AlbumsRoute = Ember.Route.extend({
    model: function() {
        var albums = [];

        albums.pushObject(Ember.Object.create({"id": "albumOne"}));
        albums.pushObject(Ember.Object.create({"id": "albumTwo"}));
        albums.pushObject(Ember.Object.create({"id": "albumThree"}));

        return albums;
    }
});
PhotoApp.Router.map(function() {
    this.resource("albums", {path: '/'}, function() {
        this.route('album', {path: '/albums/:album_id'});
    });
});