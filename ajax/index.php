<!doctype html>
<html lang="en">
  <head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  
    <style>
        #success{
          background: #DEF1D8;
          color:green;
          padding:10px;
          margin: 10px;
          display:none;
          position:absolute;
          right:15px;
          top:15px;
        }
        #error{
          background: #EFDCDD;
          color:red;
          padding:10px;
          margin: 10px;
          display:none;
          position:absolute;
          right:15px;
          top:15px;
        }

        .delete-btn{
          cursor: pointer;
          background: red;
          color:#fff;
          border: 0;
          padding: 4px 10px;
          border-radius: 3px;
        }

    </style>

  </head>
  <body>
  <form id = "addForm" style="width: 500px; margin:auto; margin-top:30px;">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="pass">
  </div>

  <button type="submit" class="btn btn-primary" id = "submit">Submit</button>
</form>

<div id="error"></div>
<div id="success"></div>

<table  class="table" style="margin-left:500px; margin-top: 100px; margin-right:100px; width:700px;">
    <tr>
      <td id="tableData"></td>
    </tr>
</table>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>
</html>