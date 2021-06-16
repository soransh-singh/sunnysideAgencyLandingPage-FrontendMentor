window.addEventListener("load", ()=>{
  console.log("window loaded");

  const nav = document.querySelector(".nav");
  const navBtn = document.querySelector(".nav-btn");
  console.log(nav, navBtn);
  navBtn.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open")
  })
})
