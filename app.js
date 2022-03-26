const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const siccer = document.getElementById('sicerr')

const computer = document.getElementById('computerfight')
const you = document.getElementById('youfight') 

const imgComputer = document.createElement('img')
const imgYou = document.createElement('img')

rock.addEventListener('click', (e) => {
    const imgSrc = e.target.attributes.src.nodeValue
    imgYou.setAttribute('src', imgSrc)
    imgYou.setAttribute('alt', ' ')
    imgYou.setAttribute('srcset', ' ') 
    you.append(imgYou)   
    computerpick()
})

paper.addEventListener('click', (e) => {
    const imgSrc = e.target.attributes.src.nodeValue
    imgYou.setAttribute('src', imgSrc)
    imgYou.setAttribute('alt', ' ')
    imgYou.setAttribute('srcset', ' ') 
    you.append(imgYou)   
    computerpick()
})

siccer.addEventListener('click', (e) => {
    const imgSrc = e.target.attributes.src.nodeValue
    imgYou.setAttribute('src', imgSrc)
    imgYou.setAttribute('alt', ' ')
    imgYou.setAttribute('srcset', ' ') 
    you.append(imgYou)   
    computerpick()
})

const arrImg = ["./rock.png","./hand.png","./siccer.png"]

function computerpick() {
    const random = Math.floor(Math.random() * 3)
    imgComputer.setAttribute('src', arrImg[random])
    imgComputer.setAttribute('alt', ' ')
    imgComputer.setAttribute('srcset', ' ')
    computer.append(imgComputer)
}