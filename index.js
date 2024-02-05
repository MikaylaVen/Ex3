import * as exercises from "./exercises.js";
//creating array of quotes
const quotations = [
    "The purpose of our lives is to be happy.-Dalai Lama",
    "Never let the fear of striking out keep you from playing the game.-Babe Ruth ",
    "Only a life lived for others is a life worthwhile.-Albert Einstein " 
];
//function to generate random quote
const Getquote = () => {
    //generating random index
const randomIndex = [Math.floor(Math.random() * quotations.length)];
//Returning random quote
return quotations[randomIndex];
};
//Print a random quote to console
console.log(Getquote());