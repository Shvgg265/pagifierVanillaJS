const students = [];

for (let i = 0; i < 50; i++) {
    let student = {
        rollNo: i + 1,
        name: (Math.random() + 1).toString(36).substring(7),
        emailId: (Math.random() + 1).toString(36).substring(7)
    }
    students.push(student);
}

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');


let row1 = document.createElement('tr');
let heading1 = document.createElement('th');
heading1.innerHTML = "Roll Number";
let heading2 = document.createElement('th');
heading2.innerHTML = "Student Name";
let heading3 = document.createElement('th');
heading3.innerHTML = "Email Id";
row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
thead.appendChild(row1);

let rowList = [];

for (let i = 0; i < 50; i++) {
    let row = document.createElement('tr');
    let data1 = document.createElement('td');
    data1.innerHTML = students[i].rollNo;
    let data2 = document.createElement('td');
    data2.innerHTML = students[i].name;
    let data3 = document.createElement('td');
    data3.innerHTML = students[i].emailId;
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    rowList.push(row);
}

tbody.innerHTML = "";
for (let i = 0; i < 10; i++) {
    tbody.appendChild(rowList[i]);
}

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);