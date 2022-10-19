canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
        {
            aplhabetkey();
            document.getElementById("d1").innerHTML="Você pressionou uma tecla alfabeto";
            console.log("alphabet key");
        }
	
        if((keyPressed >=48 && keyPressed<=57))
        {
            numberkey();
            document.getElementById("d1").innerHTML="Você pressionou uma tecla numérica";
            console.log("number key");
        }

        if((keyPressed >=37 && keyPressed<=40))
        {
            arrowkey();
            document.getElementById("d1").innerHTML="Você pressionou uma tecla direcional";
            console.log("arrow key");
        }

        if((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27))
        {
            specialkey();
            document.getElementById("d1").innerHTML="Você pressionou uma tecla especial";
            console.log("special key");
        }

        if((keyPressed >=1 && keyPressed<=16)|| (keyPressed >=19 && keyPressed<=26) || (keyPressed >=28 && keyPressed<=36)|| (keyPressed >=41 && keyPressed<=47) || (keyPressed >=58 && keyPressed<=64)|| (keyPressed >=91 && keyPressed<=96) || (keyPressed >=123 && keyPressed<=1000))
        {
            otherkey();
            document.getElementById("d1").innerHTML="Você pressionou uma tecla outro";
            console.log("other key");
        }
}

function aplhabetkey()
{
	img_image="alfabetoASII.png";
    add();
}
function numberkey()
{
	img_image="numeroASII.png";
    add();
}
function arrowkey()
{
    img_image="direcionalASII.png";
    add();
}
function specialkey()
{
	img_image="especialASII.png";
    add();
}
function otherkey()
{
	img_image="outrasASII.png";
	add();
}
