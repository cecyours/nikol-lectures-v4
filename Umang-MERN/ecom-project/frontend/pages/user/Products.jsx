import { useEffect, useState } from "react";
import api from "../../api/axios";

import { useCart } from "../../context/CartContext";
function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { addToCart } = useCart();
    const getProducts = async () => {
        try {
            const response = await api.get("/products");

            console.log(response.data);

            setProducts(response.data.products);

        } catch (error) {
            console.error(error);

            setError(
                error.response?.data?.message ||
                "Failed to load products"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center">
                <p className="text-gray-500">
                    Loading products...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh]">

            <div className="mx-auto max-w-7xl px-6 py-10">

                {/* Heading */}
                <div className="mb-10">

                    <h1 className="text-4xl font-bold text-gray-900">
                        Products
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Explore our products.
                    </p>

                </div>


                {/* Error */}
                {error && (
                    <div className="rounded-lg bg-red-50 px-4 py-3 text-red-600">
                        {error}
                    </div>
                )}


                {/* Empty */}
                {!error && products.length === 0 && (
                    <div className="py-20 text-center">

                        <h2 className="text-xl font-semibold">
                            No products found
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Check back later for new products.
                        </p>

                    </div>
                )}


                {/* Products */}
                {products.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {products.map((product) => (

                            <div
                                key={product._id}
                                className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
                            >

                                {/* Image */}
                                <div className="flex h-56 items-center justify-center bg-gray-100">

                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-400">
                                            No Image
                                        </span>
                                    )}

                                </div>


                                {/* Details */}
                                <div className="p-5">

                                    <p className="text-sm text-gray-500">
                                        {product.category}
                                    </p>

                                    <h2 className="mt-1 text-lg font-semibold">
                                        {product.name}
                                    </h2>

                                    <p className="mt-2 text-gray-600">
                                        {product.description}
                                    </p>

                                    <p className="mt-4 text-xl font-bold">
                                        ₹{product.price}
                                    </p>


                                    {/* Stock */}
                                    <p className="mt-1 text-sm text-gray-500">
                                        {product.stock > 0
                                            ? `${product.stock} available`
                                            : "Out of stock"}
                                    </p>


                                    {/* Add Cart */}
                                    <button
                                        disabled={product.stock === 0}
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>

                            </div>

                        ))}

                    </div>
                )}

            </div>

        </div>
    );
}

export default Products;