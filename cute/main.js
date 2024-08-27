/*
built_in
1,alert
2,console
3,prompt
4,Set timeout
5,set interval

*/
function showmorebuttons() {
    var extraButtonDiv = document.getElementById("thêm-nút");

    // Tạo nút mới 1
    var newbutton1 = document.createElement("button");
    newbutton1.innerHTML = "Nút mới 1";
    newbutton1.onclick = function() {
        alert("Đây là nút mới 1");
    };
    extraButtonDiv.appendChild(newbutton1); // Thêm nút mới 1 vào div

    // Tạo nút mới 2
    var newbutton2 = document.createElement("button");
    newbutton2.innerHTML = "Nút mới 2";
    newbutton2.onclick = function() {
        alert("Đây là nút mới 2");
    };
    extraButtonDiv.appendChild(newbutton2); // Thêm nút mới 2 vào div
}
    

console.log("xin chao")
var hai =true
alert(hai)