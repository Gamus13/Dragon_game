import { getCustomprop, incrementCustomprop, setCustomprop } from "./Customfun.js"

const SPEED = 0.05
const CACTUS_INTERVAL_MIN = 500
const CACTUS_INTERVAL_MAX = 2000
const worldElement = document.querySelector("[data-world]")
const dinoElement=document.querySelector("[data-dino]")
let nextCactusTim

export function updateCactus(delta,speedScale){
    document.querySelectorAll("[data-cactus]").forEach(cactus=>{
        incrementCustomprop(cactus,"--left",delta*speedScale*SPEED*-1)
        if(getCustomprop(cactus,"--left")<=-100){
          cactus.remove()
        }
    })
    if(nextCactusTim<=0){
      createCactus()
 nextCactusTim= randomNumberBetween(CACTUS_INTERVAL_MIN,CACTUS_INTERVAL_MAX)/speedScale
    }
  
nextCactusTim-=delta

}

// la fonction createCactus() crée un élément <img> représentant un cactus,
//  lui attribue des attributs, définit sa source d'image,
//  lui ajoute une classe CSS, définit une propriété CSS 
//  personnalisée et l'ajoute à un élément spécifié dans le document HTML.

function createCactus() {
    const cactus = document.createElement("img")
    cactus.dataset.cactus = true
    cactus.src = "imgs/cactus.png"
    cactus.classList.add("cactus")
    setCustomprop(cactus, "--left", 100)
    worldElement.append(cactus)
  }
  
  // la fonction setupCactus() réinitialise le minutage pour le prochain cactus (éventuellement en fonction 
  //   de la variable CACTUS_INTERVAL_MIN) 
  //   et supprime tous les éléments du document qui ont l'attribut data-cactus.


export function setupCactus(){
  nextCactusTim=CACTUS_INTERVAL_MIN
  document.querySelectorAll("[data-cactus]").forEach(cactus => {
    cactus.remove()
  })
}

export function GetCactusRects(){
   return [...document.querySelectorAll("[data-cactus]")].map(cactus=>{
    return cactus.getBoundingClientRect()
   })
}

export function getDinoRects(){
    return dinoElement.getBoundingClientRect()
}
  

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  export function setDinoLose(){
   dinoElement.src= "imgs/dino-lose.png"

  }