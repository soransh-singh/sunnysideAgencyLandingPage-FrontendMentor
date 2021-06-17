window.addEventListener("load", ()=>{
  console.log("window loaded");

  const nav = document.querySelector(".nav");
  const navBtn = document.querySelector(".nav-btn");
  console.log(nav, navBtn);
  navBtn.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open")
    if(nav.classList.contains("nav-open")){
      console.log("yolo");
      navBtn.src = "./images/icon-close.svg"
    }else{
      navBtn.src = "./images/icon-menu.svg"
    }
  })
})
