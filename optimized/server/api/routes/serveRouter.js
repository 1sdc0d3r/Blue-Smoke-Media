const router = require("express").Router();
const path = require('path');
const fs = require('fs');
const htmlRoot = path.dirname(require.main.filename) + "/public/html"

router.get("/", (req, res) => {
    res.sendFile(path.join(htmlRoot + '/index.html'));
})

const otherPaths = {
    policy: ["privacy", "policy", "policies"],
}

router.get("/:file", (req, res) => {
    // fetching favicon.ico??
    let file = req.params.file;
    // remove the .html
    if (file.includes(".")) file = file.slice(0, file.indexOf("."));
    // if wrong path, redirect
    if (otherPaths.policy.includes(file)) file = "privacy-policy"

    const filePath = path.join(htmlRoot + `/${file}.html`);
    // console.log("FILE:", file, "EXISTS:", fs.existsSync(filePath)) //! testing
    if (fs.existsSync(filePath)) {
        if (file.includes(".html") || !file.includes(".ico")) res.sendFile(filePath);
    } else res.sendFile(path.join(htmlRoot + "/404.html"))
})

module.exports = router;
