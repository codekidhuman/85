canvas = document.getElementById('canva');
ctx = canvas.getContext('2d')
gw=75;
gh=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

gx = 5;
gy = 255;
function add()
 {
bit = new Image();
bit.onload=uploadBackground;
bit.src=background_image
git = new Image();
git.onload=uploadgreencar;
git.src=greencar_image
 }

function uploadBackground() {
ctx.drawImage(bit, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(git, gx, gy, gw, gh)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (gy >= 0)
	gy=gy-10
	console.log("up press, x = " + gx, "; y = " + gy)
	uploadBackground()
	uploadgreencar()
}

function down()
{
	if (gy <= 300)
	gy=gy+10
	console.log("down press, x = " + gx, "; y = " + gy)
	uploadBackground()
	uploadgreencar()
}

function left()
{
	if (gx >= 0)
	gx=gx-10
	console.log("left press, x = " + gx, "; y = " + gy)
	uploadBackground()
	uploadgreencar()
}

function right()
{
	if (gx <= 725)
	gx=gx+10
	console.log("right press, x = " + gx, "; y = " + gy)
	uploadBackground()
	uploadgreencar()
}
