const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require('../db/index');
const jwt = require('jsonwebtoken');
const JWT_Secret = require("../Config");
const {Course} = require('../db/index');

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await Admin.findOne({
        username
    })

    if(!existingUser){
        const newUser = await Admin.create({
            username,
            password
        })

        res.json({
            Success : 'User Created Successfully'
        })
    }else{
        res.status(403).json({
            Error : username + ' ALready exists',
        })
    }

});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const newUser = await Admin.findOne({
        username,
        password
    });

    if(newUser){
        const token = jwt.sign(username, JWT_Secret);
        res.json({
            Success: 'sign in successfull',
            token,
        })
    }else{
        res.status(402).json({
            Error : 'User doesnot exists',
        })
    }

});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const exsistingCourse = await Course.findOne({
        title,
        description
    })

    if(!exsistingCourse){
        const newCourse = await Course.create({
            title,
            description,
            price,
            imageLink
        });

        res.json({
            Success : 'Course created successfully',
            CourseId : newCourse._id,
        })
    }else{
        res.status(403).json({
            Error: 'Course already exsists',
        })
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.json({
        courses,
    })
});

module.exports = router;