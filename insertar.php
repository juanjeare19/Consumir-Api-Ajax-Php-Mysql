<?php
include('conexion.php');

$albumId=$_POST[('albId')];
$id=$_POST['id'];
$title=$_POST['inTit'];
$url=$_POST['url'];      //$_POST['url'];
$thumbnailUrl=$_POST['thUrl'];  //thumbnailUrl=$_POST['thUrl'];

$sql="INSERT into photos (albumId,photoId,title,imageUrl,thumbnailUrl)
        values ('$albumId','$id','$title','$url','$thumbnailUrl')";

$query = mysqli_query($conn,$sql);

if($query){
    echo $query;
}
?>