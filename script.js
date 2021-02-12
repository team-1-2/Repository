function install(file,type){
  download(file);
  delay(10000);
  window.open(type+".html","_self");
}
