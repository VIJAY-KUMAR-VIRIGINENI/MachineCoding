function handleToggle(element) {
  let content = element.nextElementSibling;
  let button = element.querySelector("button");
  if (content.style.display == "block") {
    content.style.display = "none";
  } else {
    
    document.querySelectorAll(".toggle")
    content.style.display = "block";

  }
}
