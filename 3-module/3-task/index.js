function camelize(str) {
  let result = "";
  if (str == "") return str;
  if (str[0] == "-") {
    result = str
      .slice(1)
      .split("-")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join("");
    return result;
  }
  if (str[0] !== "-") {
    result = str
      .split("-")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join("");
    return result[0].toLowerCase() + result.slice(1);
  }
}
