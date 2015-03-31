dark.controller("NewsController", function ($http, Config, $scope) {

    $http.jsonp('https://www.googleapis.com/plus/v1/people/' + Config.id +
        '/activities/public?callback=JSON_CALLBACK&maxResults=20&key=' + Config.google_api)
        .success(function (response) {
            console.log(response);
            $scope.news = response.items;
            // var $scope.news = [], i;
            // var item, actor, object, itemTitle, html;
            // var published, actorImage, entry;

            // if (!response.items) {
            //     // handleError('Response from server contained no news items.');
            //     return;
            // }
            // for (i = 0; i < response.items.length; i++) {
            //     item = response.items[i];
            //     actor = item.actor || {};
            //     object = item.object || {};
            //     itemTitle = object.content;
            //     published = $filter('date')(new Date(item.published), 'fullDate');
            //     html = [];

            //     html.push(itemTitle.replace(new RegExp('\n', 'g'), '<br />').replace('<br><br>', '<br />'));
            //     html = html.join('');
            //     html = $sce.trustAsHtml(html);

            //     actorImage = actor.image.url;
            //     actorImage = actorImage.substr(0, actorImage.length - 2) + '16';

            //     entry = {
            //         via: {
            //             name: 'Google+',
            //             url: item.url
            //         },
            //         published: published,
            //         body: html,
            //         date: item.updated,
            //         reshares: (object.resharers || {}).totalItems,
            //         plusones: (object.plusoners || {}).totalItems,
            //         comments: (object.replies || {}).totalItems,
            //         icon: actorImage,
            //         item: item,
            //         object: object
            //     };

            //     $scope.news.push(entry);
            // }
            // $scope.news = $filter('orderBy')($scope.news, 'date', true);
            // $timeout(function () {
            //     gapi.plusone.go();
            // });
        })
        .error(function(err){
            console.log(err);
        });

        // var handleError = function(error){
        //     console.log(error);
        //     // vm.desc = "Sorry, we failed to retrieve the news from the Google+ API.";
        //     // vm.loading = false;
        //     // vm.status = 'ready';
        //     // $log.debug('Sorry, we failed to retrieve the news from the Google+ API: ' + error);
        // });

});
