dark.controller('AboutController', function ($http, Config, $scope) {
    $http.jsonp('https://www.googleapis.com/plus/v1/people/' + Config.id +
            '?callback=JSON_CALLBACK&fields=aboutMe%2Ccover%2Cimage%2CplusOneCount&key=' + Config.google_api).
        success(function (data) {
            console.log(data);
            $scope.about = data.aboutMe;
        })
        .error(function (error) {
            // vm.desc = "Sorry, we failed to retrieve the About text from the Google+ API.";
            // vm.loading = false;
            // vm.status = 'ready';
        });
});
