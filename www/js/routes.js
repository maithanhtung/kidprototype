angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('lockScreen', {
      url: '/page1',
      templateUrl: 'templates/lockScreen.html',
      controller:'lockScreenCtrl'
    })
        
      
    
      
        
    .state('kidSScreen', {
      url: '/page2',
      templateUrl: 'templates/kidSScreen.html'
    })
        
  

        
    .state('taskScreen', {
      url: '/page3',
      templateUrl: 'templates/taskScreen.html'
    })

    .state('unlockScreen', {
      url: '/page4',
      templateUrl: 'templates/unlockScreen.html'
    })
       
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/page1');
  

  

});