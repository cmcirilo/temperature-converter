const express = require('express');
const os = require('os')
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const conversor = require('./convert')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.get('/fahrenheit/:value/celsius', (req, res) => {

    let value = req.params.value;
    let celsius = conversor.fahrenheitCelsius(value);
    res.json({ "celsius": celsius, "maquina": os.hostname() });
});

app.get('/celsius/:value/fahrenheit', (req, res) => {

    let value = req.params.value;
    let fahrenheit = conversor.celsiusFahrenheit(value);
    res.json({ "fahrenheit": fahrenheit, "maquina": os.hostname() });
});

app.get('/', (req, res) => {

    res.render('index',{convertedValue: ''});
});

app.post('/', (req, res) => {
    let resultado = '';

    if (req.body.valueRef) {
        if (req.body.selectTemp == 1) {
            resultado = conversor.celsiusFahrenheit(req.body.valueRef)
        } else {
            resultado = conversor.fahrenheitCelsius(req.body.valueRef)
        }
    }

    res.render('index', {convertedValue: resultado});
 });

app.listen(8080, () => {
    console.log("Server is running in port 8080");
});