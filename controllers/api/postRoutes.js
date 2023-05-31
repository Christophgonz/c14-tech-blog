const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      date_created: req.body.date_created,
      user_id: req.session.user_id,
    });
  } catch {}
});

module.exports - router;
