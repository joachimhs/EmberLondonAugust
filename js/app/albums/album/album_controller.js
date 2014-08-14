PhotoApp.AlbumController = Ember.ObjectController.extend({
    needs: ['albumPhoto'],

    transitionToPhoto: function(photo) {
        this.transitionToRoute('album.photo', photo);
    }
});