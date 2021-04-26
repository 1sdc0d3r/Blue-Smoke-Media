const router = require("express").Router();
const path = require('path');
const fs = require('fs');
const htmlRoot = path.dirname(require.main.filename) + "/public/html"

router.get("/", (req, res) => {
    res.sendFile(path.join(htmlRoot + '/index.html'));
})

const otherPaths = {
    privacy: ["policy", "policies"],
}

router.get("/:file", (req, res) => {
    // fetching favicon.ico??
    let file = req.params.file;

    // remove the .html
    if (file.includes(".")) file = file.slice(0, file.indexOf("."));
    // if wrong path, redirect
    if (otherPaths.privacy.includes(file)) file = "privacy"

    const filePath = path.join(htmlRoot + `/${file}.html`);
    // console.log({
    //     filePath
    // })
    // console.log("FILE:", file, "EXISTS:", fs.existsSync(filePath)) //! testing
    if (fs.existsSync(filePath)) {
        if (file.includes(".html") || !file.includes(".ico")) res.sendFile(filePath);
    } else res.sendFile(path.join(htmlRoot + "/404.html"))
})

router.get("/:subFolder/:file", (req, res) => {
    // fetching favicon.ico??
    let file = req.params.file;
    let subFolder = req.params.subFolder;

    // remove the .html
    if (file.includes(".")) file = file.slice(0, file.indexOf("."));
    // if wrong path, redirect
    if (otherPaths.privacy.includes(file)) file = "privacy"

    const filePath = path.join(htmlRoot + `/${subFolder}/${file}.html`);
    // console.log({
    //     filePath
    // })
    // console.log("FILE:", file, "EXISTS:", fs.existsSync(filePath)) //! testing
    if (fs.existsSync(filePath)) {
        if (file.includes(".html") || !file.includes(".ico")) res.sendFile(filePath);
    } else res.sendFile(path.join(htmlRoot + "/404.html"))
})

module.exports = router;
