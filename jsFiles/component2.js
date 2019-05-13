function Component2Header(){
    var component2 = document.getElementById("component2");
    var table = document.createElement("div");
    var tr = document.createElement("div");
    var trExtra = document.createElement("div");
    var th = document.createElement("span");
    var th1 = document.createElement("span");
    var th2 = document.createElement("span");
    var th3 = document.createElement("span");
   th.setAttribute("class","table-col");
    th1.setAttribute("class","table-col");
    th2.setAttribute("class","table-col");
    th3.setAttribute("class","table-col");
    table.appendChild(tr);
    table.appendChild(trExtra);
    trExtra.setAttribute("id","table-rows0")
    tr.appendChild(th);
    table.setAttribute("id","component2-table");
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    th.textContent = "PERCENTAGE";
    th1.textContent = "BRANCH";
    th2.textContent = "BUSINESS ID";
    th3.textContent = "STUDENT ID";
    // tr.appendChild(td);
    // tr.appendChild(td);
    // tr.appendChild(td);
    component2.appendChild(table);
}
function Component2Row(obj,index){
    var table = document.getElementById("component2-table");
    var tr = document.getElementById("table-rows"+index);
    var trExtra = document.createElement("div");
    trExtra.setAttribute("id","table-rows"+parseInt(index+1));
    var td1 = document.createElement("span");
    var td = document.createElement("span");
    var td3 = document.createElement("span");
    var td2 = document.createElement("span");
    td.setAttribute("class","table-col");
     td1.setAttribute("class","table-col");
     td2.setAttribute("class","table-col");
     td3.setAttribute("class","table-col");
    table.appendChild(trExtra);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td.textContent = obj.percentage;
    td1.textContent = obj.branchName;
    td2.textContent = obj.BusinessId;
    td3.textContent = obj.StudentId;
}
Component2Header();
function initializeComponent2(){
  var object = {
    url: 'http://13.233.80.43:8080/collage-management/collage/superAdmin/getCollegeWiseHighestExternalsPercentage',
    method:"GET"
  }
    fetch(object.url).then(function(response) {
      response.text().then(function(text) {
        return JSON.parse(text).data['Top Students from All the Colleges '].map((row,index)=>Component2Row(row,index));;
      });
    });
}
//res2.data.colleges.map((row,index)=>Component2Row(row,index));