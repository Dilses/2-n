var row = 4, col = 4;
let arr = [];
for(let i = 0; i < row; i++) {
    arr[i] = [];
    prnt = document.createElement("div");
    prnt.className = "row";
    for(let j = 0; j < col; j++) {
        elem = document.createElement("span");
        elem.className = "cell";
        elem["data-num"] = -1;
        elem.innerText = i * col + j;
        prnt.appendChild(elem);
        arr[i][j] = elem;
    }
    grid.appendChild(prnt);
}