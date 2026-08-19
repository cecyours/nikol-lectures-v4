const express = require("express");
const router = express.Router();

const Address = require("../models/Address");

// Use your existing JWT authentication middleware
const authMiddleware = require("../middleware/auth");


// ======================================================
// GET ALL USER ADDRESSES
// GET /addresses
// ======================================================

router.get("/", authMiddleware, async (req, res) => {
    try {

        const addresses = await Address.find({
            user: req.user.userId,
        }).sort({
            isDefault: -1,
            createdAt: -1,
        });

        return res.status(200).json({
            success: true,
            addresses,
        });

    } catch (error) {

        console.error(
            "Get Addresses Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});


// ======================================================
// CREATE ADDRESS
// POST /addresses
// ======================================================

router.post("/", authMiddleware, async (req, res) => {
    try {

        const {
            label,
            fullName,
            phone,
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            country,
            isDefault,
        } = req.body;


        // Validate required fields
        if (
            !fullName ||
            !phone ||
            !addressLine1 ||
            !city ||
            !state ||
            !postalCode
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Full name, phone, address, city, state and postal code are required",
            });
        }


        // Check if user already has addresses
        const addressCount =
            await Address.countDocuments({
                user: req.user.userId,
            });


        // First address automatically becomes default
        const shouldBeDefault =
            addressCount === 0 ||
            isDefault === true;


        // If this should be default,
        // remove default from existing addresses
        if (shouldBeDefault) {

            await Address.updateMany(
                {
                    user: req.user.userId,
                },
                {
                    $set: {
                        isDefault: false,
                    },
                }
            );
        }


        const address = await Address.create({

            user: req.user.userId,

            label: label || "Home",

            fullName,

            phone,

            addressLine1,

            addressLine2:
                addressLine2 || "",

            city,

            state,

            postalCode,

            country:
                country || "India",

            isDefault:
                shouldBeDefault,
        });


        return res.status(201).json({
            success: true,
            message: "Address added successfully",
            address,
        });

    } catch (error) {

        console.error(
            "Create Address Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});


// ======================================================
// UPDATE ADDRESS
// PUT /addresses/:id
// ======================================================

router.put(
    "/:id",
    authMiddleware,
    async (req, res) => {

        try {

            const { id } = req.params;

            const {
                label,
                fullName,
                phone,
                addressLine1,
                addressLine2,
                city,
                state,
                postalCode,
                country,
                isDefault,
            } = req.body;


            // Find only user's address
            const address =
                await Address.findOne({
                    _id: id,
                    user: req.user.userId,
                });


            if (!address) {
                return res.status(404).json({
                    success: false,
                    message: "Address not found",
                });
            }


            // If making this default
            if (isDefault === true) {

                await Address.updateMany(
                    {
                        user: req.user.userId,
                        _id: {
                            $ne: id,
                        },
                    },
                    {
                        $set: {
                            isDefault: false,
                        },
                    }
                );

                address.isDefault = true;
            }


            if (isDefault === false) {

                address.isDefault = false;
            }


            address.label =
                label ?? address.label;

            address.fullName =
                fullName ?? address.fullName;

            address.phone =
                phone ?? address.phone;

            address.addressLine1 =
                addressLine1 ??
                address.addressLine1;

            address.addressLine2 =
                addressLine2 ??
                address.addressLine2;

            address.city =
                city ?? address.city;

            address.state =
                state ?? address.state;

            address.postalCode =
                postalCode ??
                address.postalCode;

            address.country =
                country ?? address.country;


            await address.save();


            return res.status(200).json({
                success: true,
                message:
                    "Address updated successfully",
                address,
            });

        } catch (error) {

            console.error(
                "Update Address Error:",
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
// SET DEFAULT ADDRESS
// PUT /addresses/:id/default
// ======================================================

router.put(
    "/:id/default",
    authMiddleware,
    async (req, res) => {

        try {

            const { id } = req.params;


            // Make all user's addresses non-default
            await Address.updateMany(
                {
                    user: req.user.userId,
                },
                {
                    $set: {
                        isDefault: false,
                    },
                }
            );


            // Make selected address default
            const address =
                await Address.findOneAndUpdate(
                    {
                        _id: id,
                        user: req.user.userId,
                    },
                    {
                        $set: {
                            isDefault: true,
                        },
                    },
                    {
                        new: true,
                    }
                );


            if (!address) {
                return res.status(404).json({
                    success: false,
                    message: "Address not found",
                });
            }


            return res.status(200).json({
                success: true,
                message:
                    "Default address updated",
                address,
            });

        } catch (error) {

            console.error(
                "Set Default Address Error:",
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
// DELETE ADDRESS
// DELETE /addresses/:id
// ======================================================

router.delete(
    "/:id",
    authMiddleware,
    async (req, res) => {

        try {

            const { id } = req.params;


            const address =
                await Address.findOneAndDelete({
                    _id: id,
                    user: req.user.userId,
                });


            if (!address) {
                return res.status(404).json({
                    success: false,
                    message: "Address not found",
                });
            }


            // If deleted address was default,
            // make another address default
            if (address.isDefault) {

                const nextAddress =
                    await Address.findOne({
                        user: req.user.userId,
                    }).sort({
                        createdAt: -1,
                    });


                if (nextAddress) {

                    nextAddress.isDefault =
                        true;

                    await nextAddress.save();
                }
            }


            return res.status(200).json({
                success: true,
                message:
                    "Address deleted successfully",
            });

        } catch (error) {

            console.error(
                "Delete Address Error:",
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