var test = require('tape');
var request = require('supertest');
var app = require('../server');

const serie = '1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16\n17\nfizz\n19\nbuzz\nfizz\n22\n23\nfizz\nbuzz\n26\nfizz\n28\n29\nfizzbuzz\n31\n32\nfizz\n34\nbuzz\nfizz\n37\n38\nfizz\nbuzz\n41\nfizz\n43\n44\nfizzbuzz\n46\n47\nfizz\n49\nbuzz\nfizz\n52\n53\nfizz\nbuzz\n56\nfizz\n58\n59\nfizzbuzz\n61\n62\nfizz\n64\nbuzz\nfizz\n67\n68\nfizz\nbuzz\n71\nfizz\n73\n74\nfizzbuzz\n76\n77\nfizz\n79\nbuzz\nfizz\n82\n83\nfizz\nbuzz\n86\nfizz\n88\n89\nfizzbuzz\n91\n92\nfizz\n94\nbuzz\nfizz\n97\n98\nfizz\nbuzz\n';

test('hello test', function (t) {
  request(app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      t.end();
    });
}); 

test('fizzbuz test', function (t) {
  request(app)
    .get('/fizzbuzz')
    .expect(200)
    .end(function (err, res) {
      var expectedText = serie;
      t.same(res.text, expectedText, 'Fizzbuzz serie as expected');
      t.end();
    });
}); 

test('fizzbuz random test', function (t) {
  let number = Math.floor(Math.random() * 101);
  request(app)
    .get('/fizzbuzz/'+number)
    .expect(200)
    .end(function (err, res) {
      var expectedText = serie.split('\n')[number-1];
      t.same(res.text, expectedText, `Fizzbuzz of ${number} is ${expectedText} as expected`);
      t.end();
    });
}); 

test('check page test', function (t) {
  let number = Math.floor(Math.random() * 101);
  request(app)
    .get(`/result`)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .query({number:number})
    .expect(200)
    .end(function (err, res) {
      var expectedText = number + ' - ' + serie.split('\n')[number-1];
      t.assert(res.text.includes(expectedText),"result includes "+expectedText)
      t.end();
    });
}); 