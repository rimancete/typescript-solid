/* DIP - Dependency Inversion Principle > Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações
- Dependa de abstrações, não de implementações.
- Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
- Classes de baixo nível são classes que executam tarefas (os detalhes)
- Classes de alto nível são classes que gerenciam as classes de baio nível.
 */
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customers';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

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

// Benefício: Usar um protocol para testar ciclo
// class MessagingMock implements MessagingProtocol {
//   sendMessage(): void {
//     console.log('A mensagem foi enviada pelo Mock');
//   }
// }
// const messaginMock = new MessagingMock();

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
