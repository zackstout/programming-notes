class Solution {
  key = "7z7z7z7z7z77z7z7z7z7z7z77z7z7z7z";
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (strs.length === 0) return "EMPTY";
    return strs.join(this.key);
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (str === "EMPTY") return [];
    return str.split(this.key);
  }
}

// Lol just a dumb hack
// "Real" way             result += `${s.length}#${s}`;
// So... is "#" guaranteed to not be in the string??
// Oh no I guess not needed... because we always see numbers, then "#", then we know how far to look ahead.. Then repeat.
