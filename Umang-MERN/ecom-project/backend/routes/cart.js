const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Use your existing JWT authentication middleware
const authMiddleware = require("../middleware/auth");


// ======================================================
// GET CART
// GET /cart
// ======================================================

router.get("/", authMiddleware, async (req, res) => {
    try {

        const cart = await Cart.findOne({
            user: req.user.userId,
        }).populate({
            path: "items.product",
            select: "name price image category stock isActive",
        });

        if (!cart) {
            return res.status(200).json({
                success: true,
                cart: {
                    items: [],
                },
            });
        }

        return res.status(200).json({
            success: true,
            cart,
        });

    } catch (error) {

        console.error("Get Cart Error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});


// ======================================================
// ADD TO CART
// POST /cart
// ======================================================

router.post("/", authMiddleware, async (req, res) => {
    try {

        const { productId, quantity = 1 } = req.body;

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required",
            });
        }

        if (quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1",
            });
        }


        // Find product
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }


        // Check active
        if (!product.isActive) {
            return res.status(400).json({
                success: false,
                message: "Product is not available",
            });
        }


        // Check stock
        if (product.stock < quantity) {
            return res.status(400).json({
                success: false,
                message: "Not enough stock available",
            });
        }


        // Find user's cart
        let cart = await Cart.findOne({
            user: req.user.userId,
        });


        // Create cart if doesn't exist
        if (!cart) {

            cart = new Cart({
                user: req.user.userId,
                items: [
                    {
                        product: productId,
                        quantity,
                    },
                ],
            });

        } else {

            const existingItem = cart.items.find(
                (item) =>
                    item.product.toString() ===
                    productId.toString()
            );


            if (existingItem) {

                const newQuantity =
                    existingItem.quantity + quantity;


                if (newQuantity > product.stock) {
                    return res.status(400).json({
                        success: false,
                        message: "Not enough stock available",
                    });
                }


                existingItem.quantity = newQuantity;

            } else {

                cart.items.push({
                    product: productId,
                    quantity,
                });

            }
        }


        await cart.save();


        // Return populated cart
        await cart.populate({
            path: "items.product",
            select: "name price image category stock isActive",
        });


        return res.status(200).json({
            success: true,
            message: "Product added to cart",
            cart,
        });

    } catch (error) {

        console.error("Add Cart Error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});


// ======================================================
// UPDATE CART ITEM
// PUT /cart/:productId
// ======================================================

router.put(
    "/:productId",
    authMiddleware,
    async (req, res) => {

        try {

            const { quantity } = req.body;
            const { productId } = req.params;


            if (!quantity || quantity < 1) {
                return res.status(400).json({
                    success: false,
                    message: "Quantity must be at least 1",
                });
            }


            // Find product
            const product = await Product.findById(
                productId
            );


            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found",
                });
            }


            if (!product.isActive) {
                return res.status(400).json({
                    success: false,
                    message: "Product is not available",
                });
            }


            if (quantity > product.stock) {
                return res.status(400).json({
                    success: false,
                    message: "Not enough stock available",
                });
            }


            const cart = await Cart.findOne({
                user: req.user.userId,
            });


            if (!cart) {
                return res.status(404).json({
                    success: false,
                    message: "Cart not found",
                });
            }


            const item = cart.items.find(
                (item) =>
                    item.product.toString() ===
                    productId.toString()
            );


            if (!item) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found in cart",
                });
            }


            item.quantity = quantity;


            await cart.save();


            await cart.populate({
                path: "items.product",
                select: "name price image category stock isActive",
            });


            return res.status(200).json({
                success: true,
                message: "Cart updated",
                cart,
            });

        } catch (error) {

            console.error(
                "Update Cart Error:",
                error
            );

            return res.status(500).json({
                success: false,
                message: "Server error",
            });
        }
    }
);


// ======================================================
// REMOVE CART ITEM
// DELETE /cart/:productId
// ======================================================

router.delete(
    "/:productId",
    authMiddleware,
    async (req, res) => {

        try {

            const { productId } = req.params;


            const cart = await Cart.findOne({
                user: req.user.userId,
            });


            if (!cart) {
                return res.status(404).json({
                    success: false,
                    message: "Cart not found",
                });
            }


            const itemExists = cart.items.some(
                (item) =>
                    item.product.toString() ===
                    productId.toString()
            );


            if (!itemExists) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found in cart",
                });
            }


            cart.items = cart.items.filter(
                (item) =>
                    item.product.toString() !==
                    productId.toString()
            );


            await cart.save();


            await cart.populate({
                path: "items.product",
                select: "name price image category stock isActive",
            });


            return res.status(200).json({
                success: true,
                message: "Product removed from cart",
                cart,
            });

        } catch (error) {

            console.error(
                "Remove Cart Error:",
                error
            );

            return res.status(500).json({
                success: false,
                message: "Server error",
            });
        }
    }
);


// ======================================================
// CLEAR CART
// DELETE /cart
// ======================================================

router.delete(
    "/",
    authMiddleware,
    async (req, res) => {

        try {

            const cart = await Cart.findOne({
                user: req.user.userId,
            });


            if (!cart) {
                return res.status(200).json({
                    success: true,
                    message: "Cart already empty",
                    cart: {
                        items: [],
                    },
                });
            }


            cart.items = [];

            await cart.save();


            return res.status(200).json({
                success: true,
                message: "Cart cleared",
                cart,
            });

        } catch (error) {

            console.error(
                "Clear Cart Error:",
                error
            );

            return res.status(500).json({
                success: false,
                message: "Server error",
            });
        }
    }
);


module.exports = router;