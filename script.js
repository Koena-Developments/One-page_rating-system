import axios from 'axios';
const form = document.getElementById("feedback-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const rating = document.querySelector("input[name='rating']:checked").value;
  
  // Import the axios library


  axios.post("https://formspree.io/f/xjvdkazr", { name, comment, rating })
    .then(res => {
      if (res.status === 200) {
        alert("Thank you for your feedback!");
        form.reset();
      } else {
        alert("An error occurred. Please try again later.");
      }
    })
    .catch(err => {
      console.error(err);
      alert("An error occurred. Please try again later.");
    });
});
