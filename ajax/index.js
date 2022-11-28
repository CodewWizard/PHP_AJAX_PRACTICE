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
                        $("#success").html("Data added !").slideDown();
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
        
        if(confirm("Do you really want to delete ?")){
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
        }
    })

    //show modal popup
    $(document).on("click", ".edit-btn", function(){
        $("#modal").show();
        var studId = $(this).data("eid");
        // alert(studId);
        
        $.ajax({
            url:"editLoad.php",
            type:"POST",
            data:{
                id:studId
            },
            success:function(data){
                $("#modal-form").html(data);
            }
        })
    })

    //Hide modal box
    $("#close-btn").on("click", function(){
        $("#modal").hide();
    })

    //SAVE UPDATED DATA
    $(document).on("click", "#edit-submit", function(){
        var editMail = $("#edit-mail").val();
        var editPass = $("#edit-pass").val();
        var editId = $("#edit-id").val();

        $.ajax({
            url:"update.php",
            type:"POST",
            data:{
                mail : editMail,
                pass : editPass,
                id  : editId
            },
            success:function(data){
                if(data == 1){
                    $("#modal").hide();
                    load();
                }
            }
        })
    })

    //LIVE SEARCH
    // keyup -- when a keyboard key is released.

    $("#search").on("keyup", function(e){
        // e.preventDefault();
        console.log('keyup event');
        var item = $(this).val();

        $.ajax({
            url:"live-search.php",
            type:"POST",
            data:{
                searchItem : item
            },
            success:function (response) {
                $("#tableData").html(response);
            }
        })
    })
 })


 