const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const compression = require('compression')
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import * as serviceWorker from './client/src/service-worker'
const enforce = require('express-sslify')

const app = express()
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', function (req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, error => {
    if(error) throw error
    console.log('Server running on port ' + port)
})

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd',
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).send({error: stripeErr})
        } else {
            res.status(200).send({success: stripeRes})
        }
    })
})

serviceWorker.register()
