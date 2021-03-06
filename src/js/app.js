/* 
 Begin by declaring the app with a call to the 'modular' function in the angular
  js library.  The script needs to be declared in the html where it's to be 
  used and the <html> marked-up to include an ng-app directive.  That causes an
  angular module to run when the hmtl document loads - this is how the ANGULAR
  framework hooks-in.   
  
  
  Dependencies go in the array arg, even if no other dependencies exist, an 
  empty array is needed.
 * */

// putting the variable declaration into a 'closure' is a good habit!
(function(){
    var app = angular.module('store', []); // see <html ng-app="store">
    
    app.controller('StoreController', function(){ // capitalised and name  
        // '~Controller'
        // anonymous function here is the callback/ yield
        this.products = gems;
    });
    
    var gems = [
        {
          name: 'Diamond',
          price: '2',
          description: 'some description',
          canPurchase: true,
          soldOut: false,
          images[ // images array
          { //new object
              full:'',
              thumb:''
          }
          ]
        },
        {
          name : 'Emerald',
          price : '3.21',
          description : 'further description',
          canPurchase : true,
          soldOut : false,
          images[ // images array
          { //new object
              full:'',
              thumb:''
          }
          ]
        },
        
    ];
    
})();
