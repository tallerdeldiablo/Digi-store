const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Reader }],
    });

    if (!tagData) {
      res.status(404).json({ message: "No library card found with that id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const locationData = await Tag.create({
      reader_id: req.body.reader_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  // try {
  //   const tagData = await Tag.update(req.body, {
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   if (!tagData[0]) {
  //     res.status(404).json({ message: 'No user with this id!' });
  //     return;
  //   }
  //   res.status(200).json(tagData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
