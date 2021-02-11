import moment from 'moment';
class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id; // id of order not the items in the order. Standalone ID.
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {

    // return this.date.toLocaleDateString("en-EN", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });
    // this will help the Android to render the same as IOS 
    return moment(this.date).format('MMMM DD YYYY, hh:mm');
  }
}

export default Order;
