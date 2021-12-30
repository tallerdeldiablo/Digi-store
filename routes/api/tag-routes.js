const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  
  
  try {
    const tagData = await Tag.findAll({

      include:[{model: Product}],
    });
   console.log("include product-model"+tagData)
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
    
  } 

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data


  
  try {
    const tagData = await Tag.findByPk(req.params.id,{

      include:[{model: Product}],
    });

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
    
  } 



});

router.post('/', async (req, res) => {
  // create a new tag

  try {
    const tagData = await Tag.create (req.body)
    res.status(200).json(tagData)
  } catch (error) {
    res.status(400).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

  try {
    const tagData = await Tag.update (req.body,{
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(tagData)
  } catch (error) {
    res.status(400).json(error)
  }

});
// Product.update(req.body, {
//   where: {
//     id: req.params.id,
//   },
// })
//   .then((product) => {
//     // find all associated tags from ProductTag
//     return ProductTag.findAll({ where: { product_id: req.params.id } });
//   })
//   .then((productTags) => {
//     // get list of current tag_ids
//     const productTagIds = productTags.map(({ tag_id }) => tag_id);
//     // create filtered list of new tag_ids
//     const newProductTags = req.body.tagIds
//       .filter((tag_id) => !productTagIds.includes(tag_id))
//       .map((tag_id) => {
//         return {
//           product_id: req.params.id,
//           tag_id,
//         };
//       });
//     // figure out which ones to remove
//     const productTagsToRemove = productTags
//       .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//       .map(({ id }) => id);

//     // run both actions
//     return Promise.all([






router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value

  try {
    const tagData = await Tag.destroy ({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tagData)
  } catch (error) {
    res.status(400).json(error)
  }



});

module.exports = router;
