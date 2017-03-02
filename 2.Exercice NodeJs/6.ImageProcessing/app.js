var images = require("images");

images("img/1.jpg")                     //Load image from file 
    .size(400)                          //Geometric scaling the image to 400 pixels width
    .draw(images("img/logo.png").size(50) , 10, 10)   //Drawn logo at coordinates (10,10)
    .save("output.jpg", {               //Save the image to a file,whih quality 50
    });
