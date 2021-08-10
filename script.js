const menu_button = document.getElementById('menu_button');
const side_menu = document.getElementById('side_menu');



function openNav(){

    document.getElementById('side_menu').style.width="50%";
    document.getElementById('menu_button').style.display="none";


}

function closeNav(){

document.getElementById('side_menu').style.width="0"
document.getElementById('menu_button').style.display="block";

}