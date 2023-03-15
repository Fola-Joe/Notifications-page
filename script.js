const section = document.querySelectorAll('#section');
const notification = document.querySelector('#notification');
const notice = document.querySelectorAll('.red-notice');
const markAll = document.querySelector('h3');




markAll.addEventListener('click', function(){
    section.forEach(function (e) {
        e.style.backgroundColor = "transparent";
    })
    notice.forEach(function (e) {
        e.style.backgroundColor = "transparent";
    })
    notification.innerText = '0';
})