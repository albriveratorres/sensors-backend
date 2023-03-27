const express = require('express');
const router = express.Router();

const UsersService = require('../services/users.service');

const userService = new UsersService();


// router.get('/', async(req,res)=>{
//   const user = await userService.find();
//   console.log(user);
//   res.json(user);
// })

router.post('/', async (req,res) =>{
  const body = req.body;
  console.log(body);
  const user = await userService.findOne(body);
  res.status(200).json(user);
}
)

module.exports = router;
