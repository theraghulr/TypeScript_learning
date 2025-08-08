function printCoord(x:number,y:number) {
  console.log("The coordinate's x value is " + x);
  console.log("The coordinate's y value is " +y);
}
printCoord(7,9);


function coordinates (points:{x:number,y:number}){
   console.log("the additon of two coordinate: "+ (points.x+points.y))
}
coordinates({x:7,y:9});