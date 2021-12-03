const target = document.querySelectorAll("[data-topbar]");
const animateclass = "fixado";
let lastScrollTop = 0
let disabletop = 0 

function fixaTopBar(){
    if(lastScrollTop > window.pageYOffset){
        target.forEach(function(element){
            element.classList.add(animateclass)
            disabletop = lastScrollTop
            
        })
        if(disabletop > window.pageYOffset){
            lastScrollTop = window.pageYOffset
        }
    } else if (lastScrollTop < window.pageYOffset){
        target.forEach(function(element){
            element.classList.remove(animateclass)
            lastScrollTop = window.pageYOffset
        })
    }
}
window.addEventListener('scroll', function(){
    fixaTopBar()
})