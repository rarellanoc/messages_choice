let font,
fontsize = 15;
let dancingWords = [];

let dancingOptions = [];

let opcion_tomada = 0;


const s = ( sketch ) => {

  sketch.preload = () => {
	font = sketch.loadFont('assets/SourceSansPro-Regular.otf');
  }

  sketch.setup = () => {
    sketch.cnv = sketch.createCanvas(800, 400);

    var x = (sketch.windowWidth - sketch.width) / 2;
  var y = (sketch.windowHeight - sketch.height) / 2;
  sketch.cnv.position(x, y);

  sketch.textFont(font);
  sketch.textSize(fontsize);
  sketch.textAlign(sketch.LEFT, sketch.CENTER);

  let texts = sketch.selectAll('#text p');

  for (let i = 0; i < texts.length; i++) {

  	let paragraph = texts[i].html();

	let words = paragraph.split('</p>');

	for (let j = 0; j < words.length; j++) {

		dancingWords.push(words[j]);


	}

  }


  let inputs_dom = sketch.selectAll('.choice');
  let input_text_array = inputs_dom[0].elt.innerText.split('\n');
 
  for (let i = 0; i < input_text_array.length; i++) {

  	dancingOptions.push(input_text_array[i]);

  }


  };

  sketch.draw = () => {


 sketch.frameRate(5);
    

  sketch.background(245);

 sketch.text('Enviar',10,20);

 sketch.fill(0,0,0);
//sketch.rect(0,390,10,10);

  let last_position = 0;

  for (let i = 0; i < dancingWords.length; i++) {

  	sketch.text(dancingWords[i], 10,(100 + (20*i)));

  }

  

  
  for (let j = 0; j < dancingOptions.length; j++) {
    sketch.fill(0);
    sketch.text(dancingOptions[j],500,20 + (20*j));
  

    let begin_sq_x = 500;
    let end_sq_x = begin_sq_x + dancingOptions[j].length * fontsize;


    let begin_sq_y = 20 + (20*j);
    let end_sq_y = begin_sq_y + 10;
    
    //sketch.noFill();
    //sketch.rect(500,20 + (20*j), dancingOptions[j].length * fontsize/2,fontsize);


    if ((sketch.mouseX > begin_sq_x) && (sketch.mouseX < end_sq_x) && (sketch.mouseY > begin_sq_y) && (sketch.mouseY < end_sq_y)) {

	opcion_tomada = j;

	sketch.fill(0,255,0);
 	sketch.text(dancingOptions[j],500,20 + (20*j));
  	//sketch.rect(500,20 + (20*j), dancingOptions[j].length * fontsize/2,fontsize);


    }

 }




  };

  sketch.mousePressed = () => { 

       dancingWords = []

  let texts = sketch.selectAll('#text p');

  for (let i = 0; i < texts.length; i++) {

  	let paragraph = texts[i].html();

	let words = paragraph.split('</p>');

	for (let j = 0; j < words.length; j++) {

		dancingWords.push(words[j]);


	}

    dancingOptions = [];

    let inputs_dom = sketch.selectAll('.choice');
  let input_text_array = inputs_dom[0].elt.innerText.split('\n');
 
  for (let i = 0; i < input_text_array.length; i++) {

  	dancingOptions.push(input_text_array[i]);

  }

  }



formu2 = document.querySelectorAll(".formulario")[0];




console.log('click2 '+ opcion_tomada);
console.log(formu2);

document.getElementById(opcion_tomada).checked = true;

console.log(formu2.nextSibling);


if (sketch.mouseX > sketch.width/2) {

formu2.nextSibling.onclick();

}







 

  };


//still sketch



//end sketch
 
};


let myp5 = new p5(s);




















