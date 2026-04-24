//Adapter

//Formatos diferentes
class ExternalFlavorService {
    getFlavors() {
        return [
            {name: "Calabresa"},
            {name: "Frango com catupiry"},
            {name: "Portuguesa"}
        ]
    }
}

//Transforma tudo string
class FlavorAdapter {
    constructor(service) {
        this.service = service;
    }

    getFlavors() {
        return this.service.getFlavors().map(f => f.name);
    }
}

//Bridge

//Montagem
class PizzaBuilder {
    constructor() {
        this.pizza = {
            size: "",
            border: "",
            flavors: []
        }
    }

    setBorder(border) {
        const valid = ["tradicional", "catupiry", "sem borda"];
        if (!valid.includes(border)) {
            throw new Error("Borda inválida");
        }
        this.pizza.border = border;
    }

    addFlavor(flavor) {
        if (this.pizza.flavors.length > 3) {
            throw new Error("Máximo 3 sabores");
        }
        this.pizza.flavors.push(flavor)
    }

    getPizza() {
        return this.pizza
    }
}

// Abstraction (tamanho)
class PizzaSize {
    constructor(builder) {
        this.builder = builder
    }
}

//Tamanhos
class Brotinho extends PizzaSize {
    create(border, flavors) {
        this.builder.setBorder(border)
        flavors.slice(0, 1).forEach(f => this.builder.addFlavor(f))

        const pizza = this.builder.getPizza()
        pizza.size = "brotinho"
        return pizza
    }
}

class Tradicional extends PizzaSize {
  create(border, flavors) {
    this.builder.setBorder(border);
    flavors.slice(0, 2).forEach(f => this.builder.addFlavor(f));

    const pizza = this.builder.getPizza();
    pizza.size = "tradicional";
    return pizza;
  }
}

class Grande extends PizzaSize {
  create(border, flavors) {
    this.builder.setBorder(border);
    flavors.slice(0, 3).forEach(f => this.builder.addFlavor(f));

    const pizza = this.builder.getPizza();
    pizza.size = "grande";
    return pizza;
  }
}

//Execução

//Adapter
const externalService = new ExternalFlavorService()
const adapter = new FlavorAdapter(externalService)
const flavors = adapter.getFlavors()

//Brigde
const pizza1 = new Grande(new PizzaBuilder()).create("catupiry", flavors)
const pizza2 = new Tradicional(new PizzaBuilder()).create("tradicional", flavors)
const pizza3 = new Brotinho(new PizzaBuilder()).create("sem borda", flavors)

function printPizza(p) {
    console.log(
        `Pizza ${p.size} | Borda: ${p.border} | Sabor: ${p.flavors.join(", ")}`
    )
}

printPizza(pizza1)
printPizza(pizza2)
printPizza(pizza3)