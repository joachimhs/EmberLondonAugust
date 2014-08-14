PhotoApp.AlbumsAlbumRoute = Ember.Route.extend({
    model: function(album) {
        return Ember.Object.create({"id": album.album_id + "_abvahare"});
    }
});