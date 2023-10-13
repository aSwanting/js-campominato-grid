
function generateGrid() {

    const gridWrapper = document.getElementById("grid-wrapper")
    gridWrapper.innerHTML = ""

    for (i = 0; i < 100; i++) {
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
            tile.style.backgroundColor = "rgba(66, 45, 200, 0.5)"
            console.log(i + 1)
        })
    })

}

document.getElementById("play-button").addEventListener("click", function () {

    generateGrid()
    cliccableTiles()

})

