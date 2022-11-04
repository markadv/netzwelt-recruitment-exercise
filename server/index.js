const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json());

app.post("/account/login", async (req, res) => {
	axios
		.post("https://netzwelt-devtest.azurewebsites.net/Account/SignIn", {
			username: req.body.username,
			password: req.body.password,
		})
		.then(function (response) {
			// handle success
			// console.log("success");
			res.json(response.data);
		})
		.catch(function (error) {
			// handle error
			console.log("fail");
			res.status(404);
		});
});

app.get("/territories/all", async (req, res) => {
	axios.get("https://netzwelt-devtest.azurewebsites.net/Territories/All").then((response) => {
		res.json(response.data.data);
	});
});

app.listen(1337, () => {
	// console.log("Server started in 1337");
});
