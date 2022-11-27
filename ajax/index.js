$(document).ready(function () { 
    //ON PAGE LOAD
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

    
    //SUBMIT EVENT
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

    //DELETE EVENT
    // we get this button dynamically from display.php thats why we use this method to get an event

    $(document).on("click", ".delete-btn", function(){
        var stdId = $(this).data("id");
        var element = this;
        
        $.ajax({
            url:"delete.php",
            type:"POST",
            data: {
                id :stdId
            },
            success:function(response){
                if(response == 1){
                    $(element).closest("tr").fadeOut();
                }
                else{
                    $("#error").html("Can't delete record").slideDown();
                    $("#success").slideUp();
                }
            }
        })
    })

 })


 