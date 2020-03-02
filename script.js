
//---1-et-1-bis----------------------------------------------//
let footerElt = document.querySelector('footer');

let i = 0
const click = () => {
  console.log('clique')
};

footerElt.addEventListener('click',click);
// 1-bis
function clicknumber (){
    i=0, i++
    footer.addEventListener('click', function(){
        console.log(`clique numéro ${i}`)
        i++
    })
}
clicknumber()

//---3----------------------------------------------//

let navbarBurger = document.querySelector('.navbar-toggler')
let navHead = document.querySelector('#navbarHeader')

navbarBurger.addEventListener('click', function(){
    navHead.classList.toggle('collapse')
})

//---4----------------------------------------------//

let card = document.querySelector('.col-md-4')
let editBtn = card.querySelector('.btn-outline-secondary')

editBtn.addEventListener('click', function(){
    card.style.color='red'
})

//---5----------------------------------------------//

let cards = document.querySelectorAll('.col-md-4')
let card2 = cards[1]

card2.querySelector('.btn-outline-secondary').addEventListener('click', function(){
    if (card2.style.color === 'green'){
        card2.style.color='black'
    }else {
        card2.style.color='green'
    }
})

//---6----------------------------------------------//

let boostrapCdn = document.getElementsByTagName('link')[0]
let navbar = document.querySelector('.navbar')
navbar.addEventListener('dblclick', function(){
    if (boostrapCdn.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
        boostrapCdn.href = ""
    } else {
        boostrapCdn.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    }
})
