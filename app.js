(function(){

     let screen = document.querySelector('.screen');
     let buttons = document.querySelectorAll('.btn');
     let clear = document.querySelector('.btncolor5');
     let equal = document.querySelector('.btncolor4');
     let root = document.querySelector('.btn3');
     let x= document.querySelector('.btn-x');


     buttons.forEach(function(button){
        button.addEventListener('click',function(e){
           let value = e.target.dataset.val;
           screen.value+=value;
        })
     })

     equal.addEventListener('click',function(e){
        
        if(screen.value === ''){
            screen.value = "";
        }
      
        else {
            let answer = eval(screen.value);
            screen.value= answer;
        }

     })

     clear.addEventListener('click', function(e){
        screen.value = "";
     })


    root.addEventListener('click',function(e){
        
            let answer = (Math.sqrt(screen.value));
            screen.value= answer;
       

     })

     x.addEventListener('click',function(e){
       
      screen.value = screen.value.slice(0,-1);

     } )


})();

