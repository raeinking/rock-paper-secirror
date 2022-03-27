const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const siccer = document.getElementById('sicerr')

const computer = document.getElementById('computerfight')
const you = document.getElementById('youfight') 

const imgComputer = document.createElement('img')
const imgYou = document.createElement('img')

let computerspick = ''
let youpick = ''

let ElComputer = document.getElementById('computerScore')
let Elyou = document.getElementById('youScore')

let youScore = 0 ;
let computerScore = 0 ;

rock.addEventListener('click', (e) => {
    const imgSrc = e.target.attributes.src.nodeValue
    imgYou.setAttribute('src', imgSrc)
    imgYou.setAttribute('alt', ' ')
    imgYou.setAttribute('srcset', ' ') 
    you.append(imgYou)   
    computerpick()
    if (computerspick == './siccer.png') {
        youScore += 1
        Elyou.textContent = youScore
    }
    if (computerspick == './hand.png') {
        computerScore += 1
        ElComputer.textContent = computerScore
    }
})

paper.addEventListener('click', (e) => {
    const imgSrc = e.target.attributes.src.nodeValue
    imgYou.setAttribute('src', imgSrc)
    imgYou.setAttribute('alt', ' ')
    imgYou.setAttribute('srcset', ' ') 
    you.append(imgYou)   
    computerpick()
    if (computerspick == './rock.png') {
        youScore += 1
        Elyou.textContent = youScore
    }
    if (computerspick == './siccer.png') {
        computerScore += 1
        ElComputer.textContent = computerScore
    }
})

siccer.addEventListener('click', (e) => {
    const imgSrc = e.target.attributes.src.nodeValue
    imgYou.setAttribute('src', imgSrc)
    imgYou.setAttribute('alt', ' ')
    imgYou.setAttribute('srcset', ' ') 
    you.append(imgYou)   
    computerpick()
    if (computerspick == './hand.png') {
        youScore += 1
        Elyou.textContent = youScore
    }
    if (computerspick == './rock.png') {
        computerScore += 1
        ElComputer.textContent = computerScore
    }
})

const arrImg = ["./rock.png","./hand.png","./siccer.png"]

function computerpick() {
    const random = Math.floor(Math.random() * 3)
    imgComputer.setAttribute('src', arrImg[random])
    imgComputer.setAttribute('alt', ' ')
    imgComputer.setAttribute('srcset', ' ')
    computer.append(imgComputer)
    computerspick = '';
    computerspick += arrImg[random]
}