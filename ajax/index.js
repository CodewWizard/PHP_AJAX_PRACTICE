$(document).ready(function () { 
    $("#submit").click(function(temp){
        temp.preventDefault();
        // console.log('clicked');
        var e = $("#email").val();
        var p = $("#pass").val();
        $.ajax({
            url:'insert.php',
            type:'POST',
            data:{
                email : e,
                pass : p
            },
            success:function(response){
                console.log("heh");
                
                if(response == 1){
                    $("#addForm").trigger("reset");
                    alert("data added");
                }
                else{
                    alert("data cant saved");
                }
            }
        })
    })
 })