const div = document.createElement('div')
const body = document.querySelector('body')
const direcciones = ['Up', 'Down', 'Left', 'Rigth']

for (const botones of direcciones) {
    const boton = document.createElement('button')
    boton.setAttribute('id', `${botones}`)
    body.innerHTML += `<button id="${botones}">
    ${botones}</button>`;
}

body.appendChild(div)
div.style.backgroundColor = 'green'
div.style.width = '100px'
div.style.height = '100px'
div.style.position ='absolute'
div.style.top = '100px'
div.style.left = '100px'

for(const botones of direcciones){
    const boton = document.getElementById(`${botones}`)
    boton.addEventListener('click',()=>{
        if(botones === direcciones[0]){
            div.style.top = parseInt(div.style.top) -1 +'px'
        }
        else if(botones === direcciones[1]){
            div.style.top = parseInt(div.style.top) +1 +'px'
        }
        else if(botones === direcciones[2]){
            div.style.left = parseInt(div.style.left) -1 +'px'
        }
        else if(botones === direcciones[3]){
            div.style.left = parseInt(div.style.left) +1 +'px'
        }
    })
}