let count = 0;

const value       = document.querySelector("#contador");
const increment   = document.getElementById("incrementar");
const decrement  = document.getElementById("disminuir");
const reset   = document.getElementById("reiniciar");

increment.addEventListener("click",() => {
    count++;
    if (count > 0) {
        document.getElementById("contador").style.color = "green"
    }
    if (count === 0) {
        document.getElementById("contador").style.color = "black"
    }
    value.innerHTML = count;
})

decrement.addEventListener("click",() => {
    count--;
    if (count < 0) {
        document.getElementById("contador").style.color = "red"
    }
    if (count === 0) {
        document.getElementById("contador").style.color = "black"
    }
    value.innerHTML = count;
})

reset.addEventListener("click",() => {
    count = 0;
    document.getElementById("contador").style.color = "black"
    value.innerHTML = count;
})
