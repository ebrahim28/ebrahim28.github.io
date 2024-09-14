$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(120,650,200,20)
    createPlatform(70,10,20,360)
    createPlatform(500,600,200,20)
    createPlatform(850,520,200,20)
    createPlatform(1270,600,20,1000)
    createPlatform(1300,700,20,20)
    createPlatform(1380,640,20,20)
    createPlatform(500,400,200,20)
    createPlatform(90,350,200,20)
    createPlatform(480,250,100,20)
    createPlatform(700,170,150,20)
    createPlatform(1000,115,150,20)



    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 190, 200, 20, 0.5)
    createCollectable("max", 580, 200, 2, 0.5)
    createCollectable("database", 930, 200, 2, 0.5)
    createCollectable("diamond", 1350, 200, 20, 0.5)
    createCollectable("kennedi", 760, 200, 1, )
    createCollectable("grace", 1050, 50, 20, 0.5)
    createCollectable("steve", 190, 370, 5, 0.5)
    createCollectable("max", 580, 270, 15, 0.5)
    createCollectable("database", 760, 100, 2, 0.5)
    createCollectable("grace", 510, 100, 2, 0.5)



    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("bottom", 350, 1700)
    createCannon("left", 480, 1400)
    createCannon("right", 290, 1600)
    
    



    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
