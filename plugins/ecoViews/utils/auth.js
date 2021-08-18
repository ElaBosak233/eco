function needAuth(req, res, callback) {
  if (req.session["token"]) {
    if (typeof callback === "function") {
      callback();
    }
  } else {
    res.redirect("/login");
  }
}

function needntAuth(req, res, callback) {
  if (req.session["token"]) {
    res.redirect("back" || "/");
  } else {
    callback();
  }
}

module.exports = {
  needAuth,
  needntAuth,
};
