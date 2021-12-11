// Create CRUD operation method

const router = require("express").Router();
const User = require ('../models/User');
const bcrypt = require ('bcrypt');

router.put("/:id", async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        //Check if user changes password
        if(req.body.password) {
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                //automatically change any desired data in MongoDB
                $set: req.body,
            });
            res.status(200).json("Account has been updated!");
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only your account");
    }
});

router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.deleteOne({_id: req.params.id});
      res.status(200).json('Account has been deleted!');
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You can delete only your account');
  }
});

router.get("/:id", async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        //display necessary details
        const {password, updatedAt, ...other} = user._doc ;
        res.status(200).json(other);
    } catch(error) {
        return res.status(500).json(error);
    }
});

//Follow and unfollow users
router.put("/:id/follow", async (req,res) => {
    if(req.body.userId !== req.params.id) {
        try{
            const followedUser = await User.findById(req.params.id);
            const me = await User.findById(req.body.userId);
            if(!followedUser.followers.includes(req.body.userId)) {
                await followedUser.updateOne({$push: {followers: req.body.userId}});
                await me.updateOne({$push: {following: req.params.id}});
                res.status(200).json("New follower added!");
            } else {
                res.status(403).json("You have already followed this person!");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        return res.status(403).json("You are following yourself!")
    }
})
router.put('/:id/unfollow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const unfollowedUser = await User.findById(req.params.id);
      const me = await User.findById(req.body.userId);
      if (unfollowedUser.followers.includes(req.body.userId)) {
        await unfollowedUser.updateOne({$pull: {followers: req.body.userId}});
        await me.updateOne({$pull: {following: req.params.id}});
        res.status(200).json('Not follow any more');
      } else {
        res.status(403).json('You have not followed this person');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You can\'t unfollow yourself!');
  }
});

module.exports = router;