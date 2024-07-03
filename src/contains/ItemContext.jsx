import React, { createContext, useState, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    // const [items, setItems] = useState([]);
    const [articles, setArticles] = useState([]);

    const [categories, setCategories] = useState([]);
    const [loggedin, setLoggedin] = useState(false);
    const navigate = useNavigate();
    // Check if user is logged in from localStorage on component mount
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            setLoggedin(true);
            navigate('/dashboard');
        }
    }, []);

    // Function to handle login
    const login = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setLoggedin(true);
    };

    // Function to handle logout
    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        setLoggedin(false);
    };

    // Function to update items context
    // const updateItems = (newItems) => {
    //     console.log(newItems);
    //     setItems(newItems);
    // };
    const updateCategories = (newCategory) =>{
        setCategories(newCategory);
    }
    return (
        <ItemContext.Provider value={{  categories, setCategories,updateCategories,setLoggedin,loggedin,login,logout,articles,setArticles }}>
            {children}
        </ItemContext.Provider>
    );
};

export const useItems = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error('useItems must be used within an ItemProvider');
    }
    return context;
};
