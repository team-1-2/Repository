function install(file,type){
  async function(){
    download(file);
  }
  
    function(value) {window.open(type+".html","_self");},
    function(error) {install(file,type);}
}
