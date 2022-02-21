class Crowdpleasers {
    constructor(name,quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    describe() {
        return `${this.name} for ${this.quantity} many people.`;
    }
}
class Activeorders {
    constructor(name) {
        this.name = name;
        this.Crowdpleaser = []
    }
    addcrowdpleaser(Crowdpleaser) {
        if (crowdpleaser instanceof Crowdpleasers) {
            this.crowdpleaser.push(crowdpleaser);
        } else {
            throw new Error(`You can only add an instance of Crowdpleasers. Argument is not a Crowdpleaser: ${crowdpleaser}`);
        }
        }
        describe() {
            return `${this.name} has ${this.crowdpleasers.length} crowdpleasers.`;
        }
    }
class Menu {
    constructor() {
        this.activeorders = [];
        this.selectedOrder = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createActiveOrder();
                    break;
                case '2':
                    this.viewActiveOrder();
                    break;
                case '3':
                    this.deleteActiveOrder();
                    break;
                case '4':
                    this.displayActiveOrders();
                    break;
                default:
                    selection = 0;
                   
                   
            }
            selection =  this.showMainMenuOptions();
        }
        alert('NO SOUP FOR YOU!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new order
        2) view order
        3) delete order
        4) display all active orders
        `);
    }
showOrderMenuOptions(teamInfo) {
    return prompt(`
    0) back
    1) create order
    2) delete order
    -------------------------
    ${OrderInfo}
    `);
}



    displayOrders() {
        let orderString = '';
        for (let i = 0; i < this.teams.length; i++) {
            orderString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(orderString);
    }
    createOrder() {
        let name = prompt('Enter name for new Order:');
    }
    viewOrder() {
        let index = prompt('Enter the index of the order you wish to view');
        if (index > -1 && index < this.activeOrders.length) {
            this.selectedOrder = this.activeOrders[index];
            let description = 'Order Name: ' + this.selectedOrder.name + '\n';

            for (let i = 0; i < this.selectedOrder.players.length; i++) {
                description += i + ')' + this.selectedOrder.players[i].name + ' - ' + this.selectedOrder.players[i].position + '\n';
            }
            let selection = this.showOrderMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createItem();
                    break;
                case '2':
                    this.deleteItem();
            }
        }

    }
    deleteOrder() {
        let index = prompt('Enter the index of the order you wish to delete:');
        if (index > -1 && index < this.orders.length) {
            this.orders.splice(index, 1);
        }
    }


    createMenuItem() {
        let name = prompt('Enter name of menu item to order:');
        let position = prompt('Enter how many portions you need for your event:');
        this.selectedOrder.menuItems.push(new MenuItem(name, quantity));
    }
    deleteMenuItem() {
        let index = prompt('Enter the index of the menu item you wish to delete:');
        if (index > -1 && index < this.selectedOrder.menuItems.length) {
            this.selectedOrder.menuItems.splice(index, 1);
        }
    }
}   
let menu = new Menu();
menu.start();