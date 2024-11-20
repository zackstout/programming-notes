class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = board.every((r) => this.allUnique(r));
    const cols = [...new Array(board[0].length)]
      .map((_, i) => i)
      .map((i) => board.map((r) => r[i]))
      .every((c) => this.allUnique(c));

    // console.log("rows",rows,"cols",cols, [...new Array(board[0].length)]
    // .map((_,i)=>i)
    // .map(i=>board.map(r=>r[i])));

    if (!rows || !cols) return false;

    // Now do squares...

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const arr = board
          .slice(i * 3, i * 3 + 3)
          .map((r) => r.slice(j * 3, j * 3 + 3))
          .flat();
        if (!this.allUnique(arr)) {
          return false;
        }
      }
    }

    return true;
  }

  allUnique(arr) {
    const arr2 = arr.filter((x) => x !== ".");
    return [...new Set(arr2)].length === arr2.length;
  }
}
