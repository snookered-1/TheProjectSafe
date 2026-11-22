const addproject = document.getElementById("addproject");
const projectcontainer = document.getElementById("projectcontainer");
const container = document.getElementById("container");



addproject.addEventListener("click", () => {
    const newProject = document.createElement("div");
    newProject.id = "projectcontainer";
    container.appendChild(newProject);
});