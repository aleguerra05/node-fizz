var test = require('tape');
var request = require('supertest');
var app = require('../server');

test('hello world test', function (t) {
  request(app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      var expectedText = 'Hello World!';
      t.same(res.text, expectedText, 'Grettings as expected');
      t.end();
    });
}); 

test('fizzbuz test', function (t) {
  request(app)
    .get('/fizzbuzz')
    .expect(200)
    .end(function (err, res) {
      var expectedText = '1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16\n17\nfizz\n19\nbuzz\nfizz\n22\n23\nfizz\nbuzz\n26\nfizz\n28\n29\nfizzbuzz\n31\n32\nfizz\n34\nbuzz\nfizz\n37\n38\nfizz\nbuzz\n41\nfizz\n43\n44\nfizzbuzz\n46\n47\nfizz\n49\nbuzz\nfizz\n52\n53\nfizz\nbuzz\n56\nfizz\n58\n59\nfizzbuzz\n61\n62\nfizz\n64\nbuzz\nfizz\n67\n68\nfizz\nbuzz\n71\nfizz\n73\n74\nfizzbuzz\n76\n77\nfizz\n79\nbuzz\nfizz\n82\n83\nfizz\nbuzz\n86\nfizz\n88\n89\nfizzbuzz\n91\n92\nfizz\n94\nbuzz\nfizz\n97\n98\nfizz\nbuzz\n';
      t.same(res.text, expectedText, 'Fizzbuzz as expected');
      t.end();
    });
}); 