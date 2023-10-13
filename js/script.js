

const appMain = document.getElementById("app-main")





for (i = 0; i < 100; i++) {

    const box = document.createElement("div")
    appMain.append(box)
    box.className = "box"
    box.innerHTML = i + 1
}