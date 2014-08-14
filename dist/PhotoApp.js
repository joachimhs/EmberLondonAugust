var PhotoApp = Ember.Application.create({});
PhotoApp.AlbumsAlbumRoute = Ember.Route.extend({
    model: function(album) {
        return this.store.find('album', album.album_id);
    }
});
PhotoApp.AlbumsIndexController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true
});
PhotoApp.AlbumsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('album');
    }
});
PhotoApp.Album = DS.Model.extend({
    sortIndex: DS.attr('number'),
    photos: DS.hasMany('photo', {async: true})
});
PhotoApp.Photo = DS.Model.extend({
    href: DS.attr('string'),

    thumbnail: function() {
        var image = this.get('href');
        
        if (image) {
            image = image.replace(".jpg", "_thumb.jpg");
        }

        return image;
    }.property('href')
});
PhotoApp.Router.map(function() {
    this.resource("albums", {path: '/'}, function() {
        this.route('album', {path: '/albums/:album_id'});
    });
});
DS.RESTAdapter.reopen({
    namespace: 'json/data'
});

PhotoApp.Adapter = DS.RESTAdapter.extend();

PhotoApp.ApplicationStore = DS.Store.extend({
    adapter: "PhotoApp.Adapter"
});