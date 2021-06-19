window.addEventListener("load", ()=>{

  const nav = document.querySelector(".nav");
  const navBtn = document.querySelector(".nav-btn");

  navBtn.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open")
    if(nav.classList.contains("nav-open")){
      navBtn.src = "./../images/icon-close.svg"
    }else{
      navBtn.src = "./../images/icon-menu.svg"

    }
  })
  
})
