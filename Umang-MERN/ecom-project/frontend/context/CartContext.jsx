import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import api from "../api/axios";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const { user, loading: authLoading } = useAuth();

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);


    const mergeGuestCart = async () => {

        const savedCart =
            localStorage.getItem("cart");


        if (!savedCart) {
            return false;
        }


        const guestCart =
            JSON.parse(savedCart);


        if (!guestCart.length) {

            localStorage.removeItem("cart");

            return false;
        }


        try {

            for (const item of guestCart) {

                const productId =
                    item.product?._id || item._id;

                await api.post("/cart", {
                    productId,
                    quantity: item.quantity,
                });
            }


            localStorage.removeItem("cart");

            return true;

        } catch (error) {

            console.error(
                "Merge Guest Cart Error:",
                error
            );

            return false;
        }
    };


    // ==================================================
    // GET CART FROM DATABASE
    // ==================================================

    const getCart = async () => {

        try {

            setLoading(true);

            const response = await api.get("/cart");

            setCart(
                response.data.cart?.items || []
            );

        } catch (error) {

            console.error(
                "Get Cart Error:",
                error
            );

            setCart([]);

        } finally {

            setLoading(false);

        }
    };


    // ==================================================
    // LOAD CART
    // ==================================================
    useEffect(() => {

        if (authLoading) {
            return;
        }


        const loadCart = async () => {

            if (user) {

                await mergeGuestCart();

                await getCart();

            } else {

                const savedCart =
                    localStorage.getItem("cart");

                setCart(
                    savedCart
                        ? JSON.parse(savedCart)
                        : []
                );
            }
        };


        loadCart();

    }, [user, authLoading]);
    // ==================================================
    // GUEST CART STORAGE
    // ==================================================

    useEffect(() => {

        if (!authLoading && !user) {

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

        }

    }, [cart, user, authLoading]);


    // ==================================================
    // ADD TO CART
    // ==================================================

    const addToCart = async (product) => {

        // --------------------------
        // Guest
        // --------------------------

        if (!user) {

            setCart((prevCart) => {

                const existingProduct =
                    prevCart.find(
                        (item) =>
                            item._id === product._id
                    );


                if (existingProduct) {

                    return prevCart.map((item) =>
                        item._id === product._id
                            ? {
                                ...item,
                                quantity:
                                    item.quantity + 1,
                            }
                            : item
                    );

                }


                return [
                    ...prevCart,
                    {
                        ...product,
                        quantity: 1,
                    },
                ];

            });

            return;
        }


        // --------------------------
        // Logged-in user
        // --------------------------

        try {

            const response = await api.post(
                "/cart",
                {
                    productId: product._id,
                    quantity: 1,
                }
            );


            setCart(
                response.data.cart.items
            );

        } catch (error) {

            console.error(
                "Add Cart Error:",
                error
            );

        }
    };


    // ==================================================
    // UPDATE QUANTITY
    // ==================================================

    const updateQuantity = async (
        productId,
        quantity
    ) => {

        if (quantity < 1) {
            return;
        }


        // Guest
        if (!user) {

            setCart((prevCart) =>
                prevCart.map((item) =>
                    item._id === productId
                        ? {
                            ...item,
                            quantity,
                        }
                        : item
                )
            );

            return;
        }


        // Logged-in
        try {

            const response = await api.put(
                `/cart/${productId}`,
                {
                    quantity,
                }
            );


            setCart(
                response.data.cart.items
            );

        } catch (error) {

            console.error(
                "Update Cart Error:",
                error
            );

        }
    };


    // ==================================================
    // REMOVE FROM CART
    // ==================================================

    const removeFromCart = async (productId) => {

        // Guest
        if (!user) {

            setCart((prevCart) =>
                prevCart.filter(
                    (item) =>
                        item._id !== productId
                )
            );

            return;
        }


        // Logged-in
        try {

            const response = await api.delete(
                `/cart/${productId}`
            );


            setCart(
                response.data.cart.items
            );

        } catch (error) {

            console.error(
                "Remove Cart Error:",
                error
            );

        }
    };


    // ==================================================
    // CLEAR CART
    // ==================================================

    const clearCart = async () => {

        // Guest
        if (!user) {

            setCart([]);

            localStorage.removeItem("cart");

            return;
        }


        // Logged-in
        try {

            const response = await api.delete(
                "/cart"
            );


            setCart(
                response.data.cart.items || []
            );

        } catch (error) {

            console.error(
                "Clear Cart Error:",
                error
            );

        }
    };


    // ==================================================
    // TOTAL ITEMS
    // ==================================================

    const totalItems = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    // ==================================================
    // TOTAL PRICE
    // ==================================================

    const totalPrice = cart.reduce(
        (total, item) => {

            const price =
                item.product?.price ??
                item.price ??
                0;

            return total +
                price * item.quantity;

        },
        0
    );


    return (
        <CartContext.Provider
            value={{
                cart,
                loading,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    return useContext(CartContext);
};