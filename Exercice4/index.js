const btn = document.getElementById("myButton");
btn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    btn.parentElement.appendChild(p);
});

