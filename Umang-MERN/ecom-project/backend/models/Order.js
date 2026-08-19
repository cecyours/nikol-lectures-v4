const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            default: "",
        },

        price: {
            type: Number,
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },

        total: {
            type: Number,
            required: true,
        },
    },
    {
        _id: false,
    }
);


const addressSnapshotSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        addressLine1: {
            type: String,
            required: true,
        },

        addressLine2: {
            type: String,
            default: "",
        },

        city: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        postalCode: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            default: "India",
        },
    },
    {
        _id: false,
    }
);


const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },


        items: {
            type: [orderItemSchema],
            required: true,
            validate: {
                validator: (items) =>
                    items.length > 0,
                message:
                    "Order must contain at least one item",
            },
        },


        deliveryAddress: {
            type: addressSnapshotSchema,
            required: true,
        },


        paymentMethod: {
            type: String,
            enum: [
                "cod",
                "online",
            ],
            required: true,
        },


        paymentStatus: {
            type: String,
            enum: [
                "pending",
                "paid",
                "failed",
            ],
            default: "pending",
        },


        orderStatus: {
            type: String,
            enum: [
                "placed",
                "confirmed",
                "processing",
                "shipped",
                "delivered",
                "cancelled",
            ],
            default: "placed",
        },


        subtotal: {
            type: Number,
            required: true,
        },


        deliveryCharge: {
            type: Number,
            default: 0,
        },


        totalAmount: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model(
    "Order",
    orderSchema
);