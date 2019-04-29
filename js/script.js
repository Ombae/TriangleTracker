function tracker(){
  var sideX = parseInt(document.getElementById('X').value);
  var sideY = parseInt(document.getElementById('Y').value);
  var sideZ = parseInt(document.getElementById('Z').value);

  if(sideX + sideY > sideZ && sideX + sideZ > sideY && sideY + sideZ > sideX){
    if(sideX === sideY && sideX === sideZ && sideY === sideZ){
      document.getElementById('text').innerHTML = "This is an <strong>Equilateral Triangle!</strong>";
    }
    else if(sideX === sideY || sideX === sideZ || sideY === sideZ){
      document.getElementById('text').innerHTML = "This is an <strong>Isosceles Triangle!</strong>";
    }
    else{
      document.getElementById('text').innerHTML = "This is a <strong> Scalene Triangle!</strong>";
    }
  }
  else{
    document.getElementById('text').innerHTML = "This is NOT A TRIANGLE!"
  }
}
