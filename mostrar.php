<?php 

include('conexion.php');

 ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<title>Mostrar datos</title>
</head>
<body>

<br>
<div class="w3-container">
	<center>
	<table class="w3-table w3-striped" border="1px" >
    <thead class="w3-green">
          <th>Album ID</th>
          <th>ID</th>
          <th>Titulo</th>
          <th>URL</th>
          <th>Thumbnail Url</th>
		</tr>
    </tead>
		<?php 
		$sql="SELECT * from photos order by id desc limit 10";
		$result=mysqli_query($conn,$sql);

		while($mostrar=mysqli_fetch_array($result)){
		 ?>
		<tr class="w3-white">
			<td><?php echo $mostrar['albumId'] ?></td>
			<td><?php echo $mostrar['photoId'] ?></td>
			<td><?php echo $mostrar['title'] ?></td>
            <td><img src='<?php echo $mostrar['imageUrl'] ?>' width="100" height="100"/></td>
			<td><img src='<?php echo $mostrar['thumbnailUrl'] ?>' width="100" height="100"/></td>
		</tr>
	<?php 
	}
	 ?>
	</table>
	</div>
</center>

</body>
</html>