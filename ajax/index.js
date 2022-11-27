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
                }
                else{
                    alert("dara cant saved");
                }
            }
        })
    })
 })