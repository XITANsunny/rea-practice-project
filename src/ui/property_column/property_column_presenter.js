export class PropertyColumnPresenter {
  addCard(cards, card) {
    return cards.concat(card);
  }

  removeCard(cards, id) {
    return cards.filter(c => c.id !== id);
  }
}
