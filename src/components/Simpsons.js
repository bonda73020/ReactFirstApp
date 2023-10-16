import {SimpsonsUnit} from "./SimpsonsUnit";

const Simpsons=()=>{
        const Family = [
            {
                name: "Homer",
                job: "Nuclear Safety Inspector",
                age: 42,
                hobbies: ["Watching TV", "Eating Donuts"],
                friends: ["Barney", "Lenny", "Carl"],
                image: "https://pyxis.nymag.com/v1/imgs/58e/3ab/2379dcdefe01f766ded13cb9a4e07c869b-18-homer-simpson.rsquare.w330.jpg", // Add image URL here
            },
            {
                name: "Marge",
                job: "Housewife",
                age: 38,
                hobbies: ["Baking", "Painting"],
                friends: ["Patty", "Selma"],
                image: "https://www.sosyncd.com/wp-content/uploads/2022/03/6.png", // Add image URL here
            },
            {
                name: "Bart",
                job: "Student",
                age: 10,
                hobbies: ["Skateboarding", "Pranking"],
                friends: ["Milhouse", "Nelson"],
                image: "https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif", // Add image URL here
            },
            {
                name: "Lisa",
                job: "Student",
                age: 8,
                hobbies: ["Playing Saxophone", "Reading"],
                friends: ["Ralph", "Janey"],
                image: "https://facts.net/wp-content/uploads/2023/09/24-facts-about-lisa-simpson-the-simpsons-1693830278.jpg", // Add image URL here
            },
            {
                name: "Maggie",
                job: "Toddler",
                age: 1,
                hobbies: ["Sucking on Pacifier", "Exploring"],
                friends: ["Gerald"],
                image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png", // Add image URL here
            },
        ];



    return<div id="Simpsons">
        <h2>Simpsons</h2>
        <div id={"SimpsonsContainer"}>
            {Family.map(i =>(<SimpsonsUnit key={i.name} unit={i}/>))}
        </div>
 </div>
}

export {Simpsons}