$(document).ready(function() {
            $('#fullpage').fullpage({
                sectionsColor: ['#1bbc9b', '#666666', '#CCCCCC', '#666666', '#D3C9B8', '#CCCCFF'],
                anchors: ['1stPage', '2ndPage', '3rdpage', '4thpage', '5thpage','6thpage'],
                menu: '#menu',
                scrollingSpeed: 1000
            });


            $(".photo").hover(function(){
                $(this).transition({ scale: 1.15 });
                $(".title").attr("style", "");
                $(".title").fadeIn();
                },
                function(){
                $(this).transition({ scale: 1 });
                $(".title").fadeOut();
                }
                );}
                  
           );


 

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    $scope.nightSky = [
        { imgNum: "Hobart" },
        { imgNum: "Mount Wellington" },
        { imgNum: "Mount Wellington Observatory" },
        { imgNum: "Cradle Mountain" },
        { imgNum: "Cape Raoul" },
        //{ imgNum: "-8" },
        //{ imgNum: "-6" },
        //{ imgNum: "-5" },
        //{ imgNum: "-2" },
        //{ imgNum: "-1" },
        //{ imgNum: "1" },
        //{ imgNum: "2" },
        //{ imgNum: "4" },
        //{ imgNum: "5" }
    ];
    
    $scope.travelPortrait = [
        { imgNum: "Lone Pine Sanctuary" },
        { imgNum: "Sydney" },
        { imgNum: "Sunshine Coast" },
         { imgNum: "Watson Bay" },
         { imgNum: "Gold Coast" },
        //{ imgNum: "-2" },
        //{ imgNum: "-1" },
        //{ imgNum: "0" },
        //{ imgNum: "1" },
        //{ imgNum: "2" },
        //{ imgNum: "3" },
        //{ imgNum: "5" },
        //{ imgNum: "7" },
        //{ imgNum: "8" },
        //{ imgNum: "10" },
        //{ imgNum: "11" },
        //{ imgNum: "12" },
        //{ imgNum: "13" },
        //{ imgNum: "14" },
        //{ imgNum: "15" },
        //{ imgNum: "16" },
        //{ imgNum: "17" }
        //{ imgNum: "18" }
    ];
    
    $scope.architecture = [
       
        { imgNum: "Top of the Rock" },
        { imgNum: "Times Square" },
        { imgNum: "Palau de la Musica Orfeo Catala" },
        { imgNum: "Rockefeller Center" },
        { imgNum: "Manhattan Bridge" },
        //{ imgNum: "4" },
        //{ imgNum: "5" },
        //{ imgNum: "7" },
        //{ imgNum: "8" },
        //{ imgNum: "10" },
        //{ imgNum: "11" },
        //{ imgNum: "12" }
    ];
    
    $scope.landscape = [
        
        { imgNum: "Sydney" },
        { imgNum: "Mount Wellington Lookout" },
        { imgNum: "Eddystone Point Lighthouse" },
        { imgNum: "Jacob's Ladder Tasmania" },
        { imgNum: "Cradle Mountain" },
        //{ imgNum: "-6" },
        //{ imgNum: "-5" },
        //{ imgNum: "-4" },
        //{ imgNum: "-3" },
        //{ imgNum: "-1" },
        //{ imgNum: "1" },
        //{ imgNum: "2" },
        //{ imgNum: "4" },
        //{ imgNum: "5" },
        //{ imgNum: "6" },
        //{ imgNum: "7" }
    ];
}]);

myApp.controller('formController', ['$scope', '$http', function($scope,$http){
		$scope.insertData=function(){  
            if($scope.name && $scope.email && $scope.comment){
                    $http.post("insert.php",{'name':$scope.name,'email':$scope.email,'comment':$scope.comment }).success(function(data,status,headers,config){console.log("data inserted successfully");})
                    $("form").remove();
                    $("h1").attr("style", "");
            } 
        }
		}]);

$( window ).load(function() { $('body').addClass('loaded');});