const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const authorizeRoles = require("../middleware/role");
const authMiddleware = require("../middleware/auth");




router.get("/", async (req, res) => {
    try {

        const products = await Product.find({
            isActive: true,
        }).sort({
            createdAt: -1,
        });

        return res.status(200).json({
            success: true,
            products,
        });

    } catch (error) {

        console.error("Get Products Error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error",
        });

    }
});


router.post("/", authMiddleware, authorizeRoles('admin'), async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            image,
            category,
            stock,
        } = req.body;

        // Validate required fields
        if (
            !name ||
            !description ||
            price === undefined ||
            !category ||
            stock === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: "Name, description, price, category and stock are required",
            });
        }

        const product = await Product.create({
            name,
            description,
            price,
            image: image || "",
            category,
            stock,
        });

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });

    } catch (error) {
        console.error("Create Product Error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});

module.exports = router;