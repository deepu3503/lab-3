var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const persons = [
  {
    route: 'manan',
    name: 'Manan Patel',
    age: 20,
    cityBorn: 'Barrie',
    cityResiding: 'Surat',
    hobby: 'surffing and playing cricket.'
  },
  {
    route: 'krupal',
    name: 'Krupal Patel',
    age: 23,
    cityBorn: 'Barrie',
    cityResiding: 'Anand',
    hobby: 'watching garba and singing.'
  },
  {
    route: 'darshan',
    name: 'Darshan Patel',
    age: 27,
    cityBorn: 'Barrie',
    cityResiding: 'Nadiad',
    hobby: ' wakling out with dog .'
  }
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const person = persons.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!person) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('person', person);
});

// router.get('/chris', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     name: 'Chris Naismith',
//     age: 24,
//     cityBorn: 'Barrie',
//     cityResiding: 'Stayner',
//     hobby: 'playing Rocket League.'
//   });
// });

// router.get('/andrew', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     name: 'Andrew Naismith',
//     age: 22,
//     cityBorn: 'Barrie',
//     cityResiding: 'Barrie',
//     hobby: 'watching movies.'
//   });
// });

module.exports = router;
