class Shop{
 
 constructor(user){
  this.user = user;
 }
 
 buy(item){
  
   //this.paymentGateway = new Upi( this.user.upi, this.user.upi);
   //this.paymentGateway.pay(item.price)
   
    this.paymentGateway = new Upi( this.user.paypal, this.user.paypal);
    this.paymentGateway.pay(item.price)
   
 }
}

class Item{
 constructor(itemId, price){
  this.id = itemId;
  this.price = price;
 }
}

class Upi{
 constructor(senderUpi, recieverUpi){
  this.sender = senderUpi;
  this.reciever = recieverUpi;
 }
 
 pay(amount){
  // call to UPI API goes here
  console.log(`${amount} amount send to ${this.reciever}`);
  
 }
}

class Paypal{
 constructor(senderUpi, recieverUpi){
  this.sender = senderUpi;
  this.reciever = recieverUpi;
 }
 
 pay(amount){
  // Call to Paypal API goes here
  console.log(`${amount} amount send to ${this.reciever} by Paypal`);
 }
}

class User{
 constructor(name, upi, paypal){
  this.name = name;
  this.upi = upi;
  this.paypal = paypal;
 }
}

user = new User('Joy', 'upi-url', 'paypal-url');
shop = new Shop(user);
item = new Item(70, 600);
shop.buy(item);

