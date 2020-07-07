
function copy() {
  var copyText = document.querySelectorAll("#CopyPromoCode")
  copyText.select()
  document.execCommand("Copy")
}

document.querySelector(".PromoTextField").addEventListener("click", copy)


function SeeAllButton(){
  for (let promo of document.querySelectorAll('.ThirdWrapper-Promo')) promo.style.cssText = "display: flex;"
  for (let gift of document.querySelectorAll('.ThirdWrapper-gift')) gift.style.display = 'flex'
  for (let plan of document.querySelectorAll('.ThirdWrapper-BestPlan')) plan.style.display = 'flex'

}
function PressPromoCode(){
  for (let promo of document.querySelectorAll('.ThirdWrapper-Promo')) promo.style.display = 'flex'
  for (let gift of document.querySelectorAll('.ThirdWrapper-gift')) gift.style.display = "none"
  for (let plan of document.querySelectorAll('.ThirdWrapper-BestPlan')) plan.style.display = 'none'
}
function PressGiftButton(){
  for (let plan of document.querySelectorAll('.ThirdWrapper-BestPlan')) plan.style.display = 'none'
  for (let promo of document.querySelectorAll('.ThirdWrapper-Promo')) promo.style.display = 'none'
  for (let gift of document.querySelectorAll('.ThirdWrapper-gift')) gift.style.display = 'flex'
}
function PressBestPlan(){
  for (let gift of document.querySelectorAll('.ThirdWrapper-gift')) gift.style.display = 'none'
  for (let promo of document.querySelectorAll('.ThirdWrapper-Promo')) promo.style.display = 'none'
  for (let plan of document.querySelectorAll('.ThirdWrapper-BestPlan')) plan.style.display = 'flex'
}


document.querySelector("#PromoCodeButton").addEventListener("click", PressPromoCode)
document.querySelector("#GiftButton").addEventListener("click", PressGiftButton)
document.querySelector("#BestPlanButton").addEventListener("click", PressBestPlan)
document.querySelector("#SeeAllButton").addEventListener("click", SeeAllButton)
