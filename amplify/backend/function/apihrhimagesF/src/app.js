/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_HRHCMSIMAGES_BUCKETNAME
Amplify Params - DO NOT EDIT */
const fs = require("fs")

const region = process.env.REGION
const bucketName = process.env.STORAGE_HRHCMSIMAGES_BUCKETNAME

const S3 = require('aws-sdk/clients/s3')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')

const s3 = new S3({
  region,
});

function uploadImage(file){
  const fileStream = fs.createReadStream(file.path)
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }
  return s3.upload(uploadParams).promise()
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "album";
const partitionKeyType = "S";
const sortKeyName = "name";
const sortKeyType = "S";
const hasSortKey = sortKeyName !== "";
const path = "/images";
const UNAUTH = 'UNAUTH';
const hashKeyPath = '/:' + partitionKeyName;
const sortKeyPath = hasSortKey ? '/:' + sortKeyName : '';

const multer = require("multer")
const upload = multer({ dest: "uploads/"});

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch(type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
}

/************************************
* HTTP post method for insert object *
*************************************/

app.post(path + hashKeyPath, upload.single("myimage"), async function(req, res) {
  let album = req.params[partitionKeyName]
  let name = req.params[sortKeyName]
  
  const file = req.file

  const result = await uploadImage(file)
  res.send(result);
});


module.exports = app
