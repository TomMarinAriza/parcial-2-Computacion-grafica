let bigContainer = document.getElementById("bigContainer");
let drawing = bigContainer.getContext('2d');

drawing.beginPath();
drawing.fillStyle = "#FFC0CB";
//Drawing the first part of the figure
drawing.strokeStyle = "black";
drawing.moveTo(0, 100);      //1
drawing.lineTo(100, 50);    //2
drawing.lineTo(150, 75);   //3
drawing.lineTo(50, 125);    //4
drawing.lineTo(0, 100);
drawing.fill()
drawing.stroke();
drawing.closePath();


//painting the first figure

drawing.beginPath();
drawing.fillStyle = "#FFC0CB";
drawing.strokeStyle = "black";
drawing.moveTo(100,100);
drawing.lineTo(50,125);
drawing.lineTo(50,175);
drawing.lineTo(100,150);
drawing.lineTo(100,100);
drawing.fill();

drawing.stroke();
drawing.closePath();

drawing.beginPath();

drawing.fillStyle = "#FFC0CB";

drawing.strokeStyle = "black";
drawing.moveTo(100,150);
drawing.lineTo(150,175);
drawing.lineTo(100,100);
drawing.lineTo(100,150);

drawing.fill();
drawing.stroke();
drawing.closePath();

drawing.beginPath();
drawing.fillStyle = "#FFC0CB";
drawing.strokeStyle = "black";
drawing.moveTo(100,150);
drawing.lineTo(50,175);
drawing.lineTo(100,200);
drawing.lineTo(150,175);
drawing.lineTo(100,150);

drawing.fill();
drawing.stroke();
drawing.closePath();

drawing.beginPath();
drawing.fillStyle = "#FFC0CB";
drawing.strokeStyle = "black";
drawing.moveTo(150,175);
drawing.lineTo(200,150);
drawing.lineTo(150,75);
drawing.lineTo(100,100);
drawing.lineTo(150,175);
drawing.fill();
drawing.stroke();
drawing.closePath();

drawing.beginPath();
drawing.fillStyle = "#FFC0CB";
drawing.strokeStyle = "black";
drawing.moveTo(100,200);
drawing.lineTo(100,250);
drawing.lineTo(200,200);
drawing.lineTo(200,150);
drawing.lineTo(100,200);
drawing.fill();

drawing.stroke();
drawing.closePath();

drawing.beginPath();
drawing.fillStyle = "#FFC0CB";
drawing.strokeStyle = "black";
drawing.moveTo(100,200);
drawing.lineTo(100,250);
drawing.lineTo(0,200);
drawing.lineTo(0,100);
drawing.lineTo(50,125);
drawing.lineTo(50,175);
drawing.lineTo(100,200);
drawing.fill();

drawing.stroke();
drawing.closePath();

//Segunda figura

//Top of the second figure
drawing.beginPath();

drawing.strokeStyle = "black";
drawing.fillStyle = "blue";
drawing.moveTo(500, 100);      
drawing.lineTo(600, 50);    
drawing.lineTo(700, 100);   
drawing.lineTo(650, 125);
drawing.lineTo(600, 100);  
drawing.lineTo(550, 125);    
drawing.lineTo(500, 100);

drawing.fill();

drawing.stroke();
drawing.closePath();



//middle of the second figure

drawing.beginPath();
drawing.fillStyle = "blue";
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

// Iniciar la ruta para la figura
drawing.beginPath();
drawing.fillStyle = "blue";
drawing.strokeStyle = "black";

// Definir la figura
drawing.moveTo(500, 100);
drawing.lineTo(500, 200);
drawing.lineTo(600, 250);
drawing.lineTo(700, 200);
drawing.lineTo(700, 100);

// Dibujar el trazo primero
drawing.stroke();

// Cambiar la operación para que el relleno se dibuje detrás de las líneas
drawing.globalCompositeOperation = 'destination-over';

// Rellenar la figura debajo del trazo
drawing.fill();

// Restaurar la operación predeterminada para futuras figuras
drawing.globalCompositeOperation = 'source-over';
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

