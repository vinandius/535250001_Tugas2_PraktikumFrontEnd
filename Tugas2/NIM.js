const button1 = document.getElementById('b1');
button1.addEventListener('click', function() {
    document.getElementById('p1').style.visibility = 'visible';
})

const button2 = document.getElementById('b2');
button2.addEventListener('click', function() {
    document.getElementById('p1').style.visibility = 'hidden';
})