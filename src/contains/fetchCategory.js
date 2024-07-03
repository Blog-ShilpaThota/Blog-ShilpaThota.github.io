import { PostDataType } from "../data/types";
const Url = 'https://37i7b5k5w8.execute-api.us-east-2.amazonaws.com/default/ReadDB?tableName="Categories"';

export const getItemsCategory = async () => {
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
        const subcategory = item.subcategory ? item.subcategory.L.map((sub) => {
          return {
            href: sub.M.href.S || "#",
            subid: sub.M.subid.S || "0",
            subname: sub.M.subname.S || "",
            thumbnail: sub.M.thumbnail.S || ""
          };
        }) : [];
  
         const transformedItem= {
           id: item.id.S?item.id.S:"0", // Assuming postID is stored as a string
           href: item.href.S?item.href.S:"#",
           name: item.name.S?item.name.S:"",
           taxonomy: item.taxonomy.S?item.taxonomy.S:"",
           thumbnail: item.thumbnail.S?item.thumbnail.S:"",
           color: item.color.S?item.color.S:"",
           subcategory:subcategory
         };
         transformedItems.push(transformedItem);
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
    id: { S: (item.id).toString() },
    idsort: { S: (item.id).toString() },
    name: { S: item.name },
    color: { S: item.color },
    href: { S: item.href },
    thumbnail: { S: item.thumbnail },
    taxonomy: { S: item.taxonomy },
    subcategory: { L: item.subcategory.map((sub) => {
      return {
        M: {
          href: { S: sub.href },
          subid: { S: sub.subid },
          subname: { S: sub.subname },
          thumbnail: { S: sub.thumbnail }
        }
      };
    })}
  };
  return dynamoDBItem;

}catch(err){
  console.log(err);
}
return null;
};

export const postDataToDBCategory = async (item) => {
  console.log(item);
  const dynamoDBItem = transformToDynamoDBFormat(item);
  console.log(dynamoDBItem);
  const bodyString = JSON.stringify(dynamoDBItem);

  const requestBody = `{
    "httpMethod":"POST",
    "tableName":"Categories",
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
export const deleteItemCategory = async (itemId) => {
  try {
    const json = {
      primaryKey:{
        id:itemId,
        idsort:itemId
      }
    };
    // Constructing the request body
    const body = `{
      "httpMethod":"DELETE",
      "tableName":"Categories",
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

export const updateItemCategory = async (item) => {
  console.log(item);
  try {
    const json = {
      taxonomy:item.taxonomy,
      name:item.name,
      color:item.color,
      id:item.id,
      href:item.href,
      thumbnail:item.thumbnail,
      idsort:item.id,
      subcategory: item.subcategory.map((sub) => {
        return {
          href: sub.href,
          subid: sub.subid,
          subname: sub.subname,
          thumbnail: sub.thumbnail
        };
      })
    };
    // Constructing the request body
    const body = `{
      "httpMethod":"PUT",
      "tableName":"Categories",
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