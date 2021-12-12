const router = require("express").Router();
const Post = require("../models/Post")
const User = require("../models/User")
//create
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save() ;
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
})
//update
router.put("/:id", async (req,res) => {
    try{
        const thisPost = await Post.findById(req.params.id);
        if (thisPost.userId === req.body.userId) {
            await thisPost.updateOne({$set: req.body});
            res.status(200).json("Updated successfully");
        } else {
            res.status(403).json("Don't update other post!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})
//delete
router.delete('/:id', async (req, res) => {
  try {
    const thisPost = await Post.findById(req.params.id);
    if (thisPost.userId === req.body.userId) {
      await thisPost.deleteOne();
      res.status(200).json('Delete successfully');
    } else {
      res.status(403).json("Don't delete other post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//handle like a post action 
router.put("/:id/likes", async (req,res) => {
  try{
    const thisPost = await Post.findById(req.params.id);
    if(!thisPost.like.includes(req.body.userId)) {
      await thisPost.updateOne({$push: {like: req.body.userId}});
      res.status(200).json("This post has 1 like");
    } else {
      await thisPost.updateOne({$pull: {like: req.body.userId}});
      res.status(200).json(req.body.userId + " doesn\'t like your post")
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//handle dislike a post action 
router.put("/:id/dislikes", async (req,res) => {
  try{
    const thisPost = await Post.findById(req.params.id);
    if(!thisPost.dislike.includes(req.body.userId)) {
      await thisPost.updateOne({$push: {dislike: req.body.userId}});
      res.status(200).json("This post has 1 dislike");
    } else {
      await thisPost.updateOne({$pull: {dislike: req.body.userId}});
      res.status(200).json(req.body.userId + " no longer dislike your post")
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//get
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get("/timeline/:id", async (req, res) => {
  try{
    const thisUser = await User.findById(req.params.id)
    const userPost = await Post.find({ userId: thisUser._id })
    const friendPost = await Promise.all(
      thisUser.following.map((someoneId) => {
        return Post.find({ userId: someoneId })
      }
    ))
    res.status(200).json(userPost.concat(...friendPost));
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;