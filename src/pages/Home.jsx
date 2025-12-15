const Home = ({ products, addToCart }) => {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-6">Gallery</h1>

			{products.length === 0 ? (
				<div className="text-center text-gray-500 mt-20">
					<h2 className="text-xl">Everything is sold out!</h2>
					<p>Refresh the page to restock.</p>
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<div
							key={product.id}
							className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
						>
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-lg font-semibold">{product.name}</h3>
								<div className="flex justify-between items-center mt-4">
									<span className="text-xl font-bold">₹{product.price}</span>
									<button
										onClick={() => addToCart(product)}
										className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
									>
										Buy
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
