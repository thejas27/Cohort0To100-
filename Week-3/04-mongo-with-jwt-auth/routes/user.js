const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const JWT_Secret = require("../Config");
const { default: mongoose } = require("mongoose");


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const exsistingUser = await User.findOne({
        username
    });

    if (exsistingUser) {
        res.status(403).json({
            Error: 'User already exsists',
        });
    } else {
        const NewUser = await User.create({
            username,
            password,
        });

        res.json({
            Success: 'User created successfully',
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({
        username,
        password
    });

    if (existingUser) {
        const token = jwt.sign(username, JWT_Secret);
        res.json({
            Success: 'Sign in successfull',
            token,
        });
    } else {
        res.status(403).json({
            Error: 'User does not exists',
        })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find()
        .then(function (value) {
            res.json({
                Courses: value,
            });
        });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    const exsistingCourse = await Course.findOne({
        _id: courseId,
    });
    if (exsistingCourse) {
        const purchase = await User.updateOne({
            username: username
        },
            {
                "$push": {
                    purchasedCourses: new mongoose.Types.ObjectId(courseId),
                }
            });
        res.json({
            Success: 'Purchse Successfull..'
        });
    } else {
        res.status(403).json({
            Error: 'No such course found',
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username
    });

    if (user) {
        const courses = await Course.find({
            _id: {
                "$in": user.purchasedCourses,
            }
        });
        res.json({
            courses,
        })
    } else {
        res.status(403).json({
            Error: 'User doesnot exists',
        })
    }
});

module.exports = router;