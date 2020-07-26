// Week 6 Homework Bonus: In a .js file,
// create a few classes. Create one "general
// category" class, then two more specific classes
// which extend from the first class. For example,
// perhaps you are creating a webstore that sells
// video games and game consoles. You could create a
// general Item class that holds properties that any
// and every item for sale shares in common, like id,
// name, or price. Then, extend Item with a class for
// GameConsoles and a class for VideoGames and
// include properties specific to each category of
// item.

class saleItem {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class gameConsole extends saleItem {
  constructor(id, name, price, controllers) {
    super(id, name, price);
    this.controllers = controllers;
  }
}

class videoGame extends saleItem {
  constructor(id, name, price, console) {
    super(id, name, price);
    this.console = console;
  }
}
