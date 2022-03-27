const fortuneBtn = document.querySelector('#fortuneButton')
const studentContainer = document.querySelector('#student-ct');

const renderStudents = (data) => {
    studentContainer.innerHTML = ``;
    data.forEach((s) => {
      let nameHeading = document.createElement("h3");
      let xbtn = document.createElement("p");
      xbtn.textContent = "x";
      xbtn.addEventListener("click", handleDelete);
      nameHeading.textContent = s.name;
      nameHeading.value = s.id;
      nameHeading.appendChild(xbtn);
      studentContainer.appendChild(nameHeading);
    });
  };

const getFortune = () => {
    axios.get(`http://localhost:4000/api/fortune`).then(res => alert(res.data)).catch(err => console.log(err))

};

fortuneBtn.addEventListener('click', getFortune)

const allStudents = () => {
    axios
      .get(`http://localhost:4000/api/students`)
      .then((res) => {
        console.log(res.data);
        renderStudents(res.data);
      })
      .catch((err) => console.log(err));
  };
  
  window.addEventListener("DOMContentLoaded", allStudents);
  
  let userInput = document.querySelector("#std-input");
  let submitBtn = document.querySelector("#submit-btn");
  
  const addNewStudent = () => {
    let studentName = userInput.value;
    console.log(studentName);
    axios
      .post(`http://localhost:4000/api/students`, { studentName })
      .then((res) => {
        console.log(res.data);
  
        renderStudents(res.data);
      })
      .catch((err) => console.log(err));
  
  };
  
  const handleDelete = (event) => {
    const id = event.target.value;
    axios.delete(`http://localhost:4000/api/students/${id}`).then((res) => {
      console.log(res.data);
      renderStudents(res.data);
    });
  };
  
  submitBtn.addEventListener("click", addNewStudent);