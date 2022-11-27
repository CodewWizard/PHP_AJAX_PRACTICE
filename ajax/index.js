$(document).ready(function () { 
        function load(){
            $.ajax({
                url:"display.php",
                type:"POST",
                success:function(data){
                    $("#tableData").html(data);
                }
            })
        }
        load();


    $("#submit").click(function(temp){
        temp.preventDefault();
        // console.log('clicked');
        var e = $("#email").val();
        var p = $("#pass").val();
        if(e == "" || p == ""){
            $("#error").html("All fields are required").slideDown();
            $("#success").slideUp();
        }
        else{
            $.ajax({
                url:'insert.php',
                type:'POST',
                data:{
                    email : e,
                    pass : p
                },
                success:function(response){
                    if(response == 1){
                        load();
                        $("#addForm").trigger("reset");
                        $("#success").html("Data added").slideDown();
                        $("#error").slideUp();
                    }
                    else{
                        $("#error").html("Can't save record").slideDown();
                        $("#success").slideUp();
                    }
                }
            })
        }
    })
 })


 