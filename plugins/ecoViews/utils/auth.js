function needAuth(req, res, callback) {
  if (req.session["token"]) {
    if (typeof callback === "function") {
      callback();
    }
  } else {
    res.redirect("/login");
  }
}

function notAuth(req, res, callback) {
  if (req.session["token"]) {
    res.redirect("back" || "/");
  } else {
    if (typeof callback === "function") {
      callback();
    }
  }
}

module.exports = {
  needAuth,
  notAuth,
};
