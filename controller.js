addEventListener("keydown", function(event){
  if(event.code == "KeyD") vxr = 2;
  if(event.code == "KeyA") vxl = -2;
  if(event.code == "KeyS") vy = 2;
  if(event.code == "KeyW") vy = -2;
});

addEventListener("keyup", function(event){
  if(event.code == "KeyD") vxr = 0;
  if(event.code == "KeyA") vxl = 0;
  if(event.code == "KeyS") vy = 0;
  if(event.code == "KeyW") vy = 0;
});