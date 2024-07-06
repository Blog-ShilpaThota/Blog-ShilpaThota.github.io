const Url = 'https://37i7b5k5w8.execute-api.us-east-2.amazonaws.com/default/ReadDB?tableName="PostContent"';

const getItems = async () => {
    try {
      // Assuming you have some function to fetch items from your API gateway
      if (!Url) {
        throw new Error('DYNAMODB_API_URL environment variable is not defined.');
      }
      
      const response = await fetch(Url);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      const items =  JSON.parse(data.body).Items;
       // Transform the fetched items to match the interface
       const transformedItems = [];
      console.log(items);
       items.forEach((item) => {
        console.log(item);
         const transformedItem= {
           postID: item.postID?item.postID.S?item.postID.S:"0":"0", // Assuming postID is stored as a string
           href: item.href?item.href.S?item.href.S:"#":"#",
           date: item.date?item.date.S?item.date.S:"":"",
           datetime: item.datetime?item.datetime.S?item.datetime.S:"":"",
           category: "", // Assuming categories is stored as a list of numbers and taking the first category
           imageUrl: item.imageUrl?item.imageUrl.S?item.imageUrl.S:"":"",
           description: item.description?item.description.S?item.description.S:"":"",
           content: item.content?item.content.S?item.content.S:"":"",
           title: item.title?item.title.S?item.title.S:"":"",
           postType: item.postType ? item.postType.S : "standard", // Assuming postType is optional and defaults to "standard"
           videoUrl: item.videoUrl ? item.videoUrl.S : undefined,
           audioUrl: item.audioUrl ? item.audioUrl.S : undefined,
           galleryImgs: item.galleryImgs ? item.galleryImgs.S : undefined,
           categories: item.categories?.L ? item.categories.L.map((category) => {
            return {
                id: category?.M?.id?.S || "",
            };
        }) : [],   
        subcategory: { subid: item.subcategory?.M?.subid?.S || "",  }, // Assuming subid is a string
        featuredImage: item.featuredImage?item.featuredImage.S?item.featuredImage.S:"":"",
           authorId: item.authorId?item.authorId.N?item.authorId.N:1:1,
           author: {
            id: 1,
            name:"Shilpa Thota",
            displayName: "Shilpa Thota",
            href: "/authors/shilpa-thota",
            avatar:"/shilpa.jpg"
           }, // Assuming author will be populated separately
           displayName: "", // Assuming displayName is optional
           readingTime: parseInt(item.readingTime?item.readingTime.N:"1"), // Assuming readingTime is stored as a number
         };
         transformedItems.push(transformedItem);
         console.log(transformedItems);
       });
   
       return transformedItems;
    } catch (error) {
      throw new Error('Error fetching items: ' + error.message);
    }
  };
  
  // Assuming this code is inside a component or function in your React application

const transformToDynamoDBFormat = (item) => {
  // Perform transformations here to convert item to DynamoDB format
  console.log(item);
try{
  const dynamoDBItem = {
    postID: { S: (item.postID).toString() },
    postIDSort: { S: (item.postID).toString() },
    authorId: { N: item.authorId.toString() },
    categories: {  L: item.categories.map(cat => ({ M: {id: { S: cat.id.toString() } }}))  },
    subcategory: {M: {subid:{S:item.subcategory.subid}}},
    date: { S: item.date },
    datetime: { S: item.datetime },
    description: { S: item.description },
    featuredImage: { S: item.featuredImage },
    href: { S: "/single/"+item.postID.toString() },
    imageUrl: { S: item.imageUrl },
    readingTime: { N: item.readingTime.toString() },
    title: { S: item.title },
    content: {S:item.content}
  };
  return dynamoDBItem;

}catch(err){
  console.log(err);
}
return null;
};

const postDataToDB = async (item) => {
  console.log(item);
  const dynamoDBItem = transformToDynamoDBFormat(item);
  console.log(dynamoDBItem);
  const bodyString = JSON.stringify(dynamoDBItem);

  const requestBody = `{
    "httpMethod":"POST",
    "tableName":"PostContent",
    "body":"${bodyString.replace(/"/g, '\\"')}"
  }`;
  console.log(requestBody);
  try {
    if(dynamoDBItem){
    const response = await fetch(Url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:requestBody
    });
  

    const responseData = await response.json();
    console.log(responseData); // Log the response from the server
    // Handle the response data as needed
  }
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
  }
}

// Call the postData function wherever needed in your component or application, passing the item object as an argument
const deleteItem = async (itemId) => {
  try {
    const json = {
      primaryKey:{
        postID:itemId,
        postIDSort:itemId
      }
    };
    // Constructing the request body
    const body = `{
      "httpMethod":"DELETE",
      "tableName":"PostContent",
      "body":"${JSON.stringify(json).replace(/"/g, '\\"')}"
    }`;
    console.log(body);

    // Sending the request
    const response = await fetch(Url, {
      method: 'DELETE', // Assuming the endpoint only accepts POST requests
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    });

    // Handling the response
    const responseData = await response.json();
    console.log(responseData); // Log the response from the server
    // Handle the response data as needed
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
  }
};

const updateItem = async (item) => {
  console.log(item);
  try {
    const json = {
      title:item.title,
      description:item.description,
      content:item.content.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t"),
      postID:item.postID,
      categories:item.categories,
      postIDSort:item.postID,
      href:"/single/"+item.postID.toString(),
      featuredImage:item.featuredImage,
      subcategory:item.subcategory
    };
    // Constructing the request body
    const body = `{
      "httpMethod":"PUT",
      "tableName":"PostContent",
      "body":"${JSON.stringify(json).replace(/"/g, '\\"')}"
    }`;
    console.log(body);

    // Sending the request
    const response = await fetch(Url, {
      method: 'PUT', // Assuming the endpoint only accepts POST requests
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    });

    // Handling the response
    const responseData = await response.json();
    console.log(responseData); // Log the response from the server
    // Handle the response data as needed
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
  }
};
const getContentFromURL = async (url) => {
  try {
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text(); // Assuming the content is text
    return data;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};