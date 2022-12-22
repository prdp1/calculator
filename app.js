(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');


    buttons.forEach(function(button) {
        button.addEventListner('click', function(e){ 
            let value = e.target.dataset;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){

    })
})
