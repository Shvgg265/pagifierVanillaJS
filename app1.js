const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");

const students = [];

// var s;
// function scaleChoice() {
//     var value = document.getElementById("scale");
//     s = value.options[value.selectedIndex].text;
// }
// console.log(s);

for (let i = 0; i < 50; i++) {
    let student = {
        rollNo: i + 1,
        name: (Math.random() + 1).toString(36).substring(7),
        emailId: (Math.random() + 1).toString(36).substring(7),
    };
    students.push(student);
}

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
// let tfoot = document.createElement('tfoot');

// let aList = [];
let page = 0;

// for (let i = 1; i <= 100; i++) {
//     let li = document.createElement("li");
//     li.textContent = `${i}`;
//     aList.push(li);
// }

// for (let i = 0; i < page + 10; i++) {
//     taskList.appendChild(aList[i]);
// }

let row1 = document.createElement("tr");
let heading1 = document.createElement("th");
heading1.innerHTML = "Roll Number";
let heading2 = document.createElement("th");
heading2.innerHTML = "Student Name";
let heading3 = document.createElement("th");
heading3.innerHTML = "Email Id";
row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
thead.appendChild(row1);

// let rowLast = document.createElement('tr');
// let clmn1 = document.createElement('td');
// first.innerHTML = "<<";
// clmn1.innerHTML = first;
// let clmn2 = document.createElement('td');
// clmn2.innerHTML = previous;
// let clmn3 = document.createElement('td');
// clmn3.innerHTML = next;
// let clmn4 = document.createElement('td');
// clmn4.innerHTML = last;
// rowLast.appendChild(clmn1);
// rowLast.appendChild(clmn2);
// rowLast.appendChild(clmn3);
// rowLast.appendChild(clmn4);
// tfoot.appendChild(rowLast);

let rowList = [];

for (let i = 0; i < 50; i++) {
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    data1.innerHTML = students[i].rollNo;
    let data2 = document.createElement("td");
    data2.innerHTML = students[i].name;
    let data3 = document.createElement("td");
    data3.innerHTML = students[i].emailId;
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    rowList.push(row);
}

basePrint(10, 0);

const scale = document.querySelector(".scale1");
scale.addEventListener("click", scaleChoice);

var s = 10;
function scaleChoice() {
    var value = document.getElementById("scale");
    s = value.options[value.selectedIndex].text;
    basePrint(s);
}

function basePrint(s, page = 0) {
    tbody.innerHTML = "";
    for (let i = page; i < page + s && i < rowList.length; i++) {
        tbody.appendChild(rowList[i]);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById("tableData").appendChild(table);
}

next.addEventListener("click", () => {
    page >= rowList.length - s ? (page = 0) : (page += s);
    tbody.innerHTML = "";
    console.log(page);
    basePrint(s, page);
});

previous.addEventListener("click", () => {
    page == 0 ? (page = rowList.length - 10) : (page -= 10);
    tbody.innerHTML = "";
    basePrint(10, page);
});

first.addEventListener("click", () => {
    page = 0;
    tbody.innerHTML = "";
    basePrint(s, page);
});

last.addEventListener("click", () => {
    page = rowList.length - s;
    tbody.innerHTML = "";
    basePrint(s, page);
});



// function mainFunction() {
//     tbody.innerHTML = "";
//     for (let i = 0; i < 10; i++) {
//         tbody.appendChild(rowList[i]);
//     }

//     next.addEventListener("click", () => {
//         page == rowList.length - 10 ? (page = 0) : (page += 10);
//         tbody.innerHTML = "";
//         for (let i = page; i < page + 10 && i < rowList.length; i++) {
//             tbody.appendChild(rowList[i]);
//         }
//     });

//     previous.addEventListener("click", () => {
//         page == 0 ? (page = rowList.length - 10) : (page -= 10);
//         tbody.innerHTML = "";
//         for (let i = page; i < page + 10 && i < rowList.length; i++) {
//             tbody.appendChild(rowList[i]);
//         }
//     });

//     first.addEventListener("click", () => {
//         page = 0;
//         tbody.innerHTML = "";
//         for (let i = page; i < page + 10 && i < rowList.length; i++) {
//             tbody.appendChild(rowList[i]);
//         }
//     });

//     last.addEventListener("click", () => {
//         page = rowList.length - 10;
//         tbody.innerHTML = "";
//         for (let i = page; i < page + 10 && i < rowList.length; i++) {
//             tbody.appendChild(rowList[i]);
//         }
//     });

//     table.appendChild(thead);
//     table.appendChild(tbody);
//     // table.appendChild(tfoot);

//     document.getElementById("tableData").appendChild(table);
// }
