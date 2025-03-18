const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const ReviewController = require("../controllers/reviews.js");
const { destroyListing } = require("../controllers/listing.js");

//***Reviews***

//Post Review Route
router.post("/", 
    validateReview,
    isLoggedIn,
    wrapAsync(ReviewController.createReview));

//Delete Review Route
router.delete("/:reviewId", isReviewAuthor,  wrapAsync (ReviewController.destroyReview));


module.exports = router;