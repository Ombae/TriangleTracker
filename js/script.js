function tracker(){
  var sideX = parseInt(document.getElementById('X').value);
  var sideY = parseInt(document.getElementById('Y').value);
  var sideZ = parseInt(document.getElementById('Z').value);

  if(sideX + sideY > sideZ && sideX + sideZ > sideY && sideY + sideZ > sideX){
    if(sideX === sideY && sideX === sideZ && sideY === sideZ){
      document.getElementById('text').innerHTML = "This is an Equilateral Triangle!";
    }
    else if(sideX === sideY || sideX === sideZ || sideY === sideZ){
      document.getElementById('text').innerHTML = "This is an Isosceles Triangle!";
    }
    else{
      document.getElementById('text').innerHTML = "This is a Scalene Triangle!";
    }
  }
  else{
    document.getElementById('text').innerHTML = "This is NOT A TRIANGLE!"
  }
}
