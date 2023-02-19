const animal_buttons = document.getElementsByName("animal-button")
const text = document.querySelector ("#text")
const photo = document.querySelector ("#photo")

function change_animal(animal) {
text.innerHTML = "Here's a picture of a " + animal + "."
photo.src = animal + ".jpeg"
}

animal_buttons.forEach(button => {
button.addEventListener("change", event => {
change_animal(button.id)
})
}) 