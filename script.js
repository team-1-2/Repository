//function install(file,type){
//  download(file);
//  delay(10000);
//  window.open(type+".html","_self");
//}
function install(file,type){
 let myPromise = new Promise(function(myResolve, myReject) {

  download(file);



  myResolve(); // when successful

  myReject();  // when error

});


// "Consuming Code" (Must wait for a fulfilled Promise)

myPromise.then(

  function(value) { window.open(type+".html","_self"); },

  function(error) { install(file,type); }

);
}
