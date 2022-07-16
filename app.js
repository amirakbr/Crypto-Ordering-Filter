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
          e.classList.add("transition-all") ; 
          e.classList.add("duration-300") ; 
          e.classList.add("hover:bg-gray-300") ; 
          e.classList.add("hover:rounded-xl") ; 
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
const pairLabel = document.querySelectorAll(".pairLabel") ; 
pairLabel.forEach((r) => {
     r.classList += ` flex items-center relative overflow-hidden before:w-6 before:h-6 before:rounded before:mr-4 before:table before:content-[''] before:clear-both before:mt-0.5 before:bg-lightGray
     after:flex after:clear-both after:absolute after:w-6 after:h-6 after:content-tick after:font-fontawsome after:font-black after:bg-vaporwaveBlue after:text-white after:left-0 after:top-0 after:flex-row after:items-center after:justify-center after:rounded
     after:translate-y-[100%] after:mt-0.5 after:transition-all`
     r.addEventListener("click" , (e) => {
          pairLabel.forEach((ee) => {
               ee.classList.add("after:translate-y-[100%]") ; 
          })
          r.classList.remove("after:translate-y-[100%]") ; 
     })
})
const Size = document.querySelectorAll(".Size") ; 
Size.forEach((r) => {
     r.classList += ` flex items-center relative overflow-hidden before:w-6 before:h-6 before:rounded before:mr-4 before:table before:content-[''] before:clear-both before:mt-0.5 before:bg-lightGray
     after:flex after:clear-both after:absolute after:w-6 after:h-6 after:content-tick after:font-fontawsome after:font-black after:bg-vaporwaveBlue after:text-white after:left-0 after:top-0 after:flex-row after:items-center after:justify-center after:rounded
     after:translate-y-[100%] after:mt-0.5 after:transition-all`
     r.addEventListener("click" , (e) => {
          r.classList.toggle("after:translate-y-[100%]") ; 
     })
})
const RLabel = document.querySelectorAll(".RLabel") ; 
RLabel.forEach((r) => {
     r.classList += ` flex items-center relative overflow-hidden before:w-6 before:h-6 before:rounded before:mr-4 before:table before:content-[''] before:clear-both before:mt-0.5 before:bg-lightGray
     after:flex after:clear-both after:absolute after:w-6 after:h-6 after:content-tick after:font-fontawsome after:font-black after:bg-vaporwaveBlue after:text-white after:left-0 after:top-0 after:flex-row after:items-center after:justify-center after:rounded
     after:translate-y-[100%] after:mt-0.5 after:transition-all`
     r.addEventListener("click" , (e) => {
          RLabel.forEach((ee) => {
               ee.classList.add("after:translate-y-[100%]") ; 
          })
          r.classList.remove("after:translate-y-[100%]") ; 
     })
})
const SetupLabel = document.querySelectorAll(".SetupLabel") ;
SetupLabel.forEach((r) => {
     r.classList += ` flex items-center relative overflow-hidden before:w-6 before:h-6 before:rounded before:mr-4 before:table before:content-[''] before:clear-both before:mt-0.5 before:bg-lightGray
     after:flex after:clear-both after:absolute after:w-6 after:h-6 after:content-tick after:font-fontawsome after:font-black after:bg-vaporwaveBlue after:text-white after:left-0 after:top-0 after:flex-row after:items-center after:justify-center after:rounded
     after:translate-y-[100%] after:mt-0.5 after:transition-all`
     r.addEventListener("click" , (e) => {
          r.classList.toggle("after:translate-y-[100%]") ; 
     })
})
function checker(e){
     if(e.classList.contains("deactive")){
          e.innerHTML = "-" ; 
          e.classList.remove("deactive") ; 
          e.classList.add("text-red") ;           
          e.classList.add("text-4xl") ; 
          e.classList.remove("text-2xl") ; 
          e.parentElement.parentElement.classList.remove("h-10")
          e.parentElement.classList.remove("hover:bg-gray-300") ; 
          e.parentElement.classList.remove("hover:rounded-xl") ; 
     }
     else if(e.classList.contains("text-red")){
          e.innerHTML = "+" ; 
          e.classList.remove("text-red") ; 
          e.classList.add("deactive") ; 
          e.classList.remove("text-4xl") ; 
          e.classList.add("text-2xl") ; 
          e.parentElement.parentElement.classList.add("h-10")
          e.parentElement.classList.add("hover:bg-gray-300") ; 
          e.parentElement.classList.add("hover:rounded-xl") ; 
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
LongPosition.classList += `transition-all duration-300 border-2 border-solid border-transparent py-2 px-3 before:content-long before:font-fontawsome before:font-black before:mr-2` ; 
const ShortPostion = document.querySelector(".ShortPostion") ; 
ShortPostion.classList += `transition-all duration-300 border-2 border-solid border-transparent py-2 px-3 before:content-short before:font-fontawsome before:font-black before:mr-2` ; 
ShortPostion.addEventListener("click" , (e) => {
     //LongPosition.classList.remove("d") ;
     ShortPostion.classList.add(`bg-lightRed`) ; 
     ShortPostion.classList.add(`text-red`) ; 
     ShortPostion.classList.remove("border-transparent") ; 
     ShortPostion.classList.add(`border-red`) ; 
     LongPosition.classList.remove(`bg-lightGreen`) ; 
     LongPosition.classList.remove(`text-green`) ; 
     LongPosition.classList.add("border-transparent") ; 
     LongPosition.classList.remove(`border-green`) ; 
})
LongPosition.addEventListener("click" , (e) => {
     //ShortPostion.classList.remove("ActiveShortPostion") ; 
     LongPosition.classList.add(`bg-lightGreen`) ; 
     LongPosition.classList.add(`text-green`) ; 
     LongPosition.classList.remove("border-transparent") ; 
     LongPosition.classList.add(`border-green`) ; 
     ShortPostion.classList.remove(`bg-lightRed`) ; 
     ShortPostion.classList.remove(`text-red`) ; 
     ShortPostion.classList.add("border-transparent") ; 
     ShortPostion.classList.remove(`border-red`) ; 
})
const win = document.querySelector(".win") ; 
const lose = document.querySelector(".lose") ; 
win.classList += `transition-all duration-300 border-2 border-solid py-2 px-3 before:content-long before:font-fontawsome before:font-black before:mr-2` ; 
lose.classList += `transition-all duration-300 border-2 border-solid py-2 px-3 before:content-short before:font-fontawsome before:font-black before:mr-2` ; 
win.addEventListener("click" , (e) => {
     win.classList.add(`bg-lightGreen`) ; 
     win.classList.add(`text-green`) ; 
     win.classList.remove("border-transparent") ; 
     win.classList.add(`border-green`) ; 
     lose.classList.remove(`bg-lightRed`) ; 
     lose.classList.remove(`text-red`) ; 
     lose.classList.add("border-transparent") ; 
     lose.classList.remove(`border-red`) ; 
})
lose.addEventListener("click" , (e) => {
     win.classList.remove(`bg-lightGreen`) ; 
     win.classList.remove(`text-green`) ; 
     win.classList.add("border-transparent") ; 
     win.classList.remove(`border-green`) ; 
     lose.classList.add(`bg-lightRed`) ; 
     lose.classList.add(`text-red`) ; 
     lose.classList.remove("border-transparent") ; 
     lose.classList.add(`border-red`) ; 
})
const input = document.querySelectorAll("input") ; 
input.forEach((e) => {
     e.classList.add("font-semibold") ; 
})
const label = document.querySelectorAll("label") ; 
label.forEach((e) => {
     e.classList.add("font-semibold") ; 
})
