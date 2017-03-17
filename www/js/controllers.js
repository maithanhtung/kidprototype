angular.module('app.controllers', ['ionic'])
  
.controller('lockScreenCtrl', ['$scope', '$stateParams','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $timeout) {
		$scope.text = 'Measure physical activity';
		var measuring = false;
		$scope.showAlert = function() {
		if(!measuring){
			this.text = 'Measuring...';
			measuring = true;
			var alertPopup = $ionicPopup.alert({
       		title: 'Start measurement',
       		template: '<center>GO RUN</center>'
     		});
     		alertPopup.then(function(res) {
       		console.log('Start measuring the activities');
     		});
		}
		else{
			this.text = 'Measure physical activity';
			measuring = false;
			var alertPopup = $ionicPopup.alert({
       		title: 'Stop measurement',
       		template: '<center>GET SOME REST</center>'
     		});
     		alertPopup.then(function(res) {
       		console.log('Stop measuring the activities');
     		});
		}
		

   };

}])
   
.controller('kidSScreenCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('parentSScreenCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 