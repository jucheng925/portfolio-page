document.addEventListener("DOMContentLoaded", ()=> {
    const restartButton = document.querySelector("#restartButton");
    restartButton.addEventListener("click", restartAnimation, false);
})

// let restartButton = document.querySelector("#restartButton");
// restartButton.addEventListener("click", restartAnimation, false);

function restartAnimation(e) {
    console.log(e);
    let hidden = document.querySelector(".hidden");
    let puzzlePieces = document.querySelectorAll(".puzzle-piece")
    puzzlePieces.forEach((puzzlePiece) => {
        puzzlePiece.style.animationName = "none";
    })
    hidden.style.animationName = "none";
    requestAnimationFrame(()=> {
        hidden.style.animationName = "";
        puzzlePieces.forEach((puzzlePiece) => {
            puzzlePiece.style.animationName = "";
        })
    })

}