PhotoApp.AlbumPhotoView = Ember.View.extend({
    actions: {
        prevPhoto: function() {
            console.log('prevPhoto');

            var currPhoto = this.get('controller.model');
            var indexOfCurrPhoto = this.get('controller.controllers.album.photos').indexOf(currPhoto);

            if (indexOfCurrPhoto > 0) {
                indexOfCurrPhoto--;
            } else if (indexOfCurrPhoto <= 0) {
                indexOfCurrPhoto = this.get('controller.controllers.album.photos.length') - 1;
            }

            var nextPhoto = this.get('controller.controllers.album.photos').objectAt(indexOfCurrPhoto);

            //this.get('controller.controllers.album').transitionToPhoto(nextPhoto);
            this.animateOutBeforeTransition(nextPhoto);
        },

        nextPhoto: function() {
            console.log('nextPhoto');

            var currPhoto = this.get('controller.model');
            var indexOfCurrPhoto = this.get('controller.controllers.album.photos').indexOf(currPhoto);
            var lastIndex = this.get('controller.controllers.album.photos.length') - 1;

            if (indexOfCurrPhoto < lastIndex) {
                indexOfCurrPhoto++;
            } else if (indexOfCurrPhoto >= lastIndex) {
                indexOfCurrPhoto = 0;
            }

            var nextPhoto = this.get('controller.controllers.album.photos').objectAt(indexOfCurrPhoto);

            //this.get('controller.controllers.album').transitionToPhoto(nextPhoto);
            this.animateOutBeforeTransition(nextPhoto);
        }
    },

    animateOutBeforeTransition: function(nextPhoto) {
        var elementId = this.get('elementId');

        var view = this;
        $("#" + elementId + " .largePhoto").toggle({width: 'toggle'}).fadeOut(function() {
            $("#" + elementId + " .largePhoto").toggle({width: 'toggle'}).fadeIn();

            view.get('controller.controllers.album').transitionToPhoto(nextPhoto);
        });

    }
});