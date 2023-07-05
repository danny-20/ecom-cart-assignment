import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import { createContext, useEffect, useState } from "react";
import productsData from "./data/products.json";
import categoriesData from "./data/categories.json";

const CategoryContext = createContext();
const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    setCategories(categoriesData);
  }, []);

  return (
    <BrowserRouter>
      <CategoryContext.Provider value={categories}>
        <ProductContext.Provider value={products}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </ProductContext.Provider>
      </CategoryContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { ProductContext, CategoryContext };
