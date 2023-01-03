var body;

function buscDat(){
    $.ajax({
      type:"GET",
      url:"https://jsonplaceholder.typicode.com/albums/1/photos",
      dataType:"json",
      success:function(data){
      var id = document.getElementById("input").value;
      for (var i = 0; i < data.length; i++) {  
          if(data[i].id == id){
            body+=`<tr class="w3-white"><td>${data[i].albumId}</td><td>${data[i].id}</td><td>
            ${data[i].title}</td><td><img src='${data[i].url}' width="100" height="100"/>
            </td><td><img src='${data[i].thumbnailUrl}' width="100" height="100"/></td></tr>`

            document.getElementById("albId").value = [data[i].albumId];
            document.getElementById("id").value = [data[i].id];
            document.getElementById("inTit").value = [data[i].title];
            document.getElementById("url").value = [data[i].url];
            document.getElementById("thUrl").value = [data[i].thumbnailUrl];

            $("#cuerpoTable").empty(body);

            $("#cuerpoTable").append(body);
          }
          body = null;    
    }
      }
  });
}

function insertData(e){
    var albumId = document.getElementById("albId").value;
    var id = document.getElementById("id").value;
    var title = document.getElementById("inTit").value;
    var url = document.getElementById("url").value;
    var thumbnailUrl = document.getElementById("thUrl").value;

    if(albumId != '' && id != '' && title != '' && url != '' && thumbnailUrl != ''){
      var datos=$('#frmData').serialize();
      $.ajax({
        type:"POST",
        url:"insertar.php",
        data:datos,
        success:function(r){
          if(r==1){
            alert("agregado con exito");
            document.getElementById("input").value = null;
            document.getElementById("albId").value = null;
            document.getElementById("id").value = null;
            document.getElementById("inTit").value = null;
            document.getElementById("url").value = null;
            document.getElementById("thUrl").value = null;  
          }else{
            alert("Error");
            document.getElementById("input").value = null;
            document.getElementById("albId").value = null;
            document.getElementById("id").value = null;
            document.getElementById("inTit").value = null;
            document.getElementById("url").value = null;
            document.getElementById("thUrl").value = null;  
          }
        }
      }); 
      return false;
    }else{
      alert('No se seleccionaron datos');

    }
  }

