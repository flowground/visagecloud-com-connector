# ![LOGO](logo.png) VisageCloud **flow**ground Connector

## Description

A generated **flow**ground connector for the VisageCloud API (version 1.1).

Generated from: https://api.apis.guru/v2/specs/visagecloud.com/1.1/swagger.json<br/>
Generated at: 2019-06-06T16:13:17+03:00

## API Description

Face search, recognition & classification API. Just make a call to our REST API each time your app needs to access face recognition and classification capabilities.

## Authorization

This API does not require authorization.

## Actions

### Get account information by accessKey and secretKey

*Tags:* `account-controller`

#### Input Parameters
* `accessKey` - _required_ - accessKey
* `secretKey` - _required_ - secretKey

### Get billing information by accessKey and secretKey

*Tags:* `account-controller`

#### Input Parameters
* `accessKey` - _required_ - accessKey
* `secretKey` - _required_ - secretKey
* `startDateTime` - _optional_ - startDateTime
* `endDateTime` - _optional_ - endDateTime
* `dateTemplate` - _optional_ - dateTemplate

### Change password for an account using old password

*Tags:* `account-controller`

#### Input Parameters
* `email` - _required_ - email
* `oldPassword` - _required_ - oldPassword
* `newPassword` - _required_ - newPassword

### Get account information including accessKey and secretKey by email and password

*Tags:* `account-controller`

#### Input Parameters
* `email` - _required_ - email
* `password` - _required_ - password

### Compare several faces identified by faceHash, without depending on mapping faces to profiles

*Tags:* `Analysis`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `faceHashes` - _required_ - The IDs of the faces which you want compared, comma-separated
* `showDetails` - _optional_ - Show details

### Perform detection on a given picture or picture URL

*Tags:* `Analysis`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `storeAnalysisPicture` - _optional_ - Boolean value indicating whether you want the picture of the analysis to be stored for later retrieval
* `storeFacePictures` - _optional_ - Boolean value indicating whether you want the faces inside the picture to be stored for later retrieval
* `storeResult` - _optional_ - Boolean value indicating whether you want the result of the analysis to be stored
* `retentionTime` - _optional_ - How many seconds the results should be retained in stoarage?
* `pictureURL` - _optional_ - The URL of the picture, assuming it is served by a third party server. Server should be accesible from the Internet or through another netwoek by VisageCloud infrastructure
* `algorithmVersion` - _optional_ - Algorithm version (V2 is more performant but not backward compatible)
    Possible values: V1, V2.
* `autoRotate` - _optional_ - Auto-rotate to find flipped or rotate faces
* `skipEXIF` - _optional_ - Skip EXIF rotation procesing
* `waitForPictureUpload` - _optional_ - Waits until the picture is successfully uploaded, before returning the response back the the client
* `filters` - _optional_ - [For advanced users only] Change feature filters for robustness of feature extraction. Tweaking this parameter may affect per
* `options` - _optional_ - [For advanced users only] Options for preprocessing of image.

### Retrieve the last *count* operations per current account

*Tags:* `Analysis`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `count` - _optional_ - How many records to retrieve at a time

### Perform labeled recognition on a given picture or picture URL

*Tags:* `Analysis`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `storeAnalysisPicture` - _optional_ - Boolean value indicating whether you want the picture of the analysis to be stored for later retrieval
* `storeFacePictures` - _optional_ - Boolean value indicating whether you want the faces inside the picture to be stored for later retrieval
* `storeResult` - _optional_ - Boolean value indicating whether you want the result of the analysis to be stored
* `retentionTime` - _optional_ - How many seconds the results should be retained in stoarage?
* `collectionId` - _required_ - Uniquely identified collection that can store multiple profiles
* `labels` - _optional_ - Labels associated with the given picture or picture URL
* `attributeFilters` - _optional_ - Filters that will be applied on the recognition operation
    Possible values: NO_FILTER, GENDER_FILTER, AGE_GROUP_FILTER.
* `pictureURL` - _optional_ - The URL of the picture
* `algorithmVersion` - _optional_ - Algorithm version (V2 is more performant but not backward compatible)
    Possible values: V1, V2.
