console.log('Funguju!')

const karticky = document.querySelectorAll('.karticka')

karticky.forEach ((prvek) => {
    prvek.addEventListener('click', () => {
        prvek.classList.toggle('otocena')
    } )
})


