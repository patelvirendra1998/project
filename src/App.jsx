import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import KidsProduct from "./pages/KidsProduct";
import MenProduct from "./pages/MenProduct";
import WomenProduct from "./pages/WomenProduct";
import ProductSearch from "./pages/ProductSearch";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import BestOffer from "./pages/BestOffer";
import Blog from "./pages/Blog";
import PremiumWatches from "./pages/PremiumWatches";
const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="mycart" element={<MyCart/>}/>
        <Route path="kidswatches" element={<KidsProduct/>}/>
        <Route path="menwatches" element={<MenProduct/>} />
        <Route path="womenwatches" element={<WomenProduct/>} />
        <Route path="searchproduct/:txtdata" element={<ProductSearch/>} />
        <Route path="services" element={<Services/>} />
        <Route path="products" element={<Products/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="offer" element={<BestOffer/>} />
        <Route path="blog" element={<Blog/>}/>
        <Route path="prewatches" element={<PremiumWatches/>} />
       </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;