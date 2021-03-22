const div1 = document.querySelector('#div1');
div1.addEventListener('click', function(e) {
    console.log('clicked');
    console.log(e.target);
})
