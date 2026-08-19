const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Order = require("../models/Order");
const Product = require("../models/Product");
const Address = require("../models/Address");

const authMiddleware = require("../middleware/auth");


// ============================================
// CREATE ORDER
// POST /orders
// ============================================

router.post("/", authMiddleware, async (req, res) => {

    try {

        const userId = req.user.userId;

        const {
            items,
            addressId,
            paymentMethod,
        } = req.body;


        // ========================================
        // 1. VALIDATION
        // ========================================

        if (
            !items ||
            !Array.isArray(items) ||
            items.length === 0
        ) {

            return res.status(400).json({
                success: false,
                message: "Cart items are required",
            });

        }


        if (!addressId) {

            return res.status(400).json({
                success: false,
                message: "Delivery address is required",
            });

        }


        if (!paymentMethod) {

            return res.status(400).json({
                success: false,
                message: "Payment method is required",
            });

        }


        if (
            !["cod", "online"].includes(
                paymentMethod
            )
        ) {

            return res.status(400).json({
                success: false,
                message: "Invalid payment method",
            });

        }


        // ========================================
        // 2. GET ADDRESS
        // ========================================

        const address = await Address.findOne({
            _id: addressId,
            user: userId,
        });


        if (!address) {

            return res.status(404).json({
                success: false,
                message: "Delivery address not found",
            });

        }


        // ========================================
        // 3. GET PRODUCTS
        // ========================================

        const productIds = items.map(
            (item) => item.product
        );


        const products = await Product.find({
            _id: {
                $in: productIds,
            },
        });


        if (
            products.length !==
            productIds.length
        ) {

            return res.status(400).json({
                success: false,
                message:
                    "One or more products are not available",
            });

        }


        // ========================================
        // 4. CREATE ORDER ITEMS
        // ========================================

        const orderItems = [];


        for (const item of items) {

            if (
                !mongoose.Types.ObjectId.isValid(
                    item.product
                )
            ) {

                return res.status(400).json({
                    success: false,
                    message:
                        "Invalid product ID",
                });

            }


            const product = products.find(
                (product) =>
                    product._id.toString() ===
                    item.product.toString()
            );


            if (!product) {

                return res.status(404).json({
                    success: false,
                    message:
                        "Product not found",
                });

            }


            const quantity =
                Number(item.quantity);


            if (
                !Number.isInteger(quantity) ||
                quantity < 1
            ) {

                return res.status(400).json({
                    success: false,
                    message:
                        "Invalid product quantity",
                });

            }


            // ====================================
            // STOCK CHECK
            // ====================================

            if (
                product.stock < quantity
            ) {

                return res.status(400).json({
                    success: false,
                    message:
                        `${product.name} does not have enough stock`,
                });

            }


            const total =
                product.price *
                quantity;


            orderItems.push({

                product: product._id,

                name: product.name,

                image:
                    product.image || "",

                price: product.price,

                quantity,

                total,

            });

        }


        // ========================================
        // 5. CALCULATE TOTAL
        // ========================================

        const subtotal =
            orderItems.reduce(
                (total, item) =>
                    total + item.total,
                0
            );


        const deliveryCharge = 0;


        const totalAmount =
            subtotal +
            deliveryCharge;


        // ========================================
        // 6. ADDRESS SNAPSHOT
        // ========================================

        const deliveryAddress = {

            fullName:
                address.fullName,

            phone:
                address.phone,

            addressLine1:
                address.addressLine1,

            addressLine2:
                address.addressLine2 || "",

            city:
                address.city,

            state:
                address.state,

            postalCode:
                address.postalCode,

            country:
                address.country || "India",

        };


        // ========================================
        // 7. PAYMENT STATUS
        // ========================================

        let paymentStatus = "pending";


        // COD remains pending.
        // Online payment will be handled
        // when we integrate payment gateway.

        if (
            paymentMethod === "cod"
        ) {

            paymentStatus = "pending";

        }


        // ========================================
        // 8. CREATE ORDER
        // ========================================

        const order = await Order.create({

            user: userId,

            items: orderItems,

            deliveryAddress,

            paymentMethod,

            paymentStatus,

            orderStatus: "placed",

            subtotal,

            deliveryCharge,

            totalAmount,

        });


        // ========================================
        // 9. RETURN RESPONSE
        // ========================================

        return res.status(201).json({

            success: true,

            message:
                "Order placed successfully",

            order,

        });

    } catch (error) {

        console.error(
            "Create Order Error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Server error",

        });

    }

});


// ============================================
// GET MY ORDERS
// GET /orders
// ============================================

router.get("/", authMiddleware, async (req, res) => {

    try {

        const userId =
            req.user.userId;


        const orders =
            await Order.find({
                user: userId,
            })
                .sort({
                    createdAt: -1,
                });


        return res.status(200).json({

            success: true,

            orders,

        });

    } catch (error) {

        console.error(
            "Get Orders Error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Server error",

        });

    }

});


// ============================================
// GET SINGLE ORDER
// GET /orders/:id
// ============================================

router.get(
    "/:id",
    authMiddleware,
    async (req, res) => {

        try {

            const userId =
                req.user.userId;

            const orderId =
                req.params.id;


            if (
                !mongoose.Types.ObjectId.isValid(
                    orderId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid order ID",

                });

            }


            const order =
                await Order.findOne({

                    _id: orderId,

                    user: userId,

                });


            if (!order) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Order not found",

                });

            }


            return res.status(200).json({

                success: true,

                order,

            });

        } catch (error) {

            console.error(
                "Get Order Error:",
                error
            );


            return res.status(500).json({

                success: false,

                message:
                    "Server error",

            });

        }

    }
);


// ============================================
// CANCEL ORDER
// PATCH /orders/:id/cancel
// ============================================

router.patch(
    "/:id/cancel",
    authMiddleware,
    async (req, res) => {

        try {

            const userId =
                req.user.userId;

            const orderId =
                req.params.id;


            if (
                !mongoose.Types.ObjectId.isValid(
                    orderId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid order ID",

                });

            }


            const order =
                await Order.findOne({

                    _id: orderId,

                    user: userId,

                });


            if (!order) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Order not found",

                });

            }


            // ====================================
            // ONLY ALLOW CANCELLATION
            // BEFORE SHIPPING
            // ====================================

            const cancellableStatuses = [

                "placed",

                "confirmed",

                "processing",

            ];


            if (
                !cancellableStatuses.includes(
                    order.orderStatus
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "This order cannot be cancelled",

                });

            }


            order.orderStatus =
                "cancelled";


            await order.save();


            return res.status(200).json({

                success: true,

                message:
                    "Order cancelled successfully",

                order,

            });

        } catch (error) {

            console.error(
                "Cancel Order Error:",
                error
            );


            return res.status(500).json({

                success: false,

                message:
                    "Server error",

            });

        }

    }
);


module.exports = router;