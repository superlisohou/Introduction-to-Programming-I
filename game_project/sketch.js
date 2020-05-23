/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}


function draw_cloud(x, y){
    ellipse(x, y, 24, 24);
    ellipse(x+10,y+10,24,24);
    ellipse(x+30,y+10,24,24);
    ellipse(x+30,y-10,24,24);
    ellipse(x+20,y-10,24,24);
    ellipse(x+40,y,24,24);
}

function draw_banana(x, y) {
  noFill();
  
  
  stroke(255, 245, 100, 255); strokeWeight(5); 
  curve(x-50, y-30, x-20, y-2, x+17.5, y-2,  x+50, y-30);
  stroke(255, 240, 0, 255); strokeWeight(8);
  curve(x-50, y-50, x-20, y, x+15, y, x+50, y-50);
  stroke(240, 220, 0, 255); strokeWeight(4); 
  curve(x-30, y-70, x-22.5, y, x+17.5, y,  x+30, y-70);
  stroke(250, 230, 0, 255); strokeWeight(5);
  line(x-23, y-3, x-30, y-7);
  stroke(150, 100, 0, 255);
  point(x+18, y-3);

}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	noStroke();
    fill(255);
    
    draw_cloud(100, 100);
    draw_cloud(200, 100);
    draw_cloud(250, 150);
    
    noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//further mountain
    
    fill(91, 71, 110);
    strokeWeight(0);
    triangle(360+400, 130, 760+400, 432, -40+400, 432);
  
    fill(213, 212, 255);
    strokeWeight(0);
	beginShape();
		vertex(360+400, 130);
		vertex(485+400+40, 246);
		vertex(390+400, 200);
		vertex(360+400, 250);
  	vertex(320+400, 217);
  	vertex(225+400-30, 255);
	endShape(CLOSE);
    //closer one
	noStroke();    
    fill(174, 139, 222);
    triangle(550, 180, 700, 432, 300, 432);
  
    fill(231, 241, 255);
	beginShape();
    vertex(550, 180);
    vertex(609, 280);
    vertex(570, 250);
    vertex(550, 290);
  	vertex(530, 260);
  	vertex(445, 286);
	endShape(CLOSE);
    


	//3. a tree
    fill(120, 100, 40);
    rect(780, 346, 60, 150);
    fill(0, 155, 0);
    triangle(810, 200, 750,346 , 870, 346 );


	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
    
    
    
	fill(120, 100, 40);
    strokeWeight(2);
    stroke(51);
    
    beginShape();
		vertex(100, 432);
        vertex(112, 450);
        vertex(110, 460);
        vertex(130, 475);
        vertex(125, 495);
        vertex(160, 520);
        vertex(140, 530);
        vertex(200, 576);
        vertex(30, 576);
        vertex(65, 545);
        vertex(50, 530);
        vertex(70, 515);
        vertex(60, 500);
        vertex(80, 490);
        vertex(70, 480);
        vertex(90, 470);
        vertex(80, 450)
        vertex(90, 432)
	endShape();
    
    
    strokeWeight(5);
    stroke(0, 255, 255);
    beginShape();
		vertex(95, 435);
        vertex(90, 450);
        vertex(100, 460);
        vertex(95, 475);
        vertex(110, 495);
        vertex(98, 520);
        vertex(120, 530);
        vertex(95, 576);
	endShape();


	//5. a collectable token - eg. a jewel, fruit, coins
	draw_banana(450, 400, 3, 0)

}
