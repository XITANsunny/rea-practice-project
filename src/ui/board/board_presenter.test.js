import { BoardPresenter } from "./board_presenter";

function createFakeCard (id, price) {
  return {
    id,
    price,
    mainImage: 'fakeImage',
    isSaved: false,
  }
}

describe("boardPresenter", () => {
  let cards;
  beforeEach(() => {
    cards = [];
  });

  it("Can add new card", () => {
    const presenter = new BoardPresenter();
    const fakeCard = createFakeCard(1, 2);
    cards = presenter.addCard(cards, fakeCard);

    expect(cards).toStrictEqual([fakeCard]);
  });

  it("Can remove existed card", () => {
    const presenter = new BoardPresenter();
    const fakeCard = createFakeCard(1, 2);
    cards = [fakeCard];
    cards = presenter.removeCard(cards, 1);

    expect(cards).toStrictEqual([]);
  });

  it("Does not remove any card if ID does not match", () => {
    const presenter = new BoardPresenter();
    const fakeCard = createFakeCard(1, 2);
    cards = [fakeCard];
    presenter.removeCard(cards, 42);

    expect(cards).toStrictEqual([fakeCard]);
  });
});
