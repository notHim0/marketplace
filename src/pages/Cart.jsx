import { useNavigate } from "react-router-dom";

const Cart = ({ cart, handlePay }) => {
	const navigate = useNavigate();
	const total = cart.reduce((sum, item) => sum + item.price, 0);

	const onPay = () => {
		handlePay();
		navigate("/");
	};

	return (
		<div className="max-w-2xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

			{cart.length === 0 ? (
				<p className="text-gray-500">Your cart is empty.</p>
			) : (
				<div className="bg-white rounded-lg shadow p-6">
					{cart.map((item, index) => (
						<div
							key={index}
							className="flex justify-between items-center border-b py-4 last:border-0"
						>
							<div className="flex items-center gap-4">
								<img
									src={item.image}
									alt={item.name}
									className="w-16 h-16 object-cover rounded"
								/>
								<span className="font-medium text-lg">{item.name}</span>
							</div>
							<span className="font-bold">${item.price}</span>
						</div>
					))}

					<div className="border-t mt-6 pt-6 flex justify-between items-center">
						<span className="text-xl font-bold">Total:</span>
						<span className="text-2xl font-bold text-blue-600">${total}</span>
					</div>

					<button
						onClick={onPay}
						className="w-full bg-green-600 text-white text-lg font-bold py-3 rounded-lg mt-6 hover:bg-green-700 transition"
					>
						Pay Now
					</button>
				</div>
			)}
		</div>
	);
};

export default Cart;
