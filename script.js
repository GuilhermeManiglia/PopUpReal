let bot = document.getElementsByClassName("comprar")[0];
let pop = document.getElementsByClassName("popupTotal")[0];
let fecharPop = document.getElementsByClassName("closer")[0];

bot.addEventListener("click", () => {
  pop.showModal();
});

fecharPop.addEventListener("click", () => {
  pop.close();
});
