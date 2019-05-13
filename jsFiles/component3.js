

function Component3(obj){
    var ChatHolder = document.getElementById("chat-graph-holder");
    var div1 = document.getElementById("component3");
    var div11 = document.createElement("div");
    var div111 = document.createElement("div");
     div11.appendChild(div111);
     div1.appendChild(div11);
     div11.setAttribute("class","horizantal-bar");
     div11.setAttribute("title",obj.branchName +" , "+obj.percentage+" %");
     div11.setAttribute("style","width:"+obj.percentage+"%");
     div111.textContent = obj.branchName;
}

// var res3 = {
//     "code": 0,
//     "message": "Success",
//     "data": [
//       {
//         "businessId": 2,
//         "percentage": 65.89,
//         "branchName": "gandipet"
//       },
//       {
//         "businessId": 3,
//         "percentage": 81.33,
//         "branchName": "kukatpally"
//       }
//     ]
//   }
function initializeComponent3(){
  var object = {
    url: 'http://13.233.80.43:8080/collage-management/collage/superAdmin/getCollegesInternalsGraphPercentage',
    method:"GET"
  }
    fetch(object.url).then(function(response) {
      response.text().then(function(text) {
        return JSON.parse(text).data.map((obj)=>Component3(obj));
      });
    });
}