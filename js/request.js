
var data ={}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody= document.getElementById("tableBodyData");
btnRemove=document.getElementById("btnRemove");
btnLoad=document.getElementById("btnLoad");
btnSearch=document.getElementById("btnSearch");
inputSearch=document.getElementById("inputSearch");

btnRemove.addEventListener("click",function(e){
    tbody.innerHTML = "";
});

btnLoad.addEventListener("click",function(e){
    getData();
});

btnSearch.addEventListener("click",function(e){
    tbody.innerHTML = "";
    filtered = data.json.filter(function(element){
        return element.title.includes(inputSearch.value);
    });
    filtered.forEach(element => {
        tbody.append(genTr(element));
    });
});

//función para generar filas de tabla
function genTr(json) {
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td5 = document.createElement("td");

    td1.innerText = json.id;
    td2.innerText = json.title;
    td3.innerText = json.price;
    td4.innerText = json.description;
    td5.innerText = json.category;
    tr.append(td1,td2,td3,td4,td5);
    return tr;
}

//consumir api
function getData(url){
    xhr.open("GET", requestUrl, true); 
    xhr.onload = function(url){
        console.log(xhr.responseText);
        // Handle data
        array = JSON.parse(xhr.responseText);
        data.json=array;
        //recorrer array y generar filas
        array.forEach(element => {
            tbody.append(genTr(element));
        });
    };
    xhr.send();
}