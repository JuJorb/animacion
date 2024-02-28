var fondoMover = document.querySelector (".fondo")
var ruedaMover = document.querySelector (".rueda")
var ruedaDosMover = document.querySelector (".ruedaDos")
var luzMover = document.querySelector (".luce1")
var polvoMover = document.querySelector (".polvo")

fondoMover.addEventListener ("click", animaciones)

function animaciones (){
   fondoMover.classList.add('fondo-Mover')
    ruedaMover.classList.add('rueda-mover')
    ruedaDosMover.classList.add('ruedaDos-mover')
    luzMover.classList.add('luce1-mover')
    polvoMover.classList.add('polvo-mover')
}