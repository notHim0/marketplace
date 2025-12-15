import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import CustomWalletConnect from "./CustomWalletConnect";

const Navbar = ({ cartCount }) => {
	return (
		<nav className="bg-white shadow-md p-4 sticky top-0 z-10">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<Link to="/" className="text-lg md:text-2xl font-bold text-blue-600">
					Marketplace
				</Link>
				<Link
					to="/cart"
					className="relative flex items-center gap-2 hover:text-blue-600"
				>
					<ShoppingCart size={24} />
					<span className="font-semibold">Cart</span>
					{cartCount > 0 && (
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
							{cartCount}
						</span>
					)}
				</Link>
				<CustomWalletConnect />
			</div>
		</nav>
	);
};

export default Navbar;
