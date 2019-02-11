(function(){
    var app = angular.module("app", ['ngStorage']);

    app.controller("homeCtrl", homeCtrl);

    function homeCtrl($scope, $localStorage){
        $localStorage.AppInfo = {'siteName': 'Storage app', 'appId': 2, 'allowDocSave': true}

        $scope.info = $localStorage.AppInfo;
    }

})();