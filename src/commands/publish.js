const ghpages = require("gh-pages")

ghpages.publish("public", err => {
  if (err) {
    console.log("error:", err)
  }
})
