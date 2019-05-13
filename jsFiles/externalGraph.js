
function barChat(obj){
    //var ChatHolder = document.getElementById("chat-graph-holder")
    //var div1 = document.createElement("div");
    var div1 = document.getElementById("box");
    var div11 = document.createElement("div");
    var div111 = document.createElement("div");
    var div1111 = document.createElement("div");
    var div112 = document.createElement("div");
    //ChatHolder.appendChild(div1);
    div11.appendChild(div111);
    div11.appendChild(div112);
    div111.appendChild(div1111);
    div1.appendChild(div11);
    //div1.setAttribute("class","box");
    div11.setAttribute("class","skill");
    div111.setAttribute("class","graph");
    div111.setAttribute("title",obj.branchName +","+ obj.percentage);
    div111.setAttribute("style","height:"+obj.percentage+"%");
    div1111.setAttribute("class","percentage");
    div1111.textContent = obj.percentage+"%";
    div112.setAttribute("class","name");
    div112.textContent = obj.branchName;
}
function initializeBarChart(){
  var object = {
    url: 'http://13.233.80.43:8080/collage-management/collage/superAdmin/getCollegesExternalsGraphPercentage',
    method:"GET"
  }
    fetch(object.url).then(function(response) {
      response.text().then(function(text) {
        return JSON.parse(text).data.map((obj)=>barChat(obj));
      });
    });
}

//list.map((obj)=>barChat(obj));
