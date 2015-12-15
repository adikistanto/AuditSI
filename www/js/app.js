/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
angular.module('starter', ['ionic', 'ngCordova', 'starter.services', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if (window.cordova) {
        //quick check for presence of ngCordovaFile plugin
        console.log('starting cordovaFile check');
        console.log($cordovaFile);
        //check for the docs directory suing File plugin
        $cordovaFile.checkDir(cordova.file.documentsDirectory, "")
        .then(function(success) {
            console.log(success);
        }, function(error) {
            console.log(error);
        });
    } else { console.log( ' no cordova plugins available ' ); }
  });
})
