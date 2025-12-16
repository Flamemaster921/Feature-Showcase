//this is where the user types the search
const searchBox = document.querySelector(".search-box");
//this is where the projects are stored
const searchArea = document.getElementById("searchArea");
//this is selecting all of the projects to compare to the input
const projects = searchArea.querySelectorAll(".project-display");

searchBox.addEventListener("input", () => {
    //takes care of capitalization and extra spaces
    const searchText = searchBox.value.toLowerCase().trim();

    projects.forEach(project => {
    // searcehs only the <b> text inside each project
    const title = project.querySelector("b").textContent.toLowerCase();
    //sees if the title includes the search text adn hides what doesn't match
    project.style.display = title.includes(searchText)
      ? "block"
      : "none";
  });
});