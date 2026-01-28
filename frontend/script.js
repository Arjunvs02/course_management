const API = "http://localhost:5000";

function addCourse() {
  fetch(API + "/courses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("course").value
    })
  }).then(loadCourses);
}

function loadCourses() {
  fetch(API + "/courses")
    .then(res => res.json())
    .then(data => {
      document.getElementById("courseList").innerHTML =
        data.map(c => `<li>${c.name}</li>`).join("");
    });
}

loadCourses();
