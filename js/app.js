var app = angular.module('myapp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    // 解决router缓存问题
    if (!$httpProvider.defaults.headers.get) {
          $httpProvider.defaults.headers.get = {};
        }
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    // 解决router缓存问题 end
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state({
            name: "/",
            url: "/",
            templateUrl: 'index.html',
            // controller: 'homeConstoller'
        })

    	.state({
    		name: "about",
            url: "/about",
            templateUrl: '/tpls/about.html'
            // controller: 'homeConstoller'
    	})
})
