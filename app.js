const header = document.querySelectorAll(".header") ; 
header.forEach((e) => {
     if(e.children[1].classList.contains("header__icon")){
          e.children[1].previousElementSibling.classList.add("font-semibold") ; 
          e.children[1].classList.add("deactive") ; 
          e.children[1].classList.add("font-semibold") ; 
          e.parentElement.classList.add("h-10") ; 
          e.parentElement.classList.add("overflow-y-hidden") ; 
          e.classList.add("px-4") ; 
          e.children[1].classList.remove("text-2xl") ; 
          e.children[1].style=`line-height : 2.5rem !important`
          e.classList.add("hover__header") ; 
          e.nextElementSibling.classList.add("ml-6") ; 
          if(e.children[1].classList.contains("deactive")){
               e.children[1].innerHTML = "+" ; 
               e.children[1].classList.add("text-2xl") ; 
          }
          e.addEventListener("click" , (ab) => {
               e.children[1].innerHTML = "-" ; 
               checker(e.children[1]); 
          })
     }
})
function checker(e){
     if(e.classList.contains("deactive")){
          e.innerHTML = "-" ; 
          e.classList.remove("deactive") ; 
          e.classList.add("active") ;           
          e.classList.add("text-4xl") ; 
          e.classList.remove("text-2xl") ; 
          e.parentElement.parentElement.classList.remove("h-10")
          e.parentElement.classList.remove("hover__header") ;
     }
     else if(e.classList.contains("active")){
          e.innerHTML = "+" ; 
          e.classList.remove("active") ; 
          e.classList.add("deactive") ; 
          e.classList.remove("text-4xl") ; 
          e.classList.add("text-2xl") ; 
          e.parentElement.parentElement.classList.add("h-10")
          e.parentElement.classList.add("hover__header") ;
     }
}
const range = document.querySelector(".range") ; 
const rangeValueHtml =  document.querySelector(".rangeValue") ; 
let rangeValue = 10; 
range.value = rangeValue ; 
rangeValueHtml.innerHTML =`${rangeValue} %` 
range.addEventListener("input" , (e) => {
     rangeValue =  e.target.value ; 
     Ranger.style = `background : rgba(0, 0, 0, 0) linear-gradient(to right, #00ffe7 0%, #25db86 calc(${rangeValue}%), rgb(236, 236, 236) calc(${rangeValue}%), rgb(236, 236, 236) 100%) repeat scroll 0% 0%` ;
     rangeValueHtml.innerHTML = `${rangeValue} %` ; 
})
const Ranger = document.querySelector("#large-range") ; 
Ranger.style = `background : rgba(0, 0, 0, 0) linear-gradient(to right, #00ffe7 0%, #25db86 calc(${rangeValue}%), rgb(236, 236, 236) calc(${rangeValue}%), rgb(236, 236, 236) 100%) repeat scroll 0% 0%` ;
const efficencyRange = document.querySelectorAll(".efficency__range") ; 
efficencyRange.forEach((e) => {
     e.addEventListener("click" , (event) => {
          let efficencyRangeValue = Number(event.target.attributes.value.value) ; 
          Ranger.style = `background : rgba(0, 0, 0, 0) linear-gradient(to right, #00ffe7 0%, #25db86 calc(${efficencyRangeValue}%), rgb(236, 236, 236) calc(${efficencyRangeValue}%), rgb(236, 236, 236) 100%) repeat scroll 0% 0%` ;
          range.value = efficencyRangeValue ; 
          rangeValueHtml.innerHTML = `${efficencyRangeValue} %`; 
     })
})





const LongPosition = document.querySelector(".LongPosition") ; 
const ShortPostion = document.querySelector(".ShortPostion") ; 
ShortPostion.addEventListener("click" , (e) => {
     LongPosition.classList.remove("ActiveLongPosition") ;
     ShortPostion.classList.add("ActiveShortPostion") ; 
})
LongPosition.addEventListener("click" , (e) => {
     ShortPostion.classList.remove("ActiveShortPostion") ; 
     LongPosition.classList.add("ActiveLongPosition") ; 
})
const win = document.querySelector(".win") ; 
const lose = document.querySelector(".lose") ; 
win.addEventListener("click" , (e) => {
     win.classList.add("ActiveLongPosition") ; 
     lose.classList.remove("ActiveShortPostion") ; 
})
lose.addEventListener("click" , (e) => {
     lose.classList.add("ActiveShortPostion") ; 
     win.classList.remove("ActiveLongPosition") ; 
})
const input = document.querySelectorAll("input") ; 
input.forEach((e) => {
     e.classList.add("font-semibold") ; 
})
const label = document.querySelectorAll("label") ; 
label.forEach((e) => {
     e.classList.add("font-semibold") ; 
})
const pairLabel = document.querySelectorAll(".pairLabel") ; 
pairLabel.forEach((r) => {
     r.addEventListener("click" , (e) => {
          pairLabel.forEach((ee) => {
               ee.classList.remove("active__input") ; 
          })
          r.classList.add("active__input") ; 
     })
})