const algoliasearch = require('algoliasearch');

const client = algoliasearch('AXQFNLOTUN', '65e05d13c4d9893af2649ac8a2799a7c');
const index = client.initIndex('netlify_f7c3c02f-9e4e-41fc-a0ba-3b2b050640c8_algo-test_all');

const objects = [
  {
    objectID: 1,
    name: 'Foo',
  },
];

index
  .saveObjects(objects)
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  })
  .catch(err => {
    console.log(err);
  });
  index
  .search('Fo')
  .then(({ hits }) => {
    console.log(hits);
  })
  .catch(err => {
    console.log(err);
  });