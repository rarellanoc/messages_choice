//*

// Chatroom

// Connect to this sketch
//let socket = io("http://localhost:3000");

// */


let dancingWords = [];

let dancingOptions = [];

let opcion_tomada = 1;

let dancing_words_old = [];


const s = ( sketch ) => {


sketch.processWord = (x,y,string,colour,time) => {
	if(string[0] == "/"){
		let newString = string.slice(1).split(" ")
		let command = newString[0]
		let parameters = newString.slice(1)
		processCommand(command, parameters)
	}
	else{
		sketch.addWord(x,y,string,colour,time)
	}
}

sketch.addWord = (x,y,string,colour,time) => {
	
words.push({"x":x,"y":y,"string":string,"colour":colour,"time":time});
}

sketch.processCommand = (command, parameters) => {
	switch(command){
		case "background":
			bCol = color(parameters[0], parameters[1]||360, 
parameters[2]||360);
			break;

		default:
			
	}
}


sketch.setup = () => {
  sketch.cnv = sketch.createCanvas(1200, sketch.windowHeight);
 sketch.cnv.position(0, 0);
	// When someone emits a message from their sketch, run the "addWord()" function
  //socket.on('drawing', sketch.processWord);
	sketch.colorMode(sketch.HSB,360,360);
  sketch.background(225);
	myColour = sketch.random(360)
	string="";
	
	sketch.
	textSize(35);
	sketch.textAlign(sketch.LEFT, sketch.CENTER);
	
	words = [];
	
	bCol = sketch.color(255)

       let texts = document.getElementById('text').innerHTML.replace("<br>"," ").replace("\n","").split('  ');

	for (let i = 0; i < texts.length; i++)   {

		if (texts[i] != ' ') {

		dancingWords.push(texts[i]);


		}
	}
  let inputs_dom = sketch.selectAll('.choice');
  let input_text_array = inputs_dom[0].elt.innerText.split('\n');
 
  for (let i = 0; i < input_text_array.length; i++) {

  	dancingOptions.push(input_text_array[i]);

  }


}

sketch.draw = () => {
	sketch.background(bCol)
  sketch.noStroke();
	bottom = sketch.height-100
	for(let i = 0; i < words.length; i++){
		let word = words[words.length-i-1]
  	sketch.fill(word.colour, 360, 360)
  	sketch.text(word.string,400,bottom-i*30)
		sketch.fill(0)
		sketch.text(word.time,100,bottom-i*40)
	}
	
	sketch.text("       >    "+string, 100, bottom+40)
}


sketch.keyPressed = () => {
	if(sketch.keyCode != sketch.ENTER){
		if(sketch.keyCode != 16){ // Allow shift
			if(sketch.keyCode != 8){ // Implement backspace
				string += sketch.key;
			}
			else{
				string = string != "" ? string.slice(0,-1) 
: ""
			}
		} 
		
	}
	else{   

		if(string.includes("... ")) {

			//console.log('enters');


                        x = sketch.random(sketch.width); 
                        y = sketch.random(sketch.height);
                        time = new Date().toLocaleTimeString().slice(0,-3)
                 

			opcion_tomada = string.split('... ')[1] - 1;

			sketch.processWord(x,y,opcion_tomada+1,myColour,time);

			
			//console.log(opcion_tomada);

			formu2 = document.querySelectorAll(".formulario")[0];

			//console.log('click2 '+ opcion_tomada);

			// Get the first element whose ID starts with "1-"
			let element = document.querySelector('[id^="' + opcion_tomada + '-"]');
			if (element) {
    				// Do something with 'element'
    				console.log(element.id);
				element.checked = true;
				
			}

			//document.getElementById(opcion_tomada).checked = true;

			//console.log(formu2.nextSibling);

			//formu2.nextSibling.onclick();

			const get= document.getElementsByClassName('next')[0];

			get.click();

       //dancingWords = []

    let texts2 = document.getElementById('text').innerHTML.replace("\n","").replace('<br>','');


    texts2 = texts2.split('  ');
    //console.log(texts2);

for (let i = 0; i < texts2.length; i++) {

    dancingWords.push(texts2[i]);

}

    //console.log("dw " + dancingWords);

    dancingOptions = [];

    let inputs_dom2 = sketch.selectAll('.choice');
    let input_text_array2 = inputs_dom2[0].elt.innerText.split('\n');

  for (let i = 0; i < input_text_array2.length; i++) {

        dancingOptions.push(input_text_array2[i]);

  }

console.log('click2 '+ opcion_tomada);

// Get the first element whose ID starts with "1-"
element = document.querySelector('[id^="' + opcion_tomada + '-"]');
if (element) {
    // Do something with 'element'
    console.log(element.id);
     element.checked = true;
				
			}

//document.getElementById(opcion_tomada).checked = true;



			for (let i =0; i< dancingWords.length; i++) {


				dancing_words_old.push(dancingWords);


			}
			dancingWords.splice(0, dancingWords.length);
			//console.log(dancingWords);

   let texts = document.getElementById('text');
  
    

    console.log('txt : '+ texts2);
                        
    dancingWords.push(texts2);

    dancingOptions = [];

    let inputs_dom = sketch.selectAll('.choice');
  let input_text_array = inputs_dom[0].elt.innerText.split('\n');
 
  for (let i = 0; i < input_text_array.length; i++) {

  	dancingOptions.push(input_text_array[i]);

  }

    string = "enviar";
    get.click();


	} else if (string != ""){
			x = sketch.random(sketch.width);
			y = sketch.random(sketch.height);
			time = new Date().toLocaleTimeString().slice(0,-3)
			sketch.processWord(x,y,string,myColour,time);
			//socket.emit('drawing',x,y,string,myColour, time);

			let joined_final = [];

			sketch.processWord(x,y,dancingWords[0],myColour,time);

			string = "";
			string = "... ";

			//dar opciones
			
			for (let i = 0; i < dancingOptions.length; i++) {

				sketch.processWord(x,y,i+1 + " : " +dancingOptions[i],sketch.color(8,81,100),time);

			}

		}

	}
	if(sketch.keyCode == 191){return false} // "/" is used for quickfind, so this disables that
}


//end sketch
 
};


let myp5 = new p5(s);
