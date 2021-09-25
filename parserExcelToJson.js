const fs = require("fs");
const XLSX = require("xlsx");

let workbook = XLSX.readFile("./Final_DataBase_RF_Article.xlsx");
let sheet_name_list = workbook.SheetNames;
let result = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
let json = JSON.stringify(result);

fs.writeFileSync("output.json", json);
