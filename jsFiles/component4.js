function Component4Header(){
    var component4 = document.getElementById("component4");
    var table4 = document.createElement("table");
    var tr4 = document.createElement("div");
    var trExtra4 = document.createElement("div");
    var th4 = document.createElement("span");
    var th41 = document.createElement("span");
    var th42 = document.createElement("span");
    var th43 = document.createElement("span");
    th4.setAttribute("class","table-col");
     th41.setAttribute("class","table-col");
     th42.setAttribute("class","table-col");
     th43.setAttribute("class","table-col");
    table4.appendChild(tr4);
    table4.appendChild(trExtra4);
    trExtra4.setAttribute("id","table2-rows0");
    table4.setAttribute("id","component4-table")
    tr4.appendChild(th4);
    tr4.appendChild(th41);
    tr4.appendChild(th42);
    tr4.appendChild(th43);
    th4.textContent = "PERCENTAGE";
    th41.textContent = "BRANCH";
    th42.textContent = "BUSINESS ID";
    th43.textContent = "STUDENT ID";
    // tr.appendChild(td);
    // tr.appendChild(td);
    // tr.appendChild(td);
    component4.appendChild(table4);
}
function Component4Row(obj,index){
    var table44 = document.getElementById("component4-table");
    var tr44 = document.getElementById("table2-rows"+index);
    var trExtra44 = document.createElement("div");
    trExtra44.setAttribute("id","table2-rows"+parseInt(index+1));
    var td441 = document.createElement("span");
    var td44 = document.createElement("span");
    var td443 = document.createElement("span");
    var td442 = document.createElement("span");
    td44.setAttribute("class","table-col");
     td441.setAttribute("class","table-col");
     td442.setAttribute("class","table-col");
     td443.setAttribute("class","table-col");
    table44.appendChild(trExtra44);
    tr44.appendChild(td44);
    tr44.appendChild(td441);
    tr44.appendChild(td442);
    tr44.appendChild(td443);
    td44.textContent = obj.percentage;
    td441.textContent = obj.branchName;
    td442.textContent = obj.BusinessId;
    td443.textContent = obj.StudentId;
}
function initializeComponent4(){
  Component4Header();
  var object = {
    url: 'http://13.233.80.43:8080/collage-management/collage/superAdmin/getCollegeWiseHighestInternalsPercentage',
    method:"GET"
  }
    fetch(object.url).then(function(response) {
      response.text().then(function(text) {
        return JSON.parse(text).data['Top Students from All the Colleges '].map((row,index)=>Component4Row(row,index));
      });
    });
}
//res4.data.Colleges.map((row,index)=>Component4Row(row,index));