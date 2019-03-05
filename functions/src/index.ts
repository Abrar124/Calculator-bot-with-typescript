'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

console.log('set me');

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {

    const parameters = request.body.queryResult.parameters;

    let intent = (undefined === request.body.queryResult.intent) ? '' : request.body.queryResult.intent.displayName;
    response.setHeader('Content-Type', 'application/json');


    switch (intent) {

        case 'Addition':

            response.send({
                fulfillmentText:
                    `The sum of ${parameters.number} and ${parameters.number1} is ${parseInt(parameters.number) + parseInt(parameters.number1)}`
            });
            break;
        case 'subtraction':

            response.send({
                fulfillmentText:
                    `The Substraction of ${parameters.number} and ${parameters.number1} is ${parseInt(parameters.number) - parseInt(parameters.number1)}`
            });
            break;
        case 'multiply':

            response.send({
                fulfillmentText:
                    `The Multiplication of ${parameters.number} and ${parameters.number1} is ${parseInt(parameters.number) * parseInt(parameters.number1)}`
            });
            break;
        case 'divide':

            response.send({
                fulfillmentText:
                    `The Division of ${parameters.number} and ${parameters.number1} is ${parseInt(parameters.number) / parseInt(parameters.number1)}`
            });
            break;

        default:
            response.send({
                speech: "no action matched in webhook"
            });
    }

});
