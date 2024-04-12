// Il est important de noter que ces fonctions fonctionnent avec les propriétés CSS personnalisées 
// (également appelées variables CSS) qui ont été déclarées dans le CSS 
// avec la syntaxe --nom-de-la-variable.

export function getCustomprop(elem,prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}
 export function setCustomprop(elem,prop,value){
    elem.style.setProperty(prop, value)

}

export function incrementCustomprop(elem,prop,inc){
    setCustomprop(elem, prop,getCustomprop(elem, prop) + inc)
}