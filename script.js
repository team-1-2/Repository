function install(file,type){
  download(file);
  download(file).then(() => {
    window.open(type+".html","_self");
  });
}
