
// JS FOR COOKIE CLICKER PRICIPAL 
let  counter = 0;
document.querySelector('.btn-cookieClicker').addEventListener('click', function () {
    counter++;
    document.getElementById('.score').textContent = counter;
});

