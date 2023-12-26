# messages_choice v0.2


## About:

This is a 'krino.ai' chatbot the 'fruna' way. 

### To edit the flow

To edit the narrative or sequence of responses it is better using the IDE. github.com/ChoicescriptIDE/

Download (or clone the project) and Import the txt files from the folder.

Export to HTML if needed. 

## The surprise

What if we took a ChoiceScript 'game' or decision narrative and mixed it with another, minimalist chatbot-like interface?

Many (non-intelligent) chatbots are simply decision trees, chocies, which can be done with ChoiceScript (and easier with the IDE).

The new thing is the interface with p5.js (processing.org for the web). A new sketch, that you can edit too.

# Up and running
```rb

1. $ cd messages_choice
2. $ python -m SimpleHTTPServer

```

3. Open http://localhost:8000/compiled_mod.html and play.


or if you have a mac and don't have preinstalled python, copy the folder contents to this path with sudo:
```rb

sudo cp file_needed /Library/WebServer/Documents/.

```

3. Open http://localhost/automotriz2.html



### Cheatsheet: Create a narrative from scratch

*choice: To separate the flow

#chocename : _For the title of a choice that goes in the menu_

*label labelname : sets a point in the stream to return to

*goto labelname: return to that point

*if

*else

*create stat 0 : To create a variable

*set stat +1: To assign to variable

*finish : To finish the tree or game

*goto_scene file: To go to another page or chapter.

## changelog 0.2

1. Create a complete or logical ChoiceScript sequence or game. 
2. Export into a standalone HTML file. 
3. Tweak like 3 lines of that file. See configuration. 
4. Add the p5 sketch. See configuration.
5. $cd into the folder and $ python -m SimpleHTTPServer (or any web server)
6. Open in your browser. 


## configuration needed (if you export a new file).

add inside head:
```rb

  <script src="p5.min.js"></script>
  
  <script src="sketch.js"></script>

```

or try the new look and feel instead of sketch:

```rb
  
  <script src="sketch2.js"></script>

```


edit opacity (where you can find it): 

```rb

  <body><div class="container" id="container1" style="opacity:0">

  shouldSlide = false
  
  container1.style.opacity = 0; 
  
```

add to form (script):

```rb
form.setAttribute("id", "formulario"); 
```


## Contributions

I don't have a plan of attack right now.

Rick.
