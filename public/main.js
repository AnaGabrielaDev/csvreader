function sendCsv(event) {
    event.preventDefault();
    const form = event.target;
    const file = form[0];

    if(file.files.length == 0) return 

    const formData = new FormData();
    formData.append("file", file.files[0]);

    const urlToSendCsv = "/student/import";

    axios.post(urlToSendCsv, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => location.reload())
    .catch(error => console.log(error));
}

function getStudents() {
    axios.get("/student")
    .then(response => { 
        console.log(response)

        const data = response.data;

        const tableBody = document.getElementById("renderResults");
        for (let i of data) {
            let item = document.createElement("tr");
            
            const link = document.createElement("a");
            var linkText = document.createTextNode(`${i.name}`);
            link.appendChild(linkText);

            link.title = "Click here to show details";
            link.target = "_blank";
            link.href = `${window.location.href}student/${i.id}`;

            const cityNameCell = document.createElement("td");
            cityNameCell.innerHTML = i.cityName

            const schoolNameCell = document.createElement("td");
            schoolNameCell.innerHTML = i.schoolName

            const classNameCell = document.createElement("td");
            classNameCell.innerHTML = i.className

            const gradeCell = document.createElement("td");
            gradeCell.innerHTML = i.grade
            
            item.append(link, cityNameCell, schoolNameCell, classNameCell, gradeCell);
            tableBody.append(item);
        }
    })
}

async function deleteAllStudents() {
    await axios.delete("/student")
    location.reload();
}

getStudents();
