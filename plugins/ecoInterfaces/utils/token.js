function randomToken(len) {
    const length = len || 32;
    const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    const max = chars.length;
    let str = "";
    for (let i=0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * max));
    }
    return str;
}

module.exports = {
    randomToken
};
