
let x = 0
let y = 0
let r = 0
let xx;
let yy;
let soltarClick=0
let pintarLinea=0
let pintarCirculo=0
let pintarRectangulo=0
var figura
var colors = '#222222'
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(15);
	
	
}

function draw() {

	stroke(colors);
	fill(colors);
	//////////////////////////////////////////////////////
 	if (mouseIsPressed) {



 		switch(figura){
  			case 1:
  				xx=mouseX;
				yy=mouseY;
				soltarClick=1;
  			break
  			case 2:
  				if(mouseX>x){
			  		r = mouseX-x
			  	} else {
			  		r = x-mouseX
			  	}
			  	soltarClick=1;
  			break
  			case 3:
  				soltarClick=1;
  			break

  		} 

  		

  } else {

  	if(soltarClick==1){



  		switch(figura){
  			case 1:
  				pintarLinea=1;
  			break
  			case 2:
  				pintarCirculo=1;
  			break
  			case 3:
  				pintarRectangulo=1;
  			break

  		} 

  		
  		
  		
  		
  	}else{
  		x=mouseX;
  		y=mouseY;
  	}


    
  }


  if(pintarLinea==1){
  	
  	linea (x, y, xx, yy)
  	pintarLinea=0;
  	soltarClick=0;
  }

   if(pintarCirculo==1){
   
  	circulo(x,y,r)
  	pintarCirculo=0;
  	soltarClick=0;
  }

  if(pintarRectangulo==1){
  	noFill();
  	rect(x, y, mouseX-x, mouseY-y)
  	pintarRectangulo=0;
  	soltarClick=0;
  }

  //////////////////////////////////////////////////////





}

function color1(c){
	colors = c
}

function color2(c){
	colors = c
}

function color3(c){
	colors = c
}

function color4(c){
	colors = c
}

function figura1 (t){
	figura = t

}
function figura2 (t){
	figura = t

}
function figura3 (t){
	figura = t

}



function linea (x1, y1, x2, y2) {
	let y = y1
	let x = x1
	let dx = x2-x1
	let dy = y2-y1
	let m
	let b
	let xs = Math.abs(dx)
	let ys = Math.abs(dy)
	let xi
	let yi
	
	m = (dy) / (dx)
	b = y1 - m * x1

	if(xs > ys){
		///////////////////////////////////////////////////////
		xi = (x2 - x1) / xs
		yi = (y2 - y1) / xs

		for(let i=0;i<xs;i++){
			if(x1==x2){
				y+=yi
			}
			else{
				y = m*x+b
			}
			point(x+=xi,y)
		}
	}
	else{
		xi = (x2 - x1) / ys
		yi = (y2 - y1) / ys





		for(let i=0;i<ys;i++){
			if(x1==x2){
				y+=yi
			}
			else{
				y = m*x+b
			}
			point(x+=xi,y)
		}
	}


	
}





function circulo (x1, y1, r) {
	let x = 0
	let y = r
	let p = Math.floor((5/4)-r)

	do {
		if(p < 0)
		{

			x++
			p += (2*x) + 1 
		}
		else
		{
			x++
			y--
			p += ((2*x)+1)-(2*y)
		}
		/////////////////////
		point(x1+x,y1+y)
		point(x1+y,y1+x)
		point(x1+y,y1-x)
		point(x1+x,y1-y)
		point(x1-x,y1-y)
		point(x1-y,y1-x)
		point(x1-y,y1+x)
		point(x1-x,y1+y)
			
	}while(x < y)

}