const bikes = document.querySelectorAll('.bike')
 
bikes.forEach(bike => {
    bike.addEventListener('click', () => {
        removeActiveClasses()
        bike.classList.add('active')
    })
})

function removeActiveClasses() {
    bikes.forEach(bike => {
        bike.classList.remove('active')
    })
}