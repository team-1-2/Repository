function install(file,type){
  //download(file);
  downloadFileAsync(file);
  window.open(type+".html","_self");
}
