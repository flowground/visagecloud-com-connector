/**
 * Auto-generated action file for "VisageCloud" API.
 *
 * Generated at: 2019-06-06T13:13:17.055Z
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
 * Operation: 'performAnalysisUsingPOST'
 * Endpoint Path: '/rest/v1.1/analysis/detection'
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
    "storeAnalysisPicture",
    "storeFacePictures",
    "storeResult",
    "retentionTime",
    "pictureURL",
    "algorithmVersion",
    "autoRotate",
    "skipEXIF",
    "waitForPictureUpload",
    "filters",
    "options"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "accessKey": "accessKey",
    "secretKey": "secretKey",
    "storeAnalysisPicture": "storeAnalysisPicture",
    "storeFacePictures": "storeFacePictures",
    "storeResult": "storeResult",
    "retentionTime": "retentionTime",
    "pictureURL": "pictureURL",
    "algorithmVersion": "algorithmVersion",
    "autoRotate": "autoRotate",
    "skipEXIF": "skipEXIF",
    "waitForPictureUpload": "waitForPictureUpload",
    "filters": "filters",
    "options": "options",
    "picture": "picture",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'multipart/form-data';

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
        operationId: 'performAnalysisUsingPOST',
        pathName: '/rest/v1.1/analysis/detection',
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