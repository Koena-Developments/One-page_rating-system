import axios from 'axios';
const form = document.getElementById("feedback-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const rating = document.querySelector("input[name='rating']:checked").value;
    let ratingEmoji;
    if (rating === "1") {
        ratingEmoji = "🙁";
    } else if (rating === "2") {
        ratingEmoji = "😊";
    } else if (rating === "3") {
        ratingEmoji = "😁";
    } else if (rating === "4") {
        ratingEmoji = "😁";
    } else if (rating === "5") {
        ratingEmoji = "😄";
    }
    document.querySelector("input[name='rating']:checked").nextSibling.innerHTML = ratingEmoji;

    // Use the axios library to post the form data
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
