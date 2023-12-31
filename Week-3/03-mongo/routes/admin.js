const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require('../db/index');
const { Course } = require('../db/index');

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({
        username: username,
        password: password,
    }).then(function (value) {
        if (value) {
            res.json({
                msg: 'User already exists'
            });
        } else {
            Admin.create({
                username: username,
                password: password
            }).then(() => {
                res.json({
                    msg: 'user created successfully'
                })
            })
        }
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const check = await Course.findOne({ title });

    if (check) {
        return res.status(403).json({
            msg : "Course already exists"
        })
    }else{
        const newCousre = await Course.create({
            title,
            description,
            price,
            imageLink,
        })
        res.json({
            message: "course created successfully",
            'Course Id': newCousre._id,
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const value = await Course.find();
    res.json(value);
});

module.exports = router;



/* other way

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    id = Math.floor((Math.random() * 100000)),

    Course.findOne({
        title,
        description,
    }).then(function(value){
        if(value){
            res.status(403).json({
                msg : 'Course already exists'
            });
        }else{
            Course.create({
                id: id,
                title,
                description,
                price,
                imageLink,
            }).then(()=>{
                res.json({
                    msg : 'Course created successfully',
                    courseId : id
                })
            })
        }
    })
}); */