* `autoRotate` - _optional_ - Auto-rotate to find flipped or rotate faces
* `skipEXIF rotation processing` - _optional_ - Skip EXIF rotation procesing
* `waitForPictureUpload` - _optional_ - Waits until the picture is successfully uploaded, before returning the response back the the client
* `filters` - _optional_ - [For advanced users only] Change feature filters for robustness of feature extraction. Tweaking this parameter may affect per
* `options` - _optional_ - [For advanced users only] Options for preprocessing of image.

### Retrieve a complete analysis object including both detection and recognition information

*Tags:* `Analysis`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `analysisId` - _required_ - The ID of the analysis for which the data will be retrieved

### Count individuals in streams or collections

*Tags:* `Analytics for presence and audience`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `collectionIds` - _optional_ - Collection ids
* `streamIds` - _optional_ - Stream Ids
* `startDateTime` - _optional_ - startDateTime
* `endDateTime` - _optional_ - endDateTime
* `visitDuration` - _optional_ - visitDuration
* `maxIterations` - _optional_ - maxIterations
* `maxBatchIterations` - _optional_ - maxBatchIterations
* `minNeighborsMergedPerIteration` - _optional_ - minNeighborsMergedPerIteration
* `mergingStep` - _optional_ - mergingStep
* `shuffling` - _optional_ - shuffling

### Show audience (based on number of occurrences of each person) breakdown per declared attribute (age, gender).

*Tags:* `Analytics for presence and audience`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `streamIds` - _optional_ - Stream Ids
* `startDateTime` - _optional_ - startDateTime
* `endDateTime` - _optional_ - endDateTime
* `step` - _optional_ - step
* `attributes` - _required_ - attributes

### Show presence (based on number of occurences of each face) breakdown per declared attribute (age, gender)

*Tags:* `Analytics for presence and audience`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `streamIds` - _required_ - Stream Ids
* `startDateTime` - _optional_ - startDateTime
* `endDateTime` - _optional_ - endDateTime
* `attributes` - _required_ - attributes

### Delete existing classifier

*Tags:* `Classifier`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `id` - _required_ - The id of the classifier that will be removed

### Get classifier full

*Tags:* `Classifier`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `id` - _required_ - The id of the classifier that you want the status for

### Create new SVM classifier with given name

*Tags:* `Classifier`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `name` - _required_ - The name of the SVM classifier that will be created
* `collectionIds` - _required_ - Collection ids
* `preprocessor` - _optional_ - Preprocessor
* `classificationAttributeName` - _required_ - Classification attribute name
* `considerViewPoints` - _optional_ - Consider view point
* `seed` - _optional_ - Seed for divididing training and evaluation sets
* `trainingRatio` - _optional_ - Training ratio
* `probabilityParameter` - _optional_ - Probability parameter
* `gammaParameter` - _optional_ - Gamma parameter
* `nuParameter` - _optional_ - Nu parameter
* `cParameter` - _optional_ - c parameter
* `svmTypeParameter` - _optional_ - SVM type parameter
* `kernelTypeParameter` - _optional_ - Kernel type parameter
* `cacheSizeParameter` - _optional_ - Cache size parameter
* `epsParameter` - _optional_ - Eps parameter

### Get classifer status

*Tags:* `Classifier`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `id` - _required_ - The id of the classifier that you want the status for

### Retrieve all collections

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud

### Create new empty collection with given name

*Tags:* `Collection`

### Retrieve all collections

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud

### Delete existing collection with associated profiles and faces.

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `collectionId` - _required_ - The id of the collection that will be removed

### Retrieve existing collection content

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `collectionId` - _required_ - The id of the collection for which the data will be retrieved

### Create new empty collection with given name

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `collectionName` - _required_ - The name of the collection that will be created
* `preload` - _optional_ - Defined whether to preload collection
* `evictable` - _optional_ - Defined whether the collection can be evicted
* `purposes` - _optional_ - The newly declared purposes of the collection
    Possible values: FEATURES, LANDMARKS, ATTRIBUTES.

### Retrieve collection content for data analysis.

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `collectionId` - _required_ - The id of the collection for which the data will be retrieved

