import { getCustomprop, incrementCustomprop, setCustomprop } from "./Customfun.js";


// Ce code importe les fonctions getCustomprop, incrementCustomprop, 
// et setCustomprop depuis le module Customfun.js.

const SPEED =0.05
const groundEle=document.querySelectorAll('[data-ground]');


//Cette ligne déclare une constante SPEED avec une valeur de 0.05. 
// Elle utilise également document.querySelectorAll pour sélectionner 
// tous les éléments du DOM qui ont un attribut data-ground et les stocke dans la variable groundEle.

  export function SetUpGround(){
     setCustomprop(groundEle[0],"--left",0)
     setCustomprop(groundEle[1],"--left",300)
  } 


  // Cette fonction SetUpGround est exportée pour être utilisée ailleurs. 
  // Elle utilise les fonctions setCustomprop pour définir les valeurs des propriétés 
  // CSS --left des deux premiers éléments dans groundEle.

export function updateGround(delta,speedScale){
 groundEle.forEach(ground=>{
    incrementCustomprop(ground,"--left",delta*speedScale*SPEED*-1);
    if (getCustomprop(ground, "--left") <= -300) {
      incrementCustomprop(ground, "--left", 600)
    }
   })


}