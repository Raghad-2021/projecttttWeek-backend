const express = require("express");
const StoreRoute = express.Router();

// اسم الفنكشن
const { getStore, postStore, addComment,getproduct,addCart ,getCart} = require("../Controler/stors");
const { authentication } = require("../midlleWare/authentication");

// authentication يتاكد اذا اليوزر مسجل دخول
StoreRoute.get("/store", authentication, getStore);
StoreRoute.get("/cart", authentication, getCart);
// راح تجيب المنتج الي id هذا
StoreRoute.get("/product/:id",authentication, getproduct);

StoreRoute.post("/store", authentication, postStore);
StoreRoute.post("/cart/:id", authentication, addCart);

StoreRoute.post("/comment/:id", authentication, addComment);

module.exports = StoreRoute;