//paiting the third figure
// Iniciar la ruta de la figura
drawing.beginPath();

// Definir la figura
drawing.moveTo(0, 600);
drawing.lineTo(100, 550); 
drawing.lineTo(150, 575);
drawing.lineTo(200, 650);
drawing.lineTo(200, 700);
drawing.lineTo(100, 750);
drawing.lineTo(0, 700);
drawing.lineTo(0, 600);

// Dibujar el trazo de las líneas
drawing.stroke();
drawing.closePath();

// Dibujar el relleno detrás de las líneas
drawing.beginPath();
drawing.fillStyle = "green";

// Definir la figura nuevamente para aplicar el relleno
drawing.moveTo(0, 600);
drawing.lineTo(100, 550); 
drawing.lineTo(150, 575);
drawing.lineTo(200, 650);
drawing.lineTo(200, 700);
drawing.lineTo(100, 750);
drawing.lineTo(0, 700);
drawing.lineTo(0, 600);

// Cambiar la operación para colocar el relleno detrás
drawing.globalCompositeOperation = 'destination-over';

// Aplicar el relleno
drawing.fill();

// Restaurar la operación de dibujo predeterminada
drawing.globalCompositeOperation = 'source-over';

drawing.closePath();

//fourth figure

//top of the fourth figure

drawing.beginPath();

drawing.strokeStyle = "black";

drawing.moveTo(500,600);
drawing.lineTo(600,550);
drawing.lineTo(650,575);
drawing.lineTo(600,600);
drawing.lineTo(550,575);

drawing.stroke();
drawing.closePath();

//middle of the fourth figure

drawing.beginPath();

drawing.strokeStyle = "black";

drawing.moveTo(650,625);
drawing.lineTo(600,650);
drawing.lineTo(550,575);

drawing.moveTo(600,650);
drawing.lineTo(600,600);

drawing.moveTo(700,650);
drawing.lineTo(650,675);
drawing.lineTo(600,750);
drawing.lineTo(500,600);

drawing.moveTo(550,675);
drawing.lineTo(600,650);

drawing.moveTo(550,675);
drawing.lineTo(650,675);

drawing.stroke();
drawing.closePath();

//bottom of the fourth figure

drawing.beginPath();

drawing.strokeStyle = "black";

drawing.moveTo(500,600);
drawing.lineTo(500,700);
drawing.lineTo(600,750);
drawing.lineTo(700,700);
drawing.lineTo(700,650);

drawing.moveTo(650,575);
drawing.lineTo(650,625);
drawing.lineTo(700,650);



drawing.stroke();
drawing.closePath();
//Paiting the fourth figure
// Iniciar la ruta para las líneas
drawing.beginPath();
drawing.strokeStyle = "black";

// Definir la figura
drawing.moveTo(500, 600);
drawing.lineTo(600, 550);
drawing.lineTo(650, 575);
drawing.lineTo(650, 625);
drawing.lineTo(700, 650);
drawing.lineTo(700, 700);
drawing.lineTo(600, 750);
drawing.lineTo(500, 700);
drawing.lineTo(500, 600);

// Dibujar el trazo de las líneas
drawing.stroke();
drawing.closePath();

// Iniciar la ruta para el relleno
drawing.beginPath();
drawing.fillStyle = "yellow";

// Definir la figura nuevamente para aplicar el relleno
drawing.moveTo(500, 600);
drawing.lineTo(600, 550);
drawing.lineTo(650, 575);
drawing.lineTo(650, 625);
drawing.lineTo(700, 650);
drawing.lineTo(700, 700);
drawing.lineTo(600, 750);
drawing.lineTo(500, 700);
drawing.lineTo(500, 600);

// Cambiar la operación para que el relleno se coloque detrás de las líneas
drawing.globalCompositeOperation = 'destination-over';

// Aplicar el relleno
drawing.fill();

// Restaurar la operación de dibujo predeterminada
drawing.globalCompositeOperation = 'source-over';

drawing.closePath();

