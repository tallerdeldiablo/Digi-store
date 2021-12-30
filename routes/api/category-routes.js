const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products\\
  try {
    const categoryData = await Category.findAll(
      //include the products associated to the category
      { include:[{model: Product}],}
    );
  
    res.status(200).json(categoryData);
    console.log(res)
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryData = await Category.findByPk(req.params.id,{

      include:[{model: Product}],
    });
   console.log("include product-model"+categoryData)
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
    
  } // Category.findByPk(req.params.id).then((bookData) => {
  //   res.json(bookData);
  //   console.log(bookData)

  // });


  
});

router.post("/", async (req, res) => {
  // create a new category
//--


  /* req.body should look like this...
    {
      category_name: "skate",
      
    }
  */
try {
  const categoryData = await Category.create(req.body);
  res.status(200).json(categoryData)

} catch (error) {
  res.status(400).json(error)
}




  //--
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
