/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_HRHCMSIMAGES_BUCKETNAME
Amplify Params - DO NOT EDIT */

const region = process.env.REGION;
const bucketName = process.env.STORAGE_HRHCMSIMAGES_BUCKETNAME;

const S3 = require("aws-sdk/clients/s3");
const s3 = new S3({
  region,
});

const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const bodyParser = require("body-parser");
const express = require("express");

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "album";
const partitionKeyType = "S";
const sortKeyName = "name";
const sortKeyType = "S";
const hasSortKey = sortKeyName !== "";
const path = "/images";
const UNAUTH = "UNAUTH";
const hashKeyPath = "/:" + partitionKeyName;
const sortKeyPath = hasSortKey ? "/:" + sortKeyName : "";

// declare a new express app
const app = express();
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const fs = require("fs");
const util = requrie("util");
const unlinkFile = util.promisify(fs.unlink);
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

function uploadImage(file, key) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: key,
  };
  return s3.upload(uploadParams).promise();
}

/************************************
 * HTTP post method for insert object *
 *************************************/

app.post(path + hashKeyPath, upload.single("myimage"), async (req, res) => {
  const album = req.params[partitionKeyName];
  const name = req.params[sortKeyName];
  const key = `${album}/${name}`;

  const file = req.file;

  const result = await uploadImage(file, key);

  await unlinkFile(file.path);

  res.send(result);
  res.statusCode(200);
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
