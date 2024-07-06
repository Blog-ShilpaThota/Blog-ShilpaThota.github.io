import { useEffect } from 'react';
import './App.css';
import MyRoutes from './routers';
import { useItems } from './contains/ItemContext';
import { getItems } from './contains/fetch';
import { getItemsCategory } from './contains/fetchCategory';
import { getMediumArticles } from './contains/fetchMediumArticles';

function App() {
  const { setCategories,setArticles } = useItems();


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const items = await getItemsCategory();
        setCategories(items);
        console.log(items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    const fetchMediumArticles = async () => {
      try {
        const items = await getMediumArticles();
        console.log(items);
        setArticles(items);
        console.log(items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchMediumArticles();
    // fetchItems();
    fetchCategories();
  }, []);
  return (
      <MyRoutes />
  );
}

export default App;
