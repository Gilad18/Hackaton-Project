const express = require("express");
const router = new express.Router();

// the client send in post body {"url":"exe.com"}

router.get("/api/product", async (req, res) => {
	try {
		// Here I send the req to Sergy
		// and he return me the data and also send it to Gilad to save the data in db
		// const productData = await function()
		//then I send the data back to client side
		res.status(201).send(req.body.url);
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

module.exports = router;
