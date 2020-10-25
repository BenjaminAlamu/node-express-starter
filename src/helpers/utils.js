module.exports = {
  randomString(length = 20) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i += 1)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  },
  randomAlphanumeric(length = 20) {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i += 1)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  },
  randomNumber(length = 10) {
    let text = "";
    const possible = "0123456789";
    for (let i = 0; i < length; i += 1)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  },
};
