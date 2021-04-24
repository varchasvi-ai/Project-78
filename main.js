var images = [
    "Vinayal.png",
    "Richa.png",
    "Varchasvi.png",
    "Adwait.png"
];
console.log(images);

var names = [
    "Vinayak",
    "Richa",
    "Varchasvi",
    "Adwait"
];
console.log(names);

var i= 0;
function change_img(){
document.getElementById("name").innerHTML=names[i];
document.getElementById("photos").src=images[i];
i++;
}