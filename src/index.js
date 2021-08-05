import './index.css'
import numeral from 'numeral'
const price = numeral(1000).format('$0,0.00');
console.log(`this is ${price}`);