### Change purpose of existing collection

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `collectionId` - _required_ - The id of the collection for which the data will be retrieved
* `purposes` - _required_ - The newly declared purposes of the collection
    Possible values: FEATURES, LANDMARKS, ATTRIBUTES.

### Delete existing collection with associated profiles and faces.

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `id` - _required_ - The id of the collection that will be removed

### Retrieve existing collection content

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `id` - _required_ - The id of the collection for which the data will be retrieved

### Update an existing collection with a given id

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `name` - _optional_ - The name of the collection that will be updated
* `purposes` - _optional_ - The newly declared purposes of the collection
    Possible values: FEATURES, LANDMARKS, ATTRIBUTES.
* `id` - _required_ - The id of the collection that will be updated

### Update an existing collection with a given id

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `name` - _optional_ - The name of the collection that will be updated
* `purposes` - _optional_ - The newly declared purposes of the collection
    Possible values: FEATURES, LANDMARKS, ATTRIBUTES.
* `id` - _required_ - The id of the collection that will be updated

### Gets all the profiles associated to a collection

*Tags:* `Collection`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `id` - _required_ - The collection that contains the profile

### Removes classification attributes from a profile

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `profileId` - _required_ - The profile associated with the classification attributes
* `collectionId` - _required_ - The collection that contains the profile

### Gets classification attributes from a profile

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `profileId` - _required_ - The profile associated with the classification attributes
* `collectionId` - _required_ - The collection that contains the profile

### Maps classification attributes to a profile

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `profileId` - _required_ - The profile associated with the classification attributes
* `collectionId` - _required_ - The collection that contains the profile
* `classificationAttributes` - _required_ - Comma separated key:value classification attributes

### Gets the enrollment status of a profile: information on whether it is suitable for authentication.

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `profileId` - _required_ - The profile that contains the faces
* `collectionId` - _required_ - The collection that contains the profile

### Removes (unmaps) a list of faces, identified by faceHashes, from a profile, identified by profileId

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `faceHashes` - _required_ - Comma separated face hashes, that will be removed from a profile
* `profileId` - _required_ - The profile that contains the face
* `collectionId` - _required_ - The collection that contains the profile

### Gets all the faceHashes associated to a profile

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `profileId` - _required_ - The profile that contains the faces
* `collectionId` - _required_ - The collection that contains the profile

### Adds (maps) a list of faces, identified by faceHashes, to a profile, identified by profileId

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `faceHashes` - _required_ - Comma separated face hashes, that will be associated to a profile
* `profileId` - _required_ - The profile that will store the face
* `collectionId` - _required_ - The collection that contains the profile

