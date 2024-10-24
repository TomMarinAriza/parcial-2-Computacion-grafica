let bigContainer = document.getElementById("bigContainer");
let drawing = bigContainer.getContext('2d');

drawing.beginPath();

//Drawing the first part of the figure
drawing.strokeStyle = "black";
drawing.moveTo(0, 100);      //1
drawing.lineTo(100, 50);    //2
drawing.lineTo(150, 75);   //3
drawing.lineTo(50, 125);    //4
drawing.lineTo(0, 100);

drawing.stroke();
drawing.closePath();


drawing.beginPath();

drawing.strokeStyle = "black";
drawing.moveTo(0,100);
drawing.lineTo(0,200);
drawing.moveTo(50,125);
drawing.lineTo(50,175);
drawing.lineTo(100,150);
drawing.moveTo(50,175);
drawing.lineTo(100,200);
drawing.lineTo(150,175);
drawing.lineTo(100,150);

drawing.moveTo(150,175);
drawing.lineTo(100,100);

drawing.stroke();
drawing.closePath();

drawing.beginPath();

drawing.strokeStyle = "black";
drawing.moveTo(100,100);
drawing.lineTo(100,150);

drawing.stroke();

drawing.closePath();

drawing.beginPath();

drawing.strokeStyle = "black";
drawing.moveTo(50,175);
drawing.lineTo(100,200);
drawing.lineTo(200,150);
drawing.lineTo(150,75);
drawing.moveTo(100,200);
drawing.lineTo(100,250);
drawing.stroke();

drawing.closePath();

drawing.beginPath();

drawing.strokeStyle = "black";  
drawing.moveTo(200,150);
drawing.lineTo(200,200);
drawing.lineTo(100,250);
drawing.lineTo(0,200);

drawing.stroke();
drawing.closePath();
//Segunda figura

//Top of the second figure
drawing.beginPath();

drawing.strokeStyle = "black";
drawing.moveTo(500, 100);      
drawing.lineTo(600, 50);    
drawing.lineTo(700, 100);   
drawing.lineTo(650, 125);
drawing.lineTo(600, 100);  
drawing.lineTo(550, 125);    
drawing.lineTo(500, 100);

drawing.stroke();
drawing.closePath();

//middle of the second figure

drawing.beginPath();
drawing.strokeStyle = "black";

drawing.moveTo(550,125);
drawing.lineTo(550,175);
drawing.lineTo(600,200);
drawing.lineTo(650,175);
drawing.lineTo(650,125);

drawing.moveTo(550,175);
drawing.lineTo(600,150);
drawing.lineTo(650,175);

drawing.moveTo(600,150);
drawing.lineTo(600,100);

drawing.stroke();
drawing.closePath();

//bottom of the second figure

drawing.beginPath();
drawing.strokeStyle = "black";
drawing.moveTo(500,100);
drawing.lineTo(500,200);
drawing.lineTo(600,250);
drawing.lineTo(700,200);
drawing.lineTo(700,100);

drawing.stroke();
drawing.closePath();

//third figure

//top of the third figure
drawing.beginPath();

drawing.strokeStyle = "black";

drawing.moveTo(0, 600);
drawing.lineTo(100, 550);  
drawing.lineTo(150, 575);
drawing.lineTo(100, 600);
drawing.lineTo(50, 575);

drawing.stroke();
drawing.closePath();

//middle of the third figure

drawing.beginPath();

drawing.strokeStyle = "black";

drawing.moveTo(200,650);
drawing.lineTo(100,700);
drawing.lineTo(50,675);
drawing.lineTo(0,600);

drawing.moveTo(50,675);
drawing.lineTo(100,650);
drawing.lineTo(150,675);
drawing.lineTo(100,600);

drawing.moveTo(100,650);
drawing.lineTo(50,575);

drawing.moveTo(100,700);
drawing.lineTo(100,750);



drawing.stroke();
drawing.closePath();

//bottom of the third figure

drawing.beginPath();


drawing.strokeStyle = "black";

drawing.moveTo(0,600);
drawing.lineTo(0,700);
drawing.lineTo(100,750);
drawing.lineTo(200,700);
drawing.lineTo(200,650);
drawing.lineTo(150,575);

drawing.stroke();
drawing.closePath();


