PhotoApp.Router.map(function() {
    this.resource("albums", {path: '/'}, function() {
        this.route('album', {path: '/albums/:album_id'});
    });
});