### Deletes a profile and unmaps all its faces

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `collectionId` - _required_ - Uniquely identified collection that can store multiple profiles
* `profileId` - _required_ - The profile id (provide this if you don't have the externalId

### Creates a new profile with no faces associated to it (empty profile)

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `collectionId` - _required_ - Uniquely identified collection that can store multiple profiles
* `externalId` - _optional_ - External reference to additional information you don't want to share with VisageCloud
* `screenName` - _optional_ - Human-readable label for the profile
* `labels` - _optional_ - Allows you to do finer filtering in face recognition
* `classificationAttributes` - _optional_ - Comma separated key:value classification attributes
* `details` - _optional_ - Comma separated key:value details of profile

### Deletes a profile and unmaps all its faces

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `collectionId` - _required_ - Uniquely identified collection that can store multiple profiles
* `id` - _required_ - The profile id (provide this if you don't have the externalId

### Retrieves a profile

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `collectionId` - _required_ - Uniquely identified collection that can store multiple profiles
* `withFaces` - _optional_ - Retrieves the profile with all its associated faces
* `id` - _required_ - The profile id (provide this if you don't have the externalId

### Update an existing profile with a given id

*Tags:* `Profile`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `id` - _required_ - The id of the profile that will be updated
* `collectionId` - _required_ - Uniquely identified collection that can store multiple profiles
* `externalId` - _optional_ - External reference to additional information you don't want to share with VisageCloud
* `screenName` - _optional_ - Human-readable label for the profile
* `labels` - _optional_ - Allows you to do finer filtering in face recognition
* `classificationAttributes` - _optional_ - Comma separated key:value classification attributes
* `details` - _optional_ - Comma separated key:value details of profile

### Show status of all streams from account

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud

### Get last N recognized individuals from stream

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `streamIds` - _optional_ - The id of the stream for which the frames will be retrieved
* `count` - _optional_ - How many frames to retrieve at a time

### Cleanup frames older than specified timeframe

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `streamId` - _required_ - The id of the stream that will be stopped
* `interval` - _required_ - Frames older than interval (seconds) will be cleaned up

### Get individual frame image

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `streamId` - _required_ - The id of the stream for which the frames will be retrieved
* `timestamp` - _required_ - Timestamp of frame to retrieve

### Get last processed N frames from stream

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey or readOnlyKey provided by VisageCloud
* `streamId` - _required_ - The id of the stream for which the frames will be retrieved
* `count` - _optional_ - How many frames to retrieve at a time
* `collectionId` - _optional_ - The collection id you want to run recognition against
* `labels` - _optional_ - Labels associated with the given picture or picture URL
* `attributeFilters` - _optional_ - Filters that will be applied on the recognition operation
    Possible values: NO_FILTER, GENDER_FILTER, AGE_GROUP_FILTER.

### Start existing stream

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `streamId` - _required_ - The id of the stream that will be started

### Stop existing stream

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `streamId` - _required_ - The id of the stream that will be stopped

### Create new stream with given name

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `name` - _required_ - The name of the stream that will be created
* `url` - _required_ - The url of the stream
* `method` - _optional_ - Streaming method
    Possible values: WEBRTC_PULL, WEBRTC_PUSH, INGESTION_ENDPOINT.
* `username` - _optional_ - Username
* `password` - _optional_ - Password
* `skipFramesWithNoFaces` - _optional_ - Boolean value indicating whether you want the original picture to be stored for later retrieval
* `retentionTime` - _optional_ - Number of seconds for frames to be kept. Default is 605000s (7 days)
* `storeOriginalFrames` - _optional_ - Boolean value indicating whether you want the original picture to be stored for later retrieval
* `storeAttendanceFaces` - _optional_ - Boolean value indicating whether you want to store permanently store faces clippings of the recognized faces
* `storeAttendanceFrames` - _optional_ - Boolean value indicating whether you want to store permanently store frames with a recognized face in them
* `isActive` - _optional_ - Boolean value indicating whether the stream is currently active or not
* `associatedCollections` - _optional_ - List of collection ids which will be used to measure attendance
* `attributes` - _optional_ - Attributes of the stream

### Delete existing stream

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `id` - _required_ - The id of the stream that will be removed

### Get an existing stream with a given ID

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `streamId` - _required_ - The id of the stream for which the data will be retrieved

### Update an existing stream with a given ID

*Tags:* `Stream`

#### Input Parameters
* `accessKey` - _required_ - The accessKey provided by VisageCloud
* `secretKey` - _required_ - The secretKey provided by VisageCloud
* `streamId` - _required_ - The id of the stream that will be updated
* `name` - _optional_ - The name of the stream that will be updated
* `url` - _optional_ - The url of the stream
* `method` - _optional_ - Streaming method
    Possible values: WEBRTC_PULL, WEBRTC_PUSH, INGESTION_ENDPOINT.
* `username` - _optional_ - Username
* `password` - _optional_ - Password
* `skipFramesWithNoFaces` - _optional_ - Boolean value indicating whether you want the original picture to be stored for later retrieval
* `retentionTime` - _optional_ - Number of seconds for frames to be kept
* `storeOriginalFrames` - _optional_ - Boolean value indicating whether you want the original picture to be stored for later retrieval
* `storeAttendanceFaces` - _optional_ - Boolean value indicating whether you want to store permanently store faces clippings of the recognized faces
* `storeAttendanceFrames` - _optional_ - Boolean value indicating whether you want to store permanently store frames with a recognized face in them
* `isActive` - _optional_ - Boolean value indicating whether the stream is currently active or not
* `associatedCollections` - _optional_ - List of collection ids which will be used to measure attendance
* `attributes` - _optional_ - Attributes of the stream

## License

**flow**ground :- Telekom iPaaS / visagecloud-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
