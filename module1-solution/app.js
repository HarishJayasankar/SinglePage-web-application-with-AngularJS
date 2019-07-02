(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject=['$scope'];
    
    function LunchCheckController($scope){
        $scope.output=" ";
        $scope.useroutput=" ";

      $scope.controller=function(){
        if( $scope.output === null ||  $scope.output === ' ' || $scope.output.length <=0 ){
            $scope.useroutput= "Please enter data first";
        }else{
             var option = $scope.output.split(',');
            if(option.length <=3){
                $scope.useroutput="Enjoy!";
            }else{
                $scope.useroutput="Too much!";
            }
            option=null;
        }

      }

    }
    
    })();

