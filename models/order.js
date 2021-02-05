class Order {
    constructor(id , items , totalAmount , date) {
        this.id = id; // id of order not the items in the order. Standalone ID.
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }
}

export default Order;