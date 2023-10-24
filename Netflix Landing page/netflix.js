// Debounce function implementation
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}




let accordions = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });




  accordions[i].addEventListener(
    "touchstart",
    debounce(function () {
      if (this.childNodes[1].classList.contains("fa-plus")) {
        this.childNodes[1].classList.remove("fa-plus");
        this.childNodes[1].classList.add("fa-times");
      } else {
        this.childNodes[1].classList.remove("fa-times");
        this.childNodes[1].classList.add("fa-plus");
      }
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }, 300)
  );
}
