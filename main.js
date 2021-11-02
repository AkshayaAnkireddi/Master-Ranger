var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image('https://lh3.googleusercontent.com/proxy/LVFiLL9TWQNi3SS-ny-sGKZkPvXF8UeULy083iZcqvKN1Ftx4jq74WTlpabqteRZe7Cqx6mnwPQHQDYaROpw-en3AkoKiNlqoKXGt2vR4oZOFuOwnMsug364KaqDYD9BPRTWZ5mbQSW67tHo'); 
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('https://i.pinimg.com/originals/24/24/f4/2424f475868202c040477855b265d1f8.png'); 
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x = 350;
		new_image('https://static.wikia.nocookie.net/powerrangers/images/b/b5/Boom-yellow.png/revision/latest/scale-to-width-down/225?cb=20200606072719'); 
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('https://www.pngkit.com/png/full/386-3864321_pink-clipart-power-rangers-power-rangers-pink-ranger.png'); 
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('https://lh3.googleusercontent.com/proxy/Q6MF5PQKZq0tpKYHwW9y7fVlPqWUNGOuqQG30S2uhfR8-HOTfPRVsz-rSb9EsAjLF62T30P61ucH_E9_ITf-EAnVTpFjteW6wv206PlVg5lW3YLwuZXW0wSzg6Bw5yv2PcTX75c247eF'); 
		console.log("b");
	}
	
}
