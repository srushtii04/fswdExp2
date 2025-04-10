// Selecting the container where new elements will be added
let container = document.getElementById("container");

// ADD a new element
document.getElementById("addBtn").addEventListener("click", function () {
    let newPara = document.createElement("p"); // Create <p> element
    newPara.innerText = "This is a newly added paragraph."; // Set text
    newPara.id = "newPara"; // Assign ID
    newPara.style.color = "green"; // Add some styling
    container.appendChild(newPara); // Append to container
});

// REMOVE an element
document.getElementById("removeBtn").addEventListener("click", function () {
    let paraToRemove = document.getElementById("newPara");
    if (paraToRemove) {
        container.removeChild(paraToRemove); // Remove from container
    } else {
        alert("No new paragraph to remove!");
    }
});

// REPLACE an element
document.getElementById("replaceBtn").addEventListener("click", function () {
    let originalPara = document.getElementById("originalPara");
    if (originalPara) {
        let newHeading = document.createElement("h3"); // Create new element
        newHeading.innerText = "This is a replaced heading!";
        newHeading.style.color = "red";
        container.replaceChild(newHeading, originalPara); // Replace original <p> with <h3>
    } else {
        alert("Original paragraph already replaced!");
    }
});
