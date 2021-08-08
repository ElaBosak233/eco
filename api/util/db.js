require("json5/lib/register");

function getAllUsers() {
    return require("../_data/user/user.json5");
}

module.exports = {
    getAllUsers
};
