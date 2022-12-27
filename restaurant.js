const { mongerInventory } = require("./fishMonger.js")

const monger = mongerInventory()

const fishMenu = (buyPrice) => {
   const menu = []
    for (const inventory of monger) {
        if (inventory.price <= buyPrice)
            menu.push(inventory)
            delete inventory.amount
            inventory.amount = 5
    }

    let menuHTMLString = ""
        for (const fish of menu) {
            menuHTMLString += `
            <article class="menu">
                <h2>${fish.species}</h2>
                <section class="menu"__item">${fish.species} Soup</section>
                <section class="menu"__item">${fish.species} Sandwich</section>
                <section class="menu"__item">Grilled ${fish.species}</section>
            </article>`
        }
    return menuHTMLString
}


module.exports = { fishMenu }