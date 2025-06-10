let sayi = 0;

const sayiGoster = document.getElementById("sayi");
const arttirBtn = document.getElementById("arttir");
const azaltBtn = document.getElementById("azalt");
const sifirlaBtn = document.getElementById("sifirla");

arttirBtn.addEventListener("click", () => {
    sayi++;
    sayiGoster.textContent = sayi;
});

azaltBtn.addEventListener("click", () => {
    sayi--;
    sayiGoster.textContent = sayi;
});

sifirlaBtn.addEventListener("click", () => {
    sayi = 0;
    sayiGoster.textContent = sayi;
});
