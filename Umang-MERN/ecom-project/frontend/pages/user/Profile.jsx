import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

function Profile() {

    const { user } = useAuth();

    const [addresses, setAddresses] = useState([]);

    const [loading, setLoading] = useState(true);

    const [showForm, setShowForm] = useState(false);

    const [editingId, setEditingId] = useState(null);

    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        label: "Home",
        fullName: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
        isDefault: false,
    });


    // ==================================================
    // GET ADDRESSES
    // ==================================================

    const getAddresses = async () => {

        try {

            setLoading(true);

            const response =
                await api.get("/addresses");

            setAddresses(
                response.data.addresses
            );

        } catch (error) {

            console.error(
                "Get Addresses Error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Failed to load addresses"
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        getAddresses();

    }, []);


    // ==================================================
    // HANDLE INPUT
    // ==================================================

    const handleChange = (e) => {

        const { name, value, type, checked } =
            e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));
    };


    // ==================================================
    // RESET FORM
    // ==================================================

    const resetForm = () => {

        setFormData({
            label: "Home",
            fullName: "",
            phone: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            postalCode: "",
            country: "India",
            isDefault: false,
        });

        setEditingId(null);

        setShowForm(false);
    };


    // ==================================================
    // EDIT ADDRESS
    // ==================================================

    const handleEdit = (address) => {

        setFormData({
            label: address.label,
            fullName: address.fullName,
            phone: address.phone,
            addressLine1:
                address.addressLine1,
            addressLine2:
                address.addressLine2 || "",
            city: address.city,
            state: address.state,
            postalCode:
                address.postalCode,
            country:
                address.country || "India",
            isDefault:
                address.isDefault,
        });

        setEditingId(address._id);

        setShowForm(true);
    };


    // ==================================================
    // SUBMIT ADDRESS
    // ==================================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            if (editingId) {

                await api.put(
                    `/addresses/${editingId}`,
                    formData
                );

            } else {

                await api.post(
                    "/addresses",
                    formData
                );
            }


            await getAddresses();

            resetForm();

        } catch (error) {

            console.error(
                "Save Address Error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Failed to save address"
            );
        }
    };


    // ==================================================
    // DELETE ADDRESS
    // ==================================================

    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this address?"
            );

        if (!confirmDelete) {
            return;
        }


        try {

            await api.delete(
                `/addresses/${id}`
            );

            await getAddresses();

        } catch (error) {

            console.error(
                "Delete Address Error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Failed to delete address"
            );
        }
    };


    // ==================================================
    // SET DEFAULT
    // ==================================================

    const handleSetDefault = async (id) => {

        try {

            await api.put(
                `/addresses/${id}/default`
            );

            await getAddresses();

        } catch (error) {

            console.error(
                "Set Default Error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Failed to set default address"
            );
        }
    };


    return (
        <div className="min-h-screen bg-gray-50">

            <div className="mx-auto max-w-5xl px-6 py-10">


                {/* ===================================== */}
                {/* PROFILE */}
                {/* ===================================== */}

                <div className="mb-8 rounded-2xl border bg-white p-6">

                    <h1 className="text-3xl font-bold">
                        My Profile
                    </h1>

                    <div className="mt-6 space-y-3">

                        <div>
                            <p className="text-sm text-gray-500">
                                Name
                            </p>

                            <p className="font-medium">
                                {user?.name}
                            </p>
                        </div>


                        <div>
                            <p className="text-sm text-gray-500">
                                Email
                            </p>

                            <p className="font-medium">
                                {user?.email}
                            </p>
                        </div>

                    </div>

                </div>


                {/* ===================================== */}
                {/* ADDRESSES */}
                {/* ===================================== */}

                <div className="rounded-2xl border bg-white p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <h2 className="text-2xl font-bold">
                                My Addresses
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Manage your delivery addresses
                            </p>

                        </div>


                        {!showForm && (
                            <button
                                onClick={() =>
                                    setShowForm(true)
                                }
                                className="rounded-lg bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-800"
                            >
                                + Add Address
                            </button>
                        )}

                    </div>


                    {/* ERROR */}

                    {error && (
                        <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}


                    {/* ================================= */}
                    {/* ADDRESS FORM */}
                    {/* ================================= */}

                    {showForm && (

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 rounded-xl border bg-gray-50 p-6"
                        >

                            <div className="mb-6 flex items-center justify-between">

                                <h3 className="text-xl font-semibold">
                                    {editingId
                                        ? "Edit Address"
                                        : "Add New Address"}
                                </h3>

                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="text-sm text-gray-500 hover:text-black"
                                >
                                    Cancel
                                </button>

                            </div>


                            {/* Label */}

                            <div className="mb-5">

                                <label className="mb-2 block text-sm font-medium">
                                    Address Type
                                </label>

                                <div className="flex gap-3">

                                    {[
                                        "Home",
                                        "Work",
                                        "Other",
                                    ].map((label) => (

                                        <button
                                            key={label}
                                            type="button"
                                            onClick={() =>
                                                setFormData(
                                                    (prev) => ({
                                                        ...prev,
                                                        label,
                                                    })
                                                )
                                            }
                                            className={`rounded-lg border px-5 py-2.5 ${formData.label ===
                                                    label
                                                    ? "border-black bg-black text-white"
                                                    : "bg-white"
                                                }`}
                                        >
                                            {label}
                                        </button>

                                    ))}

                                </div>

                            </div>


                            {/* Name + Phone */}

                            <div className="grid gap-5 sm:grid-cols-2">

                                <div>

                                    <label className="mb-2 block text-sm font-medium">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="fullName"
                                        value={
                                            formData.fullName
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        required
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                                    />

                                </div>


                                <div>

                                    <label className="mb-2 block text-sm font-medium">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={
                                            formData.phone
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        required
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                                    />

                                </div>

                            </div>


                            {/* Address */}

                            <div className="mt-5">

                                <label className="mb-2 block text-sm font-medium">
                                    Address Line 1
                                </label>

                                <input
                                    type="text"
                                    name="addressLine1"
                                    value={
                                        formData.addressLine1
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                                />

                            </div>


                            <div className="mt-5">

                                <label className="mb-2 block text-sm font-medium">
                                    Address Line 2
                                </label>

                                <input
                                    type="text"
                                    name="addressLine2"
                                    value={
                                        formData.addressLine2
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Apartment, landmark, etc."
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                                />

                            </div>


                            {/* City / State / PIN */}

                            <div className="mt-5 grid gap-5 sm:grid-cols-3">

                                <div>

                                    <label className="mb-2 block text-sm font-medium">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        name="city"
                                        value={
                                            formData.city
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        required
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                                    />

                                </div>


                                <div>

                                    <label className="mb-2 block text-sm font-medium">
                                        State
                                    </label>

                                    <input
                                        type="text"
                                        name="state"
                                        value={
                                            formData.state
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        required
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                                    />

                                </div>


                                <div>

                                    <label className="mb-2 block text-sm font-medium">
                                        Postal Code
                                    </label>

                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={
                                            formData.postalCode
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        required
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                                    />

                                </div>

                            </div>


                            {/* Country */}

                            <div className="mt-5">

                                <label className="mb-2 block text-sm font-medium">
                                    Country
                                </label>

                                <input
                                    type="text"
                                    name="country"
                                    value={
                                        formData.country
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                                />

                            </div>


                            {/* Default */}

                            <label className="mt-5 flex cursor-pointer items-center gap-3">

                                <input
                                    type="checkbox"
                                    name="isDefault"
                                    checked={
                                        formData.isDefault
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="h-4 w-4"
                                />

                                <span className="text-sm">
                                    Make this my default address
                                </span>

                            </label>


                            {/* Submit */}

                            <button
                                type="submit"
                                className="mt-6 rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
                            >
                                {editingId
                                    ? "Update Address"
                                    : "Save Address"}
                            </button>

                        </form>
                    )}


                    {/* ================================= */}
                    {/* ADDRESS LIST */}
                    {/* ================================= */}

                    <div className="mt-8">

                        {loading ? (

                            <p className="py-10 text-center text-gray-500">
                                Loading addresses...
                            </p>

                        ) : addresses.length === 0 ? (

                            <div className="rounded-xl border border-dashed py-12 text-center">

                                <p className="text-gray-500">
                                    You don't have any saved addresses.
                                </p>

                                {!showForm && (
                                    <button
                                        onClick={() =>
                                            setShowForm(true)
                                        }
                                        className="mt-4 font-medium underline"
                                    >
                                        Add your first address
                                    </button>
                                )}

                            </div>

                        ) : (

                            <div className="grid gap-5 md:grid-cols-2">

                                {addresses.map(
                                    (address) => (

                                        <div
                                            key={
                                                address._id
                                            }
                                            className="rounded-xl border p-5"
                                        >

                                            {/* Header */}

                                            <div className="flex items-start justify-between">

                                                <div className="flex items-center gap-2">

                                                    <span>
                                                        {address.label ===
                                                            "Home"
                                                            ? "🏠"
                                                            : address.label ===
                                                                "Work"
                                                                ? "💼"
                                                                : "📍"}
                                                    </span>

                                                    <h3 className="font-semibold">
                                                        {
                                                            address.label
                                                        }
                                                    </h3>

                                                </div>


                                                {address.isDefault && (

                                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                                        Default
                                                    </span>

                                                )}

                                            </div>


                                            {/* Details */}

                                            <div className="mt-4 space-y-1 text-sm text-gray-600">

                                                <p className="font-medium text-gray-900">
                                                    {
                                                        address.fullName
                                                    }
                                                </p>

                                                <p>
                                                    {
                                                        address.phone
                                                    }
                                                </p>

                                                <p className="pt-2">
                                                    {
                                                        address.addressLine1
                                                    }
                                                </p>

                                                {address.addressLine2 && (
                                                    <p>
                                                        {
                                                            address.addressLine2
                                                        }
                                                    </p>
                                                )}

                                                <p>
                                                    {
                                                        address.city
                                                    }
                                                    ,{" "}
                                                    {
                                                        address.state
                                                    }{" "}
                                                    -{" "}
                                                    {
                                                        address.postalCode
                                                    }
                                                </p>

                                                <p>
                                                    {
                                                        address.country
                                                    }
                                                </p>

                                            </div>


                                            {/* Actions */}

                                            <div className="mt-5 flex flex-wrap gap-3 border-t pt-4">

                                                <button
                                                    onClick={() =>
                                                        handleEdit(
                                                            address
                                                        )
                                                    }
                                                    className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                                                >
                                                    Edit
                                                </button>


                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            address._id
                                                        )
                                                    }
                                                    className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                                                >
                                                    Delete
                                                </button>


                                                {!address.isDefault && (

                                                    <button
                                                        onClick={() =>
                                                            handleSetDefault(
                                                                address._id
                                                            )
                                                        }
                                                        className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                                                    >
                                                        Set Default
                                                    </button>

                                                )}

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;