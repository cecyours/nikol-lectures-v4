import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const { user } = useAuth();

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const step = Number(searchParams.get("step")) || 1;

    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("");

    const [addressLoading, setAddressLoading] = useState(false);
    const [addressError, setAddressError] = useState("");
    const [placingOrder, setPlacingOrder] = useState(false);
    const [placedOrder, setPlacedOrder] = useState(null);
    const [orderError, setOrderError] = useState("");


    /*
    ============================================================
    CART TOTAL
    ============================================================
    */

    const cartTotal = cart.reduce((total, item) => {
        const product = item.product || item;
        const price = product.price || 0;
        const quantity = item.quantity || 1;

        return total + price * quantity;
    }, 0);

    /*
    ============================================================
    CHANGE STEP
    ============================================================
    */

    const changeStep = (newStep) => {
        /*
        Step 1 is always accessible.

        Steps 2, 3 and 4 require authentication.
        */

        if (newStep >= 2 && !user) {
            navigate(
                `/login?from=${encodeURIComponent(
                    `/cart?step=${newStep}`
                )}`
            );

            return;
        }

        setSearchParams({
            step: newStep.toString(),
        });
    };

    /*
    ============================================================
    AUTH GUARD FOR DIRECT URL ACCESS
    ============================================================
    
    Example:

    Guest opens:

    /cart?step=2

    Redirect to:

    /login?from=/cart?step=2
    */

    useEffect(() => {
        if (step >= 2 && !user) {
            navigate(
                `/login?from=${encodeURIComponent(
                    `/cart?step=${step}`
                )}`,
                {
                    replace: true,
                }
            );
        }
    }, [user, step, navigate]);

    /*
    ============================================================
    GET ADDRESSES
    ============================================================
    
    Only fetch addresses when:
    
    1. User is logged in
    2. Current step is 2
    */

    useEffect(() => {
        if (!user || step !== 2) {
            return;
        }

        const getAddresses = async () => {
            try {
                setAddressLoading(true);
                setAddressError("");

                const response = await api.get("/addresses");

                const userAddresses =
                    response.data.addresses || [];

                setAddresses(userAddresses);

                /*
                Select default address automatically.
                If there is no default address,
                select the first address.
                */

                const defaultAddress =
                    userAddresses.find(
                        (address) => address.isDefault
                    );

                if (defaultAddress) {
                    setSelectedAddress(defaultAddress);
                } else if (userAddresses.length > 0) {
                    setSelectedAddress(userAddresses[0]);
                } else {
                    setSelectedAddress(null);
                }
            } catch (error) {
                console.error(
                    "Get Addresses Error:",
                    error
                );

                setAddressError(
                    error.response?.data?.message ||
                    "Failed to load addresses"
                );
            } finally {
                setAddressLoading(false);
            }
        };

        getAddresses();
    }, [step, user]);

    /*
    ============================================================
    LOGIN MESSAGE
    ============================================================
    
    Used when a guest tries to continue from Step 1.
    */

    const handleContinueToAddress = () => {
        if (!user) {
            navigate(
                `/login?from=${encodeURIComponent(
                    "/cart?step=2"
                )}`
            );

            return;
        }

        changeStep(2);
    };


    const handlePlaceOrder = async () => {
        try {
            setOrderError("");

            if (!selectedAddress) {
                setOrderError("Please select a delivery address.");
                return;
            }

            if (!paymentMethod) {
                setOrderError("Please select a payment method.");
                return;
            }

            if (!cart || cart.length === 0) {
                setOrderError("Your cart is empty.");
                return;
            }

            setPlacingOrder(true);

            const orderItems = cart.map((item) => {
                const product = item.product || item;

                return {
                    product: product._id,
                    quantity: item.quantity,
                };
            });

            const response = await api.post("/orders", {
                items: orderItems,
                addressId: selectedAddress._id,
                paymentMethod,
            });

            console.log("ORDER CREATED:", response.data);

            setPlacedOrder(response.data.order);

            changeStep(4);

            // Temporarily move to step 4
            changeStep(4);

        } catch (error) {
            console.error(
                "Place Order Error:",
                error
            );

            setOrderError(
                error.response?.data?.message ||
                "Failed to place order"
            );

        } finally {
            setPlacingOrder(false);
        }
    };
    /*
    ============================================================
    RENDER
    ============================================================
    */

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="mx-auto max-w-6xl px-6 py-10">

                {/* ================================= */}
                {/* HEADER */}
                {/* ================================= */}

                <div className="mb-10">

                    <h1 className="text-3xl font-bold">
                        Checkout
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Complete your order
                    </p>

                </div>

                {/* ================================= */}
                {/* STEP INDICATOR */}
                {/* ================================= */}

                <div className="mb-10 flex items-center justify-between">

                    <div
                        className={
                            step >= 1
                                ? "font-semibold"
                                : "text-gray-400"
                        }
                    >
                        1. Cart
                    </div>

                    <div
                        className={
                            step >= 2
                                ? "font-semibold"
                                : "text-gray-400"
                        }
                    >
                        2. Address
                    </div>

                    <div
                        className={
                            step >= 3
                                ? "font-semibold"
                                : "text-gray-400"
                        }
                    >
                        3. Payment
                    </div>

                    <div
                        className={
                            step >= 4
                                ? "font-semibold"
                                : "text-gray-400"
                        }
                    >
                        4. Confirmed
                    </div>

                </div>

                {/* ================================= */}
                {/* STEP 1 — CART */}
                {/* ================================= */}

                {step === 1 && (

                    <div className="grid gap-8 lg:grid-cols-3">

                        {/* ================================= */}
                        {/* CART ITEMS */}
                        {/* ================================= */}

                        <div className="lg:col-span-2">

                            <div className="rounded-2xl border bg-white">

                                <div className="border-b p-6">

                                    <h2 className="text-xl font-bold">
                                        Your Cart
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Review your items before continuing.
                                    </p>

                                </div>

                                {cart.length === 0 ? (

                                    <div className="p-10 text-center">

                                        <p className="text-gray-500">
                                            Your cart is empty.
                                        </p>

                                    </div>

                                ) : (

                                    <div>

                                        {cart.map((item) => {

                                            const product =
                                                item.product || item;

                                            const productId =
                                                product._id;

                                            const price =
                                                product.price || 0;

                                            const quantity =
                                                item.quantity || 1;

                                            return (

                                                <div
                                                    key={productId}
                                                    className="flex gap-5 border-b p-6 last:border-b-0"
                                                >

                                                    {/* IMAGE */}

                                                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">

                                                        {product.image ? (

                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="h-full w-full object-cover"
                                                            />

                                                        ) : (

                                                            <div className="flex h-full items-center justify-center text-xs text-gray-400">
                                                                No Image
                                                            </div>

                                                        )}

                                                    </div>

                                                    {/* DETAILS */}

                                                    <div className="flex min-w-0 flex-1 flex-col justify-between">

                                                        <div>

                                                            <h3 className="font-semibold">
                                                                {product.name}
                                                            </h3>

                                                            <p className="mt-1 text-sm text-gray-500">
                                                                ₹
                                                                {price.toLocaleString(
                                                                    "en-IN"
                                                                )}
                                                            </p>

                                                        </div>

                                                        <div className="mt-4 flex items-center justify-between">

                                                            {/* QUANTITY */}

                                                            <div className="flex items-center rounded-lg border">

                                                                <button
                                                                    onClick={() =>
                                                                        updateQuantity(
                                                                            productId,
                                                                            quantity - 1
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        quantity <= 1
                                                                    }
                                                                    className="px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                                                                >
                                                                    −
                                                                </button>

                                                                <span className="min-w-10 text-center text-sm font-medium">
                                                                    {quantity}
                                                                </span>

                                                                <button
                                                                    onClick={() =>
                                                                        updateQuantity(
                                                                            productId,
                                                                            quantity + 1
                                                                        )
                                                                    }
                                                                    className="px-3 py-2"
                                                                >
                                                                    +
                                                                </button>

                                                            </div>

                                                            {/* REMOVE */}

                                                            <button
                                                                onClick={() =>
                                                                    removeFromCart(
                                                                        productId
                                                                    )
                                                                }
                                                                className="text-sm font-medium text-red-600 hover:text-red-700"
                                                            >
                                                                Remove
                                                            </button>

                                                        </div>

                                                    </div>

                                                    {/* ITEM TOTAL */}

                                                    <div className="hidden text-right sm:block">

                                                        <p className="font-semibold">
                                                            ₹
                                                            {(
                                                                price *
                                                                quantity
                                                            ).toLocaleString(
                                                                "en-IN"
                                                            )}
                                                        </p>

                                                    </div>

                                                </div>

                                            );
                                        })}

                                    </div>

                                )}

                            </div>

                        </div>

                        {/* ================================= */}
                        {/* ORDER SUMMARY */}
                        {/* ================================= */}

                        <div>

                            <div className="sticky top-6 rounded-2xl border bg-white p-6">

                                <h2 className="text-xl font-bold">
                                    Order Summary
                                </h2>

                                <div className="mt-6 space-y-4">

                                    <div className="flex justify-between text-sm">

                                        <span className="text-gray-500">
                                            Subtotal
                                        </span>

                                        <span className="font-medium">
                                            ₹
                                            {cartTotal.toLocaleString(
                                                "en-IN"
                                            )}
                                        </span>

                                    </div>

                                    <div className="flex justify-between text-sm">

                                        <span className="text-gray-500">
                                            Delivery
                                        </span>

                                        <span className="font-medium text-green-600">
                                            FREE
                                        </span>

                                    </div>

                                    <div className="border-t pt-4">

                                        <div className="flex justify-between">

                                            <span className="font-semibold">
                                                Total
                                            </span>

                                            <span className="text-xl font-bold">
                                                ₹
                                                {cartTotal.toLocaleString(
                                                    "en-IN"
                                                )}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                {/* ================================= */}
                                {/* CONTINUE */}
                                {/* ================================= */}

                                <button
                                    disabled={cart.length === 0}
                                    onClick={handleContinueToAddress}
                                    className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    {user
                                        ? "Continue to Address"
                                        : "Login to Proceed"}
                                </button>

                                {/* ================================= */}
                                {/* GUEST MESSAGE */}
                                {/* ================================= */}

                                {!user && cart.length > 0 && (

                                    <p className="mt-3 text-center text-xs text-gray-500">
                                        Please login to continue with
                                        address and payment.
                                    </p>

                                )}

                            </div>

                        </div>

                    </div>

                )}

                {/* ================================= */}
                {/* STEP 2 — DELIVERY ADDRESS */}
                {/* ================================= */}

                {step === 2 && user && (

                    <div className="grid gap-8 lg:grid-cols-3">

                        {/* ================================= */}
                        {/* ADDRESS LIST */}
                        {/* ================================= */}

                        <div className="lg:col-span-2">

                            <div className="rounded-2xl border bg-white">

                                {/* HEADER */}

                                <div className="flex items-center justify-between border-b p-6">

                                    <div>

                                        <h2 className="text-2xl font-bold">
                                            Delivery Address
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Select where you want your order
                                            delivered.
                                        </p>

                                    </div>

                                    <Link
                                        to="/profile"
                                        className="text-sm font-medium underline underline-offset-4"
                                    >
                                        Manage Addresses
                                    </Link>

                                </div>

                                {/* ERROR */}

                                {addressError && (

                                    <div className="mx-6 mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                                        {addressError}
                                    </div>

                                )}

                                {/* LOADING */}

                                {addressLoading ? (

                                    <div className="p-10 text-center">

                                        <p className="text-gray-500">
                                            Loading your addresses...
                                        </p>

                                    </div>

                                ) : addresses.length === 0 ? (

                                    /* ================================= */
                                    /* NO ADDRESS */
                                    /* ================================= */

                                    <div className="p-10 text-center">

                                        <div className="mx-auto max-w-md">

                                            <h3 className="text-lg font-semibold">
                                                No delivery address
                                            </h3>

                                            <p className="mt-2 text-sm text-gray-500">
                                                You need to add a delivery
                                                address before continuing.
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    navigate(
                                                        `/profile?from=${encodeURIComponent(
                                                            "/cart?step=2"
                                                        )}`
                                                    )
                                                }
                                                className="mt-6 rounded-lg bg-black px-6 py-3 font-semibold text-white"
                                            >
                                                Add Address
                                            </button>

                                        </div>

                                    </div>

                                ) : (

                                    /* ================================= */
                                    /* ADDRESS LIST */
                                    /* ================================= */

                                    <div className="space-y-4 p-6">

                                        {addresses.map((address) => {

                                            const isSelected =
                                                selectedAddress?._id ===
                                                address._id;

                                            return (

                                                <button
                                                    key={address._id}
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedAddress(
                                                            address
                                                        )
                                                    }
                                                    className={`w-full rounded-xl border p-5 text-left transition ${isSelected
                                                        ? "border-black ring-1 ring-black"
                                                        : "border-gray-200 hover:border-gray-400"
                                                        }`}
                                                >

                                                    <div className="flex gap-4">

                                                        {/* RADIO */}

                                                        <div className="pt-1">

                                                            <div
                                                                className={`flex h-5 w-5 items-center justify-center rounded-full border ${isSelected
                                                                    ? "border-black"
                                                                    : "border-gray-400"
                                                                    }`}
                                                            >

                                                                {isSelected && (

                                                                    <div className="h-2.5 w-2.5 rounded-full bg-black" />

                                                                )}

                                                            </div>

                                                        </div>

                                                        {/* ADDRESS DETAILS */}

                                                        <div className="flex-1">

                                                            <div className="flex flex-wrap items-center gap-2">

                                                                <h3 className="font-semibold">
                                                                    {address.label}
                                                                </h3>

                                                                {address.isDefault && (

                                                                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                                                        Default
                                                                    </span>

                                                                )}

                                                            </div>

                                                            <div className="mt-3 space-y-1 text-sm text-gray-600">

                                                                <p className="font-medium text-gray-900">
                                                                    {address.fullName}
                                                                </p>

                                                                <p>
                                                                    {address.phone}
                                                                </p>

                                                                <p className="pt-2">
                                                                    {address.addressLine1}
                                                                </p>

                                                                {address.addressLine2 && (

                                                                    <p>
                                                                        {address.addressLine2}
                                                                    </p>

                                                                )}

                                                                <p>
                                                                    {address.city},{" "}
                                                                    {address.state}
                                                                    {" - "}
                                                                    {address.postalCode}
                                                                </p>

                                                                <p>
                                                                    {address.country}
                                                                </p>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </button>

                                            );

                                        })}

                                    </div>

                                )}

                            </div>

                        </div>

                        {/* ================================= */}
                        {/* DELIVERY SUMMARY */}
                        {/* ================================= */}

                        <div>

                            <div className="sticky top-6 rounded-2xl border bg-white p-6">

                                <h2 className="text-xl font-bold">
                                    Delivery Details
                                </h2>

                                {selectedAddress ? (

                                    <div className="mt-5">

                                        <div className="rounded-xl bg-gray-50 p-4">

                                            <div className="flex items-center justify-between">

                                                <h3 className="font-semibold">
                                                    {selectedAddress.label}
                                                </h3>

                                                {selectedAddress.isDefault && (

                                                    <span className="text-xs font-medium text-green-600">
                                                        Default
                                                    </span>

                                                )}

                                            </div>

                                            <div className="mt-3 space-y-1 text-sm text-gray-600">

                                                <p className="font-medium text-gray-900">
                                                    {selectedAddress.fullName}
                                                </p>

                                                <p>
                                                    {selectedAddress.phone}
                                                </p>

                                                <p className="pt-2">
                                                    {selectedAddress.addressLine1}
                                                </p>

                                                {selectedAddress.addressLine2 && (

                                                    <p>
                                                        {selectedAddress.addressLine2}
                                                    </p>

                                                )}

                                                <p>
                                                    {selectedAddress.city},{" "}
                                                    {selectedAddress.state}
                                                    {" - "}
                                                    {selectedAddress.postalCode}
                                                </p>

                                                <p>
                                                    {selectedAddress.country}
                                                </p>

                                            </div>

                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                navigate(
                                                    `/profile?from=${encodeURIComponent(
                                                        "/cart?step=2"
                                                    )}`
                                                )
                                            }
                                            className="mt-4 text-sm font-medium underline underline-offset-4"
                                        >
                                            Change or manage addresses
                                        </button>

                                    </div>

                                ) : (

                                    <p className="mt-5 text-sm text-gray-500">
                                        Select a delivery address
                                        to continue.
                                    </p>

                                )}

                                {/* ACTIONS */}

                                <div className="mt-8 flex gap-3">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            changeStep(1)
                                        }
                                        className="flex-1 rounded-lg border px-4 py-3 font-medium hover:bg-gray-50"
                                    >
                                        Back
                                    </button>

                                    <button
                                        type="button"
                                        disabled={!selectedAddress}
                                        onClick={() =>
                                            changeStep(3)
                                        }
                                        className="flex-1 rounded-lg bg-black px-4 py-3 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        Continue
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                )}

                {/* ================================= */}
                {/* STEP 3 — PAYMENT */}
                {/* ================================= */}

                {/* ========================================= */}
                {/* STEP 3 — PAYMENT */}
                {/* ========================================= */}

                {step === 3 && (

                    <div className="grid gap-8 lg:grid-cols-3">

                        {/* ================================= */}
                        {/* LEFT SIDE */}
                        {/* ================================= */}

                        <div className="space-y-6 lg:col-span-2">

                            {/* ============================= */}
                            {/* DELIVERY ADDRESS */}
                            {/* ============================= */}

                            <div className="rounded-2xl border bg-white p-6">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <h2 className="text-xl font-bold">
                                            Delivery Address
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Your order will be delivered here.
                                        </p>

                                    </div>


                                    <button
                                        type="button"
                                        onClick={() => changeStep(2)}
                                        className="text-sm font-medium underline underline-offset-4"
                                    >
                                        Change
                                    </button>

                                </div>


                                {selectedAddress && (

                                    <div className="mt-5 rounded-xl bg-gray-50 p-5">

                                        <div className="flex items-center gap-2">

                                            <h3 className="font-semibold">
                                                {selectedAddress.label}
                                            </h3>


                                            {selectedAddress.isDefault && (

                                                <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                                    Default
                                                </span>

                                            )}

                                        </div>


                                        <div className="mt-3 space-y-1 text-sm text-gray-600">

                                            <p className="font-medium text-gray-900">
                                                {selectedAddress.fullName}
                                            </p>

                                            <p>
                                                {selectedAddress.phone}
                                            </p>

                                            <p className="pt-2">
                                                {selectedAddress.addressLine1}
                                            </p>

                                            {selectedAddress.addressLine2 && (

                                                <p>
                                                    {selectedAddress.addressLine2}
                                                </p>

                                            )}

                                            <p>
                                                {selectedAddress.city},{" "}
                                                {selectedAddress.state} -{" "}
                                                {selectedAddress.postalCode}
                                            </p>

                                            <p>
                                                {selectedAddress.country}
                                            </p>

                                        </div>

                                    </div>

                                )}

                            </div>


                            {/* ============================= */}
                            {/* ORDER ITEMS */}
                            {/* ============================= */}

                            <div className="rounded-2xl border bg-white">

                                <div className="border-b p-6">

                                    <h2 className="text-xl font-bold">
                                        Order Items
                                    </h2>

                                </div>


                                <div>

                                    {cart.map((item) => {

                                        const product =
                                            item.product || item;

                                        const price =
                                            product.price || 0;

                                        const quantity =
                                            item.quantity || 1;

                                        return (

                                            <div
                                                key={product._id}
                                                className="flex gap-4 border-b p-6 last:border-b-0"
                                            >

                                                {/* IMAGE */}

                                                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">

                                                    {product.image ? (

                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="h-full w-full object-cover"
                                                        />

                                                    ) : (

                                                        <div className="flex h-full items-center justify-center text-xs text-gray-400">
                                                            No Image
                                                        </div>

                                                    )}

                                                </div>


                                                {/* DETAILS */}

                                                <div className="flex flex-1 items-center justify-between">

                                                    <div>

                                                        <h3 className="font-semibold">
                                                            {product.name}
                                                        </h3>

                                                        <p className="mt-1 text-sm text-gray-500">
                                                            ₹
                                                            {price.toLocaleString(
                                                                "en-IN"
                                                            )}
                                                            {" × "}
                                                            {quantity}
                                                        </p>

                                                    </div>


                                                    <p className="font-semibold">

                                                        ₹
                                                        {(
                                                            price *
                                                            quantity
                                                        ).toLocaleString(
                                                            "en-IN"
                                                        )}

                                                    </p>

                                                </div>

                                            </div>

                                        );

                                    })}

                                </div>

                            </div>


                            {/* ============================= */}
                            {/* PAYMENT METHOD */}
                            {/* ============================= */}

                            <div className="rounded-2xl border bg-white p-6">

                                <h2 className="text-xl font-bold">
                                    Payment Method
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Select how you want to pay.
                                </p>


                                <div className="mt-6 space-y-3">

                                    {/* COD */}

                                    <label
                                        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-5 transition ${paymentMethod === "cod"
                                            ? "border-black ring-1 ring-black"
                                            : "hover:border-gray-400"
                                            }`}
                                    >

                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={
                                                paymentMethod === "cod"
                                            }
                                            onChange={(e) =>
                                                setPaymentMethod(
                                                    e.target.value
                                                )
                                            }
                                            className="h-4 w-4"
                                        />


                                        <div>

                                            <p className="font-semibold">
                                                Cash on Delivery
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Pay when your order is delivered.
                                            </p>

                                        </div>

                                    </label>


                                    {/* ONLINE */}




                                    <label
                                        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-5 transition ${paymentMethod === "online"
                                            ? "border-black ring-1 ring-black"
                                            : "hover:border-gray-400"
                                            }`}
                                    >

                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="online"
                                            checked={
                                                paymentMethod === "online"
                                            }
                                            onChange={(e) =>
                                                setPaymentMethod(
                                                    e.target.value
                                                )
                                            }
                                            className="h-4 w-4"
                                        />


                                        <div>

                                            <p className="font-semibold">
                                                Online Payment
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Pay securely using online payment.
                                            </p>

                                        </div>

                                    </label>

                                </div>

                            </div>

                        </div>


                        {/* ================================= */}
                        {/* RIGHT — FINAL SUMMARY */}
                        {/* ================================= */}

                        <div>

                            <div className="sticky top-6 rounded-2xl border bg-white p-6">

                                <h2 className="text-xl font-bold">
                                    Order Summary
                                </h2>


                                {orderError && (
                                    <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                                        {orderError}
                                    </div>
                                )}



                                {/* SUBTOTAL */}

                                <div className="mt-6 space-y-4">

                                    <div className="flex justify-between text-sm">

                                        <span className="text-gray-500">
                                            Items
                                        </span>

                                        <span>
                                            {cart.reduce(
                                                (total, item) =>
                                                    total +
                                                    item.quantity,
                                                0
                                            )}
                                        </span>

                                    </div>


                                    <div className="flex justify-between text-sm">

                                        <span className="text-gray-500">
                                            Subtotal
                                        </span>

                                        <span>

                                            ₹
                                            {cart
                                                .reduce(
                                                    (total, item) => {

                                                        const product =
                                                            item.product ||
                                                            item;

                                                        return (
                                                            total +
                                                            (product.price || 0) *
                                                            item.quantity
                                                        );

                                                    },
                                                    0
                                                )
                                                .toLocaleString(
                                                    "en-IN"
                                                )}

                                        </span>

                                    </div>


                                    <div className="flex justify-between text-sm">

                                        <span className="text-gray-500">
                                            Delivery
                                        </span>

                                        <span className="font-medium text-green-600">
                                            FREE
                                        </span>

                                    </div>


                                    <div className="border-t pt-4">

                                        <div className="flex justify-between">

                                            <span className="font-semibold">
                                                Total
                                            </span>

                                            <span className="text-xl font-bold">

                                                ₹
                                                {cart
                                                    .reduce(
                                                        (total, item) => {

                                                            const product =
                                                                item.product ||
                                                                item;

                                                            return (
                                                                total +
                                                                (product.price || 0) *
                                                                item.quantity
                                                            );

                                                        },
                                                        0
                                                    )
                                                    .toLocaleString(
                                                        "en-IN"
                                                    )}

                                            </span>

                                        </div>

                                    </div>

                                </div>


                                {/* PAYMENT SELECTED */}

                                {paymentMethod && (

                                    <div className="mt-5 rounded-lg bg-gray-50 p-4">

                                        <p className="text-xs text-gray-500">
                                            Payment Method
                                        </p>

                                        <p className="mt-1 font-medium">

                                            {paymentMethod === "cod"
                                                ? "Cash on Delivery"
                                                : "Online Payment"}

                                        </p>

                                    </div>

                                )}


                                {/* ACTIONS */}

                                <div className="mt-6 flex gap-3">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            changeStep(2)
                                        }
                                        className="flex-1 rounded-lg border px-4 py-3 font-medium hover:bg-gray-50"
                                    >
                                        Back
                                    </button>


                                    <button
                                        type="button"
                                        disabled={
                                            placingOrder ||
                                            !paymentMethod ||
                                            !selectedAddress ||
                                            cart.length === 0
                                        }
                                        onClick={handlePlaceOrder}
                                        className="flex-1 rounded-lg bg-black px-4 py-3 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        {placingOrder
                                            ? "Placing Order..."
                                            : "Place Order"}
                                    </button>

                                </div>


                                <p className="mt-4 text-center text-xs text-gray-400">
                                    By placing this order, you agree to our terms and conditions.
                                </p>

                            </div>

                        </div>

                    </div>

                )}

                {/* ================================= */}
                {/* STEP 4 — CONFIRMED */}
                {/* ================================= */}
                {/* ========================================= */}
                {/* STEP 4 — ORDER CONFIRMED */}
                {/* ========================================= */}

                {step === 4 && placedOrder && (

                    <div className="mx-auto max-w-4xl">

                        {/* ================================= */}
                        {/* SUCCESS HEADER */}
                        {/* ================================= */}

                        <div className="rounded-2xl border bg-white p-8 text-center">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

                                <span className="text-3xl text-green-600">
                                    ✓
                                </span>

                            </div>


                            <h1 className="mt-5 text-3xl font-bold">
                                Order Confirmed!
                            </h1>


                            <p className="mt-2 text-gray-500">
                                Thank you for your order.
                                Your order has been placed successfully.
                            </p>


                            <div className="mt-4">

                                <p className="text-sm text-gray-500">
                                    Order ID
                                </p>

                                <p className="mt-1 font-mono text-sm font-semibold">
                                    {placedOrder._id}
                                </p>

                            </div>

                        </div>


                        {/* ================================= */}
                        {/* ORDER DETAILS */}
                        {/* ================================= */}

                        <div className="mt-6 grid gap-6 md:grid-cols-2">

                            {/* ============================= */}
                            {/* DELIVERY ADDRESS */}
                            {/* ============================= */}

                            <div className="rounded-2xl border bg-white p-6">

                                <h2 className="text-xl font-bold">
                                    Delivery Address
                                </h2>


                                <div className="mt-4 space-y-1 text-sm text-gray-600">

                                    <p className="font-semibold text-gray-900">
                                        {placedOrder.deliveryAddress.fullName}
                                    </p>

                                    <p>
                                        {placedOrder.deliveryAddress.phone}
                                    </p>

                                    <p className="pt-2">
                                        {placedOrder.deliveryAddress.addressLine1}
                                    </p>

                                    {placedOrder.deliveryAddress.addressLine2 && (

                                        <p>
                                            {placedOrder.deliveryAddress.addressLine2}
                                        </p>

                                    )}

                                    <p>
                                        {placedOrder.deliveryAddress.city},{" "}
                                        {placedOrder.deliveryAddress.state}
                                    </p>

                                    <p>
                                        {placedOrder.deliveryAddress.postalCode}
                                    </p>

                                    <p>
                                        {placedOrder.deliveryAddress.country}
                                    </p>

                                </div>

                            </div>


                            {/* ============================= */}
                            {/* PAYMENT */}
                            {/* ============================= */}

                            <div className="rounded-2xl border bg-white p-6">

                                <h2 className="text-xl font-bold">
                                    Payment
                                </h2>


                                <div className="mt-4 space-y-4">

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Payment Method
                                        </p>

                                        <p className="mt-1 font-semibold">
                                            {placedOrder.paymentMethod === "cod"
                                                ? "Cash on Delivery"
                                                : "Online Payment"}
                                        </p>

                                    </div>


                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Payment Status
                                        </p>

                                        <span className="mt-1 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium capitalize text-yellow-700">
                                            {placedOrder.paymentStatus}
                                        </span>

                                    </div>


                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Order Status
                                        </p>

                                        <span className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
                                            {placedOrder.orderStatus}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================================= */}
                        {/* ORDER ITEMS */}
                        {/* ================================= */}

                        <div className="mt-6 rounded-2xl border bg-white">

                            <div className="border-b p-6">

                                <h2 className="text-xl font-bold">
                                    Order Items
                                </h2>

                            </div>


                            <div>

                                {placedOrder.items.map(
                                    (item, index) => (

                                        <div
                                            key={index}
                                            className="flex gap-4 border-b p-6 last:border-b-0"
                                        >

                                            {/* IMAGE */}

                                            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">

                                                {item.image ? (

                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover"
                                                    />

                                                ) : (

                                                    <div className="flex h-full items-center justify-center text-xs text-gray-400">
                                                        No Image
                                                    </div>

                                                )}

                                            </div>


                                            {/* DETAILS */}

                                            <div className="flex flex-1 items-center justify-between">

                                                <div>

                                                    <h3 className="font-semibold">
                                                        {item.name}
                                                    </h3>

                                                    <p className="mt-1 text-sm text-gray-500">
                                                        ₹
                                                        {item.price.toLocaleString(
                                                            "en-IN"
                                                        )}
                                                        {" × "}
                                                        {item.quantity}
                                                    </p>

                                                </div>


                                                <p className="font-semibold">

                                                    ₹
                                                    {item.total.toLocaleString(
                                                        "en-IN"
                                                    )}

                                                </p>

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>


                        {/* ================================= */}
                        {/* PRICE SUMMARY */}
                        {/* ================================= */}

                        <div className="mt-6 rounded-2xl border bg-white p-6">

                            <h2 className="text-xl font-bold">
                                Price Summary
                            </h2>


                            <div className="mt-5 space-y-4">

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Subtotal
                                    </span>

                                    <span>
                                        ₹
                                        {placedOrder.subtotal.toLocaleString(
                                            "en-IN"
                                        )}
                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Delivery
                                    </span>

                                    {placedOrder.deliveryCharge === 0 ? (

                                        <span className="font-medium text-green-600">
                                            FREE
                                        </span>

                                    ) : (

                                        <span>
                                            ₹
                                            {placedOrder.deliveryCharge.toLocaleString(
                                                "en-IN"
                                            )}
                                        </span>

                                    )}

                                </div>


                                <div className="border-t pt-4">

                                    <div className="flex justify-between">

                                        <span className="text-lg font-bold">
                                            Total
                                        </span>

                                        <span className="text-xl font-bold">

                                            ₹
                                            {placedOrder.totalAmount.toLocaleString(
                                                "en-IN"
                                            )}

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================================= */}
                        {/* ACTIONS */}
                        {/* ================================= */}

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/products")
                                }
                                className="flex-1 rounded-lg border px-5 py-3 font-semibold hover:bg-gray-50"
                            >
                                Continue Shopping
                            </button>


                            <button
                                type="button"
                                onClick={() =>
                                    navigate(
                                        `/orders/${placedOrder._id}`
                                    )
                                }
                                className="flex-1 rounded-lg bg-black px-5 py-3 font-semibold text-white hover:bg-gray-800"
                            >
                                View Order
                            </button>

                        </div>

                    </div>

                )}
            </div>

        </div>
    );
}

export default Cart;

