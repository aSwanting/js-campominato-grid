
function generateGrid(gridSize) {

    const gridWrapper = document.getElementById("grid-wrapper")
    gridWrapper.innerHTML = ""

    for (i = 0; i < gridSize; i++) {
        const box = document.createElement("div")
        gridWrapper.append(box)
        box.className = "tile"
        box.innerHTML = i + 1
    }
}

function cliccableTiles() {

    const tiles = document.querySelectorAll(".tile")

    tiles.forEach(function (tile, i) {
        tile.addEventListener("click", function () {
            tile.classList.toggle("selected")
            console.log(i + 1)
        })
    })

}

document.getElementById("play-button").addEventListener("click", function () {

    generateGrid(100)
    cliccableTiles()

})

