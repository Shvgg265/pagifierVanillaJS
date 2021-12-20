const taskList = document.querySelector(".task-list");

const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");

let aList = [];
let page = 0;

for (let i = 1; i <= 100; i++) {
    let li = document.createElement("li");
    li.textContent = `${i}`;
    aList.push(li);
}
// '<tr><td> ' ' </td><td></td><td></td></tr>'

for (let i = 0; i < page + 10; i++) {
    taskList.appendChild(aList[i]);
}

next.addEventListener("click", () => {
    page == aList.length - 10 ? (page = 0) : (page += 10);
    taskList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
        taskList.appendChild(aList[i]);
    }
});

previous.addEventListener("click", () => {
    page == 0 ? (page = aList.length - 10) : page -= 10;
    taskList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
        taskList.appendChild(aList[i]);
    }
});

first.addEventListener("click", () => {
    page = 0;
    taskList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
        taskList.appendChild(aList[i]);
    }
});

last.addEventListener("click", () => {
    page = aList.length - 10;
    taskList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
        taskList.appendChild(aList[i]);
    }
});

console.log(aList);