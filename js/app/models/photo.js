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