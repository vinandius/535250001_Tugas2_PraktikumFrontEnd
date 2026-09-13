const button1 = document.getElementById('b1');

let isDeleted = false;

button1.addEventListener('click', function() {
    
    if (isDeleted == true) {
        alert("ID telah dihapus!");
    } else {
        document.getElementById('p1').style.visibility = 'visible';
    }
})

const button2 = document.getElementById('b2');
button2.addEventListener('click', function() {
    document.getElementById('p1').remove();
    isDeleted = true;
})
