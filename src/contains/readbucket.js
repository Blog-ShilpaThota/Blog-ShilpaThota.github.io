import AWS from 'aws-sdk';

const uploadFile = async ({ file ,type, postID}) => {
  // Function to generate a unique ID
  const generateUniqueID = () => {
    return 'S3' + Math.random().toString(36).substr(1, 5);
  };
  const newID = generateUniqueID(); // Generatin,typeg a unique ID for the new category

  var ext = file.type;
  const S3_BUCKET = "shilpablognew";
  const REGION = "us-east-2";

  AWS.config.update({
    accessKeyId: "AKIATCKATT3VEV6XTVUU",
    secretAccessKey: "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",
  });
  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });
  if(type==="html"){
  console.log(file);
    ext = 'html';
    const contentType = 'text/html';
    file=file.get('file');
  }
  else{
    ext = ext.includes('/')?ext.split('/')[1]:ext;
  }
  const currentDate = new Date(); const timestamp = currentDate. getTime();

  const params = {
    Bucket: S3_BUCKET,
    Key: (ext==="html")?`markup/${postID}.${ext}`:`image/${newID}${timestamp}.${ext}`,
    Body: file,
  };

  try {
    const data = await s3.upload(params).promise();
    const url = (ext==="html")?`https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/markup/${postID}.${ext}`:`https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/image/${newID}${timestamp}.${ext}`;
    console.log("File uploaded successfully. URL:", url);
    return url;
  } catch (error) {
    console.error("Error uploading file:", error);
    alert("Error uploading file: " + error.message);
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
};

export default uploadFile;