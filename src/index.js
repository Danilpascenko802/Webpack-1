import "./style.css";
import "./index.html";
import items from "./utils/generate-posts.js";
// console.log(items);
import posts from "./data/posts.json"
import item from "./templates/item.hbs";
console.log(item)
import Counter from "./plugins/counter";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import Danya from "./data/posts.json";
const postList = { post: document.querySelector(".post-feed")};
const postItem = item(posts)
console.log(postItem);
// postList.post.append(postItem)
// console.log(Danya);
const danyaData = JSON.stringify(Danya);
// console.log(danyaData);/
// console.log(typeof danyaData);
const newDanData = JSON.parse(danyaData);
// console.log(newDanData)
// console.log(typeof newDanData)
// console.log(basicLightbox);
const instance = basicLightbox.create(document.querySelector("#div"));
// instance.show();
// console.log(document.getElementById("showModal"));
document.getElementById("showModal").addEventListener("click", instance.show);


new Counter ({
    item: document.querySelector("#counter-1")
})
new Counter({
    item: document.querySelector("#counter-2"),
    initialValue: 0,
    step: 50,
})

const date = new Date();
// console.log(date);
// const date1 = new Date("July 11, 1999");
// console.log(date1);
const curenttime = Date.now();
// console.log(curenttime);
// console.log(date.getDate()); // получим текущий день месяца 
// console.log(date1.getDay()); // get index of week day (sunday = 0, saturday = 6)
// console.log(date.getMonth()); // get index of month (0-11)
// console.log(date.getFullYear()); // 

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
