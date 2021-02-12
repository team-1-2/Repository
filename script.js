//function install(file,type){
//  download(file);
//  delay(10000);
//  window.open(type+".html","_self");
//}
function install(file,type){
  let myPromise = new Promise(function(myResolve, myReject) {

    download(file);


  myResolve(){window.open(type+".html","_self");}; // when successful

  myReject(){install(file, type);};  // when error
}
