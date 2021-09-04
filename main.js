
const menu = document.querySelector('.icon-bar');
const list = document.querySelector('.bar');

const toggleList = () => {
    if(list.style.display === "block") {
        list.style.display = "none"
    }
    else {
        list.style.display = "block"
    }
}
menu.addEventListener('click', toggleList)