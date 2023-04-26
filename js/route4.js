$(function () {

    let studentaarr = [];
    fetch("datajson/student.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(element => {
                studentaarr.push(element);
            });
            createTable(studentaarr);
        })
    let col = [];
    let tableheaders = [];
    function createTable(arr) {

        for (let i = 0; i < arr.length; i++) {
            for (let key in arr[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        let headerRow = document.getElementById("rowheader");
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = `<th scope="col"><button type="button" id="headerbtn-${i}" class="btn">${col[i]}</button></th>`
            headerRow.appendChild(th);
        }
        addContent(arr);
        attachClickHandlers(studentaarr, col);
    }
    function formData(obj) {
        return `<td>${obj.name}</td>
<td>${obj.class}</td>
<td>${obj.section}</td>
<td>${obj.sub1}</td>
<td>${obj.sub2}</td>
<td>${obj.sub3}</td>`
    }

    function addContent(arr) {
        let tb = document.getElementById("tablebody");
        tb.innerHTML = '';
        for (var i = 0; i < arr.length; i++) {
            let obj = arr[i];
            let tr = document.createElement("tr");
            tr.innerHTML = `<tr>${formData(obj)}</tr>`
            tb.appendChild(tr);

        }
    }
    function attachClickHandlers(arr, col) {
        col.forEach((temp, i) => {
            const element = document.getElementById("headerbtn-" + i);
            element.addEventListener("click", () => { 
                changeOrder(arr, i) 
            });
        })


    }
    let count=0;
    function changeOrder(arr, i) {
        count++;
        console.log("Inside click button" + i+" "+count);
    const ascArray = arr.slice().sort((a,b) => {
            if (a[Object.keys(arr[0])[i]] < b[Object.keys(arr[0])[i]]) { return -1; }
            else if (a[Object.keys(arr[0])[i]] > b[Object.keys(arr[0])[i]]) { return 1; }
            else { return 0; }
        });
        // console.log(Object.keys(arr[0])[i]);
       if(count === 1){
        addContent(ascArray);
       }
       else if(count === 2){
        addContent(ascArray.reverse());
       }
       else if (count === 3){
        addContent(arr);
        count =0;
       }
    }

}

)