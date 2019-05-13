function arrangeing(text){
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}
function pushing(val){
    newArray.push(val);
    //newArray.map((text)=>arrangeing(text))
    arrangeing(val);
}
function todo(e){
    debugger;
    var val = e.target.value;
    if(e.keyCode == 13 && val != ""){
        pushing(val);
        var object = {
            url:'http://13.233.80.43:8080/collage-management/collage/library/getToDoListByUserName',
            method:'POST',
            userName: "Superadmin"
        }
        response(object)
        e.target.value = '';
    }
}
var newArray =[];
var input = document.getElementById("todo-text-field");
input.addEventListener("keypress",todo)

// fetch(object.url).then(function(response) {
//     response.text().then(function(text) {
//       return JSON.parse(text).data['Top Students from All the Colleges '].map((row,index)=>Component4Row(row,index));
//     });
//   });
function response(object){
    return new Promise(function(resolve){
        var http = new XMLHttpRequest();
        http.onload=function(){
            var response = this.responseText;debugger;
            response = JSON.parse(response);debugger;
            resolve(response);
        }
        http.open(object.method,object.url,true);
        http.setRequestHeader("content-type","application/json");
        http.send(JSON.stringify(object.userName));
    })
}