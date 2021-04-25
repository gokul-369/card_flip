const cards = document.querySelectorAll(".card");
var flipstate = false
var f,s
cards.forEach((c) => {
     c.addEventListener("click",flip)
})
function flip() {
    this.classList.add("flip")
    if (!flipstate) {
        flipstate=true
        f = this
    }
    else {
        s = this
        check()
    }
}
var check = () => {
    f.dataset.image===s.dataset.image ? success():fail()
}
var success = () => {
    f.removeEventListener("click", flip)
    s.removeEventListener("click", flip)
    reset()
}
var fail = () => {
    setTimeout(() => {
        f.classList.remove("flip")
        s.classList.remove("flip")
        reset()
    }, 700);
}
var reset = () => {
    [f, s] = []
    flipstate=false
}

(function shuffle() {
    cards.forEach((c) => {
        var index
        index = Math.floor(Math.random() * 16)
        c.style.order = index
    })
})()