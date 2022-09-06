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
        renderResults.textContent = JSON.stringify(data);
        
    })
}

async function deleteAllStudents() {
    await axios.delete("/student")
    location.reload();
}

getStudents();
