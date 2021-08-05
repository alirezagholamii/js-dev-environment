import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'

describe('first test',()=>{
    it('shoult pass', () => {
        expect(true).to.equal(true);

    })
})

describe('index.html', () => {
    it('should say hi', (done) => {
      const index = fs.readFileSync('./src/index.html', "utf-8");
      const {JSDOM} = jsdom;
      const dom = new JSDOM(index)
      const h1 = dom.window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Master says Hi");
      dom.window.close();
      done()
    })
  })
  