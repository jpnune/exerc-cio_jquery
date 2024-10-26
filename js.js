
$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        let item = $('input').val();
        const tarefa = `<li >${item}<i class="fa-solid fa-x"></i></li>`;
        
        $('ul').prepend(tarefa);        
        $('input').val("");
        
    })


    $(document).on('click', 'li', function(){
       $(this).toggleClass("linha")
    })

    
    $(document).on('click', 'i', function(){
       $($(this).parent()[0]).remove();
    })

    

})





