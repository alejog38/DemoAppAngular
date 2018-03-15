'use strict';

eventsApp.controller('EventController',
        function($scope){
            $scope.event = {
                name: 'Angular Boot Camp',
                date: '1/1/2013',
                time: '10:30 am',
                location : {
                    address: "Google Headquarters",
                    city: "Mountain View",
                    province: 'CA'
                },
                imgUrl: 'img/angularjs-logo.png'
            }
        }
    );