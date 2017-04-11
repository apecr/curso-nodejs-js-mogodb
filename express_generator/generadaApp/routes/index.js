var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var segundoActual = new Date().getSeconds();
    res.render('index', {
        title: 'Express',
        parrafo: '<p>Inyectado</p>',
        condicion: {
            segundo: segundoActual,
            estado: segundoActual % 2 === 0
        },
        users: [{name: "Maria"}, {name: "Ana"}, {name: "Pilar"}]
    });
});

module.exports = router;
