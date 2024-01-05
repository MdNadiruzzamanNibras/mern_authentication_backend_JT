const express = require("express")
const router = express.Router()
const User = require("./userSchema")
const bcrypt = require("bcrypt");


router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/signup', async (req, res) => {
    const { name, email, password, phone, gender, jobPortal, city, state } = req.body;
    if( !name| !email| !password| !phone| !gender| !jobPortal| !city| !state){
            return  res.status(404).json("plz fill the name");
        }
    try {
        const oldUser = await User.findOne({email});
        if(oldUser){
          return res.send({error: 'user already exist'})
        }else{
            const hashPassword = await bcrypt.hash(password, 12);
            const newUser = new User({
                name, email, password: hashPassword, phone,gender,jobPortal, city, state
            })
            console.log(newUser);
            const data = await newUser.save();
            res.send(data)
        }
        
    } catch (error) {

        res.status(401).send({message: 'authentication failed'})
    }
})
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).select({_id:0});
        if(user){
            const validPassword = await bcrypt.compare(password, user.password);
            if(validPassword){
              res.send(user);
            }else{
              return res.send({message: 'password did not match'})
            }
        }else{
            return res.send({message: 'user not found'})
        }
    } catch (error) {

        res.status(401).send({message: 'authentication failed line 77'})
    }
})


module.exports = router;

