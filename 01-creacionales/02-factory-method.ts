/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburgesa de %cpollo", COLORS.yellow);
  }
}
class BeefHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburgesa de %cres", COLORS.brown);
  }
}
class BeanHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburgesa de %cfrijol", COLORS.black);
  }
}

abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburguer();
  }
}
class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburguer();
  }
}
class BeanRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeanHamburguer();
  }
}

(() => {
  let restaurant: Restaurant;

  const burgerType = prompt(
    "¿Qué tipo de hamburguesa quieres? (chicken/beef/bean)"
  );

  switch (burgerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    case "bean":
      restaurant = new BeanRestaurant();
      break;

    default:
      throw new Error("Opción no válida");
  }

  restaurant.orderHamburger();
})();
