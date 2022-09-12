function sendCsv (event) {
  event.preventDefault()
  const form = event.target
  const file = form[0]

  if (file.files.length == 0) return

  const formData = new FormData()
  formData.append('file', file.files[0])

  const urlToSendCsv = '/student/import'

  axios.post(urlToSendCsv, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => location.reload())
    .catch(error => console.log(error))
}

function getStudents () {
  axios.get('/student')
    .then(response => {
      console.log(response)

      const data = response.data

      const tableBody = document.getElementById('renderResults')
      for (const i of data) {
        const item = document.createElement('tr')

        const link = document.createElement('a')
        const linkText = document.createTextNode(`${i.name}`)
        link.appendChild(linkText)

        link.title = 'Click here to show details'
        link.target = '_blank'
        link.href = `${window.location.href}student/${i.id}`

        const cityNameCell = document.createElement('td')
        cityNameCell.innerHTML = i.cityName

        const schoolNameCell = document.createElement('td')
        schoolNameCell.innerHTML = i.schoolName

        const classNameCell = document.createElement('td')
        classNameCell.innerHTML = i.className

        const gradeCell = document.createElement('td')
        gradeCell.innerHTML = i.grade

        const saveRate = document.createElement('a')
        saveRate.href = `/result/createResult/${i.id}`
        saveRate.innerHTML = "Criar nota"

        const rateCell = document.createElement('td')
        if(i.Result[0]?.rate) {
            rateCell.innerHTML = i.Result[0]?.rate
        }else {
            rateCell.appendChild(saveRate);
        }

        item.append(link, cityNameCell, schoolNameCell, classNameCell, gradeCell, rateCell)
        tableBody.append(item)
      }
    })
}
getStudents()

async function deleteAllStudents () {
  await axios.delete('/student')
  location.reload()
}

