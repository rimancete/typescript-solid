/* LSP - Liskov Substitution Principle => Subtipos precisam ser substituívei por seus tipos de base |
Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal

- Se eu tiver que checar tipo(incluindo null), se método / atributo existe, estou quebrando o princípio
- Ex1: Coerência > Os subtipos de Discount devem ter o mesmo comportamento de Dscount
- Ex2: Se eu tenho uma Classe Order, se algo do tipo OrderItem (que herda de Order) deve compor qualquer pedido
*/
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
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
