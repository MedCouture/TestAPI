$(document).ready(function(){
    $(document).on('click','#submit',function(){
        $.ajax({
            method:'GET',
            URL:'/api',
        }).then(function(data){
            console.log(data)
        })
    });
});