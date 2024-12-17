// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;


// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createcard(element, deleteCallback) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    card.querySelector(".card__image").src = element.link;
    card.querySelector(".card__image").alt = element.name;
    card.querySelector(".card__title").textcontent = element.name;
    const deleteButton = card.querySelector(".card__delete-button");
deleteButton.addEventListener("click", () => {
  deleteCallback(card);
});
return card;
};

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
};

// @todo: Вывести карточки на страницу
function renderCard(elements) {
    elements.forEach((item) => { 
  const card = createcard(item, deleteCard);
  placesList.append(card);
})
};
renderCard(initialCards);