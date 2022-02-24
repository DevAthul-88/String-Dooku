

class Main {
  toUpperCase(str) {
    return str.toUpperCase();
  }
  toLowerCase(str) {
    return str.toLowerCase();
  }

  toPascalCase(str) {
    return (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase();
    });
  }

  toSnakeCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join("_");
  };

  toDotCase = (str = "") => {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join(".");
  };

  toSpaceCase = (str = "") => {
    let tes = "";
    for (var i = 0; i < str.length; i++) {
      tes += str.charAt(i) + " ";
    }
    return tes;
  };

  toTitleCase(str) {
    let sentence = str.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
  }

  length(str) {
    return str.length;
  }

  checkValue(strOne, strTwo) {
    return strOne === strTwo ? true : false;
  }

  duplicationCount(str) {
    if (str) {
      var obj = {};
      for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
          obj[str[i]] += obj[str[i]];
        } else {
          obj[str[i]] = 1;
        }
      }
      return obj;
    }
  }

  reverse(str) {
    return str.split("").reverse().join("");
  }
  longestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
  }

  checkSubstring(strOne, strTwo) {
    return strOne.includes(strTwo);
  }

  toString(str) {
    return JSON.stringify(str);
  }
  toArray(str) {
    return str.split(" ");
  }
  characterAt(str, num) {
    return str.charAt(num);
  }
  endsWith(str, strTwo) {
    return str.endsWith(strTwo);
  }

  toUtf8(str) {
    return decodeURIComponent(str);
  }
}

module.exports = Main;
