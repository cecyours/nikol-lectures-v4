import { useState } from "react";
import api from "../../api/axios";

function Products() {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
        stock: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setMessage("");
        setError("");

        try {

            const response = await api.post(
                "/products",
                {
                    ...formData,
                    price: Number(formData.price),
                    stock: Number(formData.stock),
                }
            );

            console.log(response.data);

            setMessage(
                "Product created successfully."
            );

            setFormData({
                name: "",
                description: "",
                price: "",
                image: "",
                category: "",
                stock: "",
            });

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="mx-auto max-w-3xl">

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Add Product
                </h1>

                <p className="mt-2 text-gray-600">
                    Create a new product for your store.
                </p>

            </div>


            {/* Success */}
            {message && (
                <div className="mb-5 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                    {message}
                </div>
            )}


            {/* Error */}
            {error && (
                <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                </div>
            )}


            <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
            >

                {/* Name */}
                <div>

                    <label className="mb-2 block text-sm font-medium">
                        Product Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    />

                </div>


                {/* Description */}
                <div>

                    <label className="mb-2 block text-sm font-medium">
                        Description
                    </label>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter product description"
                        rows="4"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    />

                </div>


                {/* Price + Stock */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <div>

                        <label className="mb-2 block text-sm font-medium">
                            Price
                        </label>

                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="799"
                            min="0"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                    </div>


                    <div>

                        <label className="mb-2 block text-sm font-medium">
                            Stock
                        </label>

                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            placeholder="50"
                            min="0"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        />

                    </div>

                </div>


                {/* Category */}
                <div>

                    <label className="mb-2 block text-sm font-medium">
                        Category
                    </label>

                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Accessories"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    />

                </div>


                {/* Image */}
                <div>

                    <label className="mb-2 block text-sm font-medium">
                        Image URL
                    </label>

                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    />

                </div>


                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading
                        ? "Creating..."
                        : "Create Product"}
                </button>

            </form>

        </div>
    );
}

export default Products;