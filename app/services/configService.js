boomerang.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG VIT Vellore',
        'id'            : '106628518438662355516',
        'google_api'    : 'AIzaSyBLmjZggwek6J_xpdffvOXDcdDn_6sP6iY',
        'pwa_id'        : '5915725140705884785', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.gdgvitvellore.com',
        'twitter'       : 'gdgvitvellore',
        'facebook'      : 'gdgvitvellore',
        'meetup'        : 'gdgvitvellore',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
            }
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
