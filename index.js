$("#search").click(function () {
    alert("Search")
})
$("#addBook").click(function () {
    alert("Loading...")
})

const nav = document.querySelector('nav');
const toggle__menu = document.querySelector('.toggle__menu');
const content = document.querySelector('.content');

toggle__menu.onclick = function () {
  nav.classList.toggle('hide');
  content.classList.toggle('expand')
}