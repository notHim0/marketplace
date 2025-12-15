import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { initialProducts } from "./data/product";

function App() {
	const [products, setProducts] = useState(initialProducts);
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		if (!cart.find((item) => item.id === product.id)) {
			setCart([...cart, product]);
		} else {
			alert("Item already in cart!");
		}
	};

	const handlePay = () => {
		const remainingProducts = products.filter(
			(product) => !cart.find((cartItem) => cartItem.id === product.id)
		);

		setProducts(remainingProducts);
		setCart([]);
		alert("Payment Successful! Items removed from gallery.");
	};

	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gray-50 text-gray-800">
				<Navbar cartCount={cart.length} />
				<div className="p-8 max-w-7xl mx-auto">
					<Routes>
						<Route
							path="/"
							element={<Home products={products} addToCart={addToCart} />}
						/>
						<Route
							path="/cart"
							element={<Cart cart={cart} handlePay={handlePay} />}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
