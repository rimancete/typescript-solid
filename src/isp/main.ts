/* ISP - Interface Segregation Principle > Os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam
- Um IndividualCustomer não precisa ter CNPJ e um EnterpriseCustomer não precisa ter CPF
 */
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customers';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Osvaldo',
//   'Costa',
//   '123.456.789-01',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'ODC Consultoria',
  '12.343/0001-30',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
