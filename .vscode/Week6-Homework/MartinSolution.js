class Item {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
    addToCart() {
      console.log("Item added to cart");
    }
  }
  class GameConsole extends Item {
    constructor(id, brand, name, price) {
      super(id, name, price);
      this.brand = brand;
      this.fullName = `${brand} ${name}`;
    }
  }
  class VideoGame extends Item {
    constructor(id, name, console, price, year, numOfPlayers) {
      super(id, name, price);
      this.console = console;
      this.year = year;
      this.numOfPlayers = numOfPlayers;
    }
  }