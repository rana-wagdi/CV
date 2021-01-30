
const toggleButton=document.querySelector('.toggle-button')
const navLinks = document.getElementsByClassName("navLink");
const links = document.querySelectorAll('.navbarLink');
const header = document.querySelector('.navbar')

links.forEach((item) =>{
    item.addEventListener("click", ()=>{
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
})
//////////
$(document).ready(function(){
    $('.toggle-button').click(function(){
        $(".navLink").toggleClass("active");
    })
    $(".navbarItem").click(function () {
      $(this).siblings().removeClass("active");
      $(this).closes(".navbarItem").removeClass("active");
    });
})

//toggleButton.addEventListener('click',()=> {
  //  navLinks.classList.toggle('active')
//}) 
// //
window.addEventListener("scroll", (event) => {
  let navigationLinks = document.querySelectorAll("nav ul li a");
  let fromTop = window.scrollY;

  navigationLinks.forEach((link) => {
    if (link.hash != "" && link.hash != "#") {
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

function activeLinkControl() {
    $("nav .navbarItem a") .click(function(){
        //remove active class from any of navbarItem
        $(".navbarItem").removeClass('active');
        //add active class to clicked item but at li not the anchor
        $(this).closes(".navbarItem").addClass('active');
    });
}
// //active navigation on scroll
// for (const link of links) {
//     link.addEventListener("click", clickHandler);
//   }

//   function clickHandler(e) {
//     e.preventDefault();
//     const href = this.getAttribute("data-link");
//     const offsetTop = document.querySelector(data-link).offsetTop;

//     scroll({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   }
  //

    


