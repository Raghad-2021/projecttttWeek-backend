const storeModels = require("../../db/moduls/storeModels");
const getStore = async (req, res) => {
  try {
    // ابحث عن جمييع المنتج هذا
    const store = await storeModels.find({}).populate("user");
    res.status(200).json(store);
  } catch (error) {
    res.send(error);
  }
};
const postStore= async (req, res)=>{
  const { name, price, img } = req.body;
  const user = req.token.userId;
  const newStore = new StoreModel({
    name,
    img,
    price,
    user,
  });
  try {
      const saveStore = await newStore.save()
       const store = await StoreModel.find({});
      res.status(200).json(store)

  }catch (error){
      res.send(error)
  }
}
const addComment = (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  // userld اخنا من token
  const user = req.token.userId;
  const userName=req.token.userName
  storeModels
    .findOneAndUpdate({ _id: id }, { $push: { comment: {comment, userName} } },{
      new: true
    })
    // هنا علشان اعرف user
    .populate("user")
    .then((result) => {
      console.log(result,"resulttt")
      res.send(result);
    }).catch(err=>{
      res.send(err)
    });
};

const deletComment = (req, res) => {
  const { comment } = req.body;
  const id = req.params.id;
  const user = req.token.userId;
  const userName=req.token.userName
  storeModels
    .findOneAndUpdate({ _id: id }, { $p: { comment: {comment, userName} } },{
      new: true
    })
    .populate("user")
    .then((result) => {
      console.log(result,"resulttt")
      res.send(result);
    }).catch(err=>{
      res.send(err)
    });
};
const getproduct = async (req, res)=> {
  const id = req.params.id
  try {
    const store = await storeModels.findOne({_id:id}).populate("user");
    res.status(200).json(store);
  } catch (error) {
    res.send(error);
  }
}


const addCart = (req,res)=>{
  const { cart } = req.body;
  const id = req.params.id;
  // const user = req.token.userId;
  storeModels
    .findOneAndUpdate({ _id:id }, { $push: { cart:cart } },{
      new: true
    })
    // .populate("user")
    .then((result) => {
      console.log(result,"resulttt")
      res.send(result);
    }).catch(err=>{
      res.send(err)
    });
}


const getCart = async(req,res)=>{
  const id = req.params.id
  try {
    const store = await storeModels.findOne({_id:id}).populate("user");
    res.status(200).json(store);
  } catch (error) {
    res.send(error);
  }
}

const postcart = async(req,res)=>{
  const id = req.params.id
  try {
    const store = await storeModels.findOne({_id:id}).populate("user");
    res.status(200).json(store);
  } catch (error) {
    res.send(error);
  }
}
module.exports = { getStore, postStore, addComment,getproduct,addCart,getCart, deletComment };
