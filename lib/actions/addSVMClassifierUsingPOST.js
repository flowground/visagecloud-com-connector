/**
 * Auto-generated action file for "VisageCloud" API.
 *
 * Generated at: 2019-06-06T13:13:17.059Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / visagecloud-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'addSVMClassifierUsingPOST'
 * Endpoint Path: '/rest/v1.1/classifier/svm'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "accessKey",
    "secretKey",
    "name",
    "collectionIds",
    "preprocessor",
    "classificationAttributeName",
    "considerViewPoints",
    "seed",
    "trainingRatio",
    "probabilityParameter",
    "gammaParameter",
    "nuParameter",
    "cParameter",
    "svmTypeParameter",
    "kernelTypeParameter",
    "cacheSizeParameter",
    "epsParameter"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "accessKey": "accessKey",
    "secretKey": "secretKey",
    "name": "name",
    "collectionIds": "collectionIds",
    "preprocessor": "preprocessor",
    "classificationAttributeName": "classificationAttributeName",
    "considerViewPoints": "considerViewPoints",
    "seed": "seed",
    "trainingRatio": "trainingRatio",
    "probabilityParameter": "probabilityParameter",
    "gammaParameter": "gammaParameter",
    "nuParameter": "nuParameter",
    "cParameter": "cParameter",
    "svmTypeParameter": "svmTypeParameter",
    "kernelTypeParameter": "kernelTypeParameter",
    "cacheSizeParameter": "cacheSizeParameter",
    "epsParameter": "epsParameter"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'addSVMClassifierUsingPOST',
        pathName: '/rest/v1.1/classifier/svm',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}