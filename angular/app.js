var app = angular.module('app', ["ui.router", "ngAnimate"]);
            
app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url : '/home',
        templateUrl : "home.html"
    })

    .state('registrarse',{
        url : '/registrarse' ,
        templateUrl : 'register.html',
        controller: 'formController'
    })

    .state('registrarse.dpersonales',{
        url : '/datos-personales',
        templateUrl : '1-datos-personales.html'
    })

    .state('registrarse.dcontacto',{
        url : '/datos-contacto',
        templateUrl : '2-datos-contacto.html'
    })

    .state('registrarse.dsubmit',{
        url : '/finalizar',
        templateUrl : '3-submit.html'
    });


});

app.controller('formController',['$scope','$state', function($scope, $state){
    $scope.user = {};   
    
    $scope.submit = function(){
        alert("Datos guardados");
        $scope.user = {};
        $state.go('registrarse.dpersonales');
    }
}]);