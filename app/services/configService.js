boomerang.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG VIT Vellore',
        'id'            : '101018908043689071742',//101018908043689071742
        'google_api'    : 'AIzaSyBLmjZggwek6J_xpdffvOXDcdDn_6sP6iY',
        'pwa_id'        : '6131627325679555265', // Picasa Web Album id, must belong to Google+ id above
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
