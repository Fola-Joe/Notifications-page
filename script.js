const notificationNum = document.querySelector('#notification');
const notice = document.querySelectorAll('.red-notice');
const markAll = document.querySelector('h2');
const unreadMsg = document.querySelectorAll('.unread');


markAll.addEventListener('click', function(){
    unreadMsg.forEach((Msg) => {
        Msg.classList.remove('unread');
    })
    notice.forEach((e) => {
        e.classList.remove('red-notice');
    })
    const newUnreadMsg = document.querySelectorAll('.unread');
    notificationNum.innerText = newUnreadMsg.length;
})



let notificationNumber = 7; // Initial notification count

//removal of notification dot and reduction of notification number 
//as each notification is clicked
function removeNotification(event) {
   const notification = event.currentTarget;

   //this is used to select the dot element within the clicked notification
   const dot = notification.querySelector('.red-notice');
 
    if (!dot.classList.contains('read')) {
        notificationNumber--;
        notificationNum.textContent = notificationNumber;

        dot.classList.add('read');
        dot.style.width = '0';
        notification.classList.add('read');
        notification.style.backgroundColor = '';
    }
    
}

unreadMsg.forEach((Msg) => {
    Msg.addEventListener('click', removeNotification)})