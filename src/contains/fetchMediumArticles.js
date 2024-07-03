const Url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shilpathota1408';

export const getMediumArticles = async () => {
    try {
      // Assuming you have some function to fetch items from your API gateway
      if (!Url) {
        throw new Error('Url not found');
      }
      
      const response = await fetch(Url);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      var items=[];
        console.log(data);
        items =  data.items;
        var transformedItems = [];
        items.forEach(element => {
          var transformedItem = element;
          const imgUrl = element.description.toString().match(/<img[^>]+src="([^">]+)"/)[1];
          console.log(imgUrl);
          transformedItem.thumbnail=imgUrl;
          transformedItems.push(transformedItem);
        });
        return transformedItems;

    } catch (error) {
      throw new Error('Error fetching items: ' + error.message);
    }
  };
