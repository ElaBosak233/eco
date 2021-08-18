const crypto = require("crypto");

function encryptWithSHA256(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

/**
 * SHA256 加盐加密方法，适用于用户密码的散列加密
 * @param str 多为密码字符串
 * @param salt 此处为用户名
 * @return code 加盐加密后的密码字符串
 */
function encryptWithSHA256AndSalt(str, salt) {
  return crypto
    .createHash("sha256")
    .update(salt + str)
    .digest("hex");
}

module.exports = {
  encryptWithSHA256,
  encryptWithSHA256AndSalt,
};
