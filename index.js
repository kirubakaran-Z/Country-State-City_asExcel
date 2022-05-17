const fs = require("fs");
const xlsx = require("json-as-xlsx");
const loadnotes = function () {
  try {
    const databuffer = fs.readFileSync("./countries+states+cities.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

/*****************************************
//For Country Code and Country Name Extraction
*****************************************/
// const extractExcel = function () {
//   const notes = loadnotes();
//   let data = [
//     {
//       sheet: "FilteredData",
//       columns: [
//         { label: "Countries", value: "conturies" },
//         { label: "Code", value: "code" },
//         { label: "Phone Code", value: "phonecode" },
//       ],
//       content: [],
//     },
//   ];
//   for (let i = 0; i < notes.length; i++) {
//     let alter = {
//       conturies: notes[i].name,
//       code: notes[i].iso2,
//       phonecode: notes[i].phone_code,
//     };
//     data[0].content.push(alter);
//   }
//   let settings = {
//     fileName: "./ExportAll", // Name of the resulting spreadsheet
//     extraLength: 3, // A bigger number means that columns will be wider
//     writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
//   };

//   xlsx(data, settings);
//   console.log("excel exported");
// };

// /*****************************************
// //For State Name Code and Country Name Extraction
// *****************************************/
// const extractExcel = function () {
//   const notes = loadnotes();
//   let data = [
//     {
//       sheet: "FilteredData",
//       columns: [
//         { label: "States", value: "states" },
//         { label: "Code", value: "code" },
//         { label: "Country", value: "country" },
//       ],
//       content: [],
//     },
//   ];
//   for (let i = 0; i < notes.length; i++) {
//     for (let j = 0; j < notes[i].states.length; j++) {
//       let alter = {
//         states: notes[i].states[j].name,
//         code: notes[i].states[j].state_code,
//         country: notes[i].name,
//       };
//       data[0].content.push(alter);
//     }
//   }
//   let settings = {
//     fileName: "./ExportAll", // Name of the resulting spreadsheet
//     extraLength: 3, // A bigger number means that columns will be wider
//     writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
//   };

//   xlsx(data, settings);
//   console.log("excel exported");
// };

/*****************************************
//For city Name state name and Country Name Extraction
*****************************************/
const extractExcel = function () {
  const notes = loadnotes();
  let data = [
    {
      sheet: "FilteredData",
      columns: [
        { label: "cities", value: "cities" },
        { label: "States", value: "states" },
        { label: "Country", value: "country" },
      ],
      content: [],
    },
  ];
  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < notes[i].states.length; j++) {
      for (let k = 0; k < notes[i].states[j].cities.length; k++) {
        let alter = {
          cities: notes[i].states[j].cities[k].name,
          states: notes[i].states[j].name,
          country: notes[i].name,
        };
        data[0].content.push(alter);
      }
    }
  }
  let settings = {
    fileName: "./ExportAll", // Name of the resulting spreadsheet
    extraLength: 3, // A bigger number means that columns will be wider
    writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
  };

  xlsx(data, settings);
  console.log("excel exported");
};
extractExcel();
// const value = loadnotes();
// console.log(value[0].states[0]);
