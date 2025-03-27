import { Route, Routes } from "react-router"
import MainPage from "./components/pages/MainPage"
import ProductsFetcher from "./app/fetcher"
import ProductsDetails from "./components/pages/ProductsDetails"
import CartPage from "./components/pages/CartPage"
import FavoritePage from "./components/pages/FavoritePage"

function App() {

  return (
    <main className="box-border">
    <ProductsFetcher />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="details" element={<ProductsDetails />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Routes>
    </main>
  )
}

export default App
