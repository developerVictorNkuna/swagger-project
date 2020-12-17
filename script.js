
function totalprice(a, b) {
y = parseFloat(document.getElementById("quantity_female").value);

var answer = document.getElementById("cal");
answer.value = 150.95 * y;

x = parseFloat(document.getElementById("male_quantity").value);
var answer1 = document.getElementById("price1");

answer1.value = 180.95 * x;
// a = parseFloat(document.getElementById("quantity_female").value).toFixed(2);
// b = parseFloat(document.getElementById("male_quantity").value).toFixed(2);
var answer2 = document.getElementById("Total Price");
answer2.value = a + b;

var message = document.getElementById("display").value=document.getElementById("cal");
// message.innerHTML = message;

}



/** function totalprice(a, b) {
y = parseFloat(document.getElementById("Quantity_1").value);
var answer = document.getElementById("fresult");
answer.value = 150.95 * y;
x = parseFloat(document.getElementById("Quantity_2").value);
var answer1 = document.getElementById("mresult");
answer1.value = 180.95 * x;
a = parseFloat(document.getElementById("fresult").value).toFixed(2);
b = parseFloat(document.getElementById("mresult").value).toFixed(2);
var answer2 = document.getElementById("result");
answer2.value = a + b;
}

*/
function validateOrderForm(){
    alert("would validate form at this point");
    //return a boolean valid data status

    return false
}
function bodyEvent(){
    alert('Body has loaded');
}

// function funtionSubmit(form){

//     //at this point no invalid field have been encountered

//     var fieldsValid  =  true;
//     //test field Size

//     var SizeValue = FormData.select.values;
//     if(SizeValue.length  == 0){
//         fieldsValid = false;
//         //return Boolean valied fields status
//         return fieldsValid;
//     }







// function jQuery() {
//     $("map.mainnav area")
//       .on("mouseenter", function(){
//         $("#menu_img").attr("src", $(this).data("menu-src"));
//       })
//       .on("mouseleave", function(){
//         $("#menu_img").attr("src", $("#menu_img").data("menu-src"));
//       }};

