const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products\\
  try {
    const categoryData = await Category.findAll(
      { include:[{model: Product}],}
    );
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryData = await Category.findByPk(req.params.id,{

      include:[{model: Product}],
    });
    // console.log("include product-model"+categoryData)
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(err);
    
  } // Category.findByPk(req.params.id).then((bookData) => {
  //   res.json(bookData);
  //   console.log(bookData)

  // });


  
});

router.post("/", (req, res) => {
  // create a new category
//--


  /* req.body should look like this...
    {
      category_name: "skate",
      
    }
  */
  Product.create(req.body)
    .then((category) => {
      // if there's category tags, we need to create pairings to bulk create in the categoryTag model
      // if (req.body.tagIds.length) {
      //   const categoryTagIdArr = req.body.tagIds.map((tag_id) => {
      //     return {
      //       category_id: category.id,
      //       tag_id,
      //     };
      //   });
      //   return categoryTag.bulkCreate(categoryTagIdArr);
      // }
      // if no category tags, just respond
      res.status(200).json(category);
    })
    .then((categoryTagIds) => res.status(200).json(categoryTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });





  //--
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
