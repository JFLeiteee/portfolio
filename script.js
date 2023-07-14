const githubButton = document.getElementById("github")
const linkedinButton = document.getElementById("linkedin")
const curriculumButton = document.getElementById("curriculum")
const closeButton = document.getElementById("close")

const modal = document.getElementsByClassName("modal")[0]
const content = document.getElementsByClassName("content")[0]

let isModalOpen = false;


githubButton.addEventListener("click", () => {
    window.open().location.href = 'https://github.com/JFLeiteee'
});

linkedinButton.addEventListener("click", () => {
    window.open().location.href = 'https://www.linkedin.com/in/josé-silva-29b329249/'
});

curriculumButton.addEventListener("click", function() {
    isModalOpen = !isModalOpen
    
    if(isModalOpen == true) {
        modal.classList.remove("none");
        modal.classList.add("block");
        content.classList.add("blur");
    }
})

closeButton.addEventListener("click", function() {
    isModalOpen = false

    modal.classList.remove("block");
    modal.classList.add("none");
    content.classList.remove("blur");
})