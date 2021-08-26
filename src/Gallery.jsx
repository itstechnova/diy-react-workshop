/* 
===========================================================
  PLACE YOUR CODE HERE!!!!!
=========================================================== 
  Note: I'm glossing over a whole bunch of stuff so you can play 
  with what we did for our TechNova website! See this component
  in action here: https://www.itstechnova.org/#contact
  
  Check out the component code in our public website repo on github! 
  https://github.com/itstechnova/itstechnova.com/blob/main/src/sections/Team/Team.jsx
  
  Here is an awesome ~Intro to React~ tutorial made by the creators 
  themselves if you want a comprehensive intro!
  https://reactjs.org/tutorial/tutorial.html

  Note: the yellow underlines are here remind you the code is currently unused. 
  Hover over it to see the full warning!
*/

import React, { useState } from "react";
/* 
  Here we IMPORT all the images we want to show \('v')/
  Feel free to put your own pictures in the images folder
  and update the source!
*/
import goose1 from "./images/goose-hot.png";
import goose2 from "./images/goose-goof.jpg";
import bee1 from "./images/bee-hot.png";
import bee2 from "./images/bee-goof.jpg";
import bunny1 from "./images/bunny-hot.jpg";
import bunny2 from "./images/bunny-goof.jpg";

/*
  [pictures] is our list of picture OBJECTS, each OBJECT includes these PROPERTIES:
    1. [hot] --> pic source that is shown normally.
    2. [goof] --> pic source that only shows on hover.
    3. [description] --> text shown at the top.
*/
const pictures = [
  { hot: goose1, goof: goose2, description: "Mrs. Goose: our Waterloo icon" },
  { hot: bunny1, goof: bunny2, description: "Cute Bunny: aww so fluffy" },
  { hot: bee1, goof: bee2, description: "Worker Bee: always grinding" }
];

/* 
  [PictureCard] is our image COMPONENT that changes on hover. 
  It is given a [picture], [id], and [onHover] as PROPS.
    1. [picture] --> The picture OBJECT with [hot], [goof], [description] PROPERTIES.
    2. [id] --> The unique id of the PictureCard.
    3. [onHover] --> A CALLBACK function that will be called on hover. 
  More info on COMPONENTS and PROPS: 
  https://reactjs.org/docs/components-and-props.html
*/
const PictureCard = () => {
  return <>{/* Something */}</>;
};

/*
  Gallery is the COMPONENT we use on TechNova's Meet the Team section 
  (https://www.itstechnova.org/#contact), where the description
  changes depending on which image was hovered on most recently. 
  It RENDERS the PictureCards as well as the current description.
  The [export] keyword allows it to be imported from the App.js file.
*/
export const Gallery = () => {
  return (
    <>
      {/* Something */}
      <p>Welcome to the skeleton! Please copy your code into the files: Gallery.jsx, styles.css</p>
    </>
  );
};
