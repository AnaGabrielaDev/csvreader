async function registerResult() {
  const studentId = window.location.href.split('/').at(-1);

  const rate = document.getElementById("rate").value;

  const {status} = await axios.post('/result', {
    rate,
    studentId
  })

  if(status === 200) return window.location.replace('/')
}