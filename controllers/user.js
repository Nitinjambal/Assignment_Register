import { User } from "../models/user.js";

export const RegisterNewUser = async (req, res, next) => {
    try {
        const { name, email, password, education, city, country, mobileNo } = req.body;
        let user = await User.findOne({ email });

        if (user){
            res.status(404).json({
                success: false,
                message: "User Already Exists"
            })
        }

        user = await User.create({
            name,
            email,
            password,
            education,
            city,
            country,
            mobileNo,
            
        });
        res.status(201).json({
            success: true,
            message: "User Registered Successfully"
        })
    } catch (error) {
        console.log('error:', error)
        res.status(404).json({
            success: false,
            message: "Something went wrong"
        })
    }
};