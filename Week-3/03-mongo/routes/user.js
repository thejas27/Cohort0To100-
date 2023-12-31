const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User} = require('../db/index');
const {Course} = require('../db/index');
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    //in admin i have used .then() here we will do the same using async await

    const username = req.body.username;
    const password = req.body.password;

    const existingUser =await User.findOne({username, 
        password}); //  findeOne or create({username}) === findOne or create({username: username})// only if both para name is same

    if(existingUser){
        res.status(403).json({
            Error: "OOPS!!!!!!!!!......User already exsists.."
        });
    }else{
        const newUser = await User.create({
            username,
            password
        });

        res.json({
            msg: "User created Successfully"
        })
    }
});

router.get('/courses',async (req, res) => {//even if user is not have an account he/she can view the courses so no authentication
    // Implement listing all courses logic
    const course = await Course.find();
    res.json({course});
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    const courses = await Course.findOne({
        _id: courseId,
    }).catch(function (e) {
        return res.json('No such courses')
    });//if not satisfied await will throw a error
        User.updateOne({
            username : username
        },
        {
             '$push': {
                purchasedCourses: new mongoose.Types.ObjectId(courseId),
            }
        }).catch(function(e){
            console.log('No such course available');
        });
        res.json({
            msg: 'Purchase Complete',
        });
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id : {//in is same as in sql
            "$in" : user.purchasedCourses,
       } 
    })

    res.json({courses});
});

module.exports = router;
