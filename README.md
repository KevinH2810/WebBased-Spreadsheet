# WebBased-Spreadsheet

## How To Run
  - clone the repository
  ```bash
  $ git clone git@github.com:KevinH2810/WebBased-Spreadsheet.git
  ```

  - open the cloned folder
  - click the `index.html` and you're ready to go

## Formula
- `SUM()` : Used to sum up all cell inside the parenthesis. ex format: =SUM(A1, B1,C1...) or =SUM(A1:F1)

- `DIVIDE(val1, val2)` : used to divide `val1` with `val2`. ex format: =DIVIDE(B3:C8)

- `MULTIPLY(val1, val2)` : used to multiply `val1` with `val2`. ex format: =MULTIPLY(B3:C8)

- `AVERAGE()` : Used to average the of all cell inside the parenthesis divided by total cell. ex format: =AVERAGE(A1, B1,C1...) or =AVERAGE(A1:F1)

- `LEN(val1)` : used to count length of the value inside the cell of `val1`, beware that space are counted.

- `COUNT()` : Used to count all cell inside range that has number on it. ex format: =COUNT(A1, B1,C1...) or =COUNT(A1:F1)

- `COUNTA()` : Used to count all cell  regardless of the datatypes in range. ex format: =COUNTA(A1, B1,C1...) or =COUNTA(A1:F1)

- `RIGHT(val1, val2)`: Used to get string from right/Ending of cell/text on `val1` based on how much `val2` is. ex format =RIGHT(A1,2) or =RIGHT("aaa", 1)

- `LEFT(val1, val2)`: Used to get string from LEFT/beginning of the cell/text on `val1` based on how much `val2` is. ex format =LEFT(A1,2) or =LEFT("aaa", 1)

- `MID(val1, val2, val3)`: Used to get string from position `val2` on cell/text `val1` based on how much `val3` is. ex format =MID(A1,2, 3) or =MID("12345", 2,3)