const section = document.querySelectorAll('#section');
const notification = document.querySelector('#notification');
const notice = document.querySelectorAll('.red-notice');
const markAll = document.querySelector('h3');

const unreadMsg = document.querySelectorAll('.unread');
// notification.innerText = section.length;

markAll.addEventListener('click', function(){
    unreadMsg.forEach(function (Msg) {
        Msg.classList.remove('unread');
    })
    notice.forEach(function (e) {
        e.classList.remove('red-notice');
    })
    const newUnreadMsg = document.querySelectorAll('.unread');
    notification.innerText = newUnreadMsg.length;
})
// markAll.addEventListener('click', function(){
//     section.forEach(function (e) {
//         e.classList.remove('unread');
//     })
//     notice.forEach(function (e) {
//         e.classList.remove('red-notice');
//     })
//     notification.innerText = '0';
// })

unreadMsg.forEach(Msg => {
    Msg.addEventListener('click', () => {
        Msg.classList.remove('unread');
        notice.forEach(function (e) {
            e.classList.remove('red-notice');
        })
    })
    const newUnreadMsg = document.querySelectorAll('.unread');
    newUnreadMsg.length = notification.innerText ;
})