const fs = require('fs');

let csvToJSON = require('./source.json');

let newObj = {};

csvToJSON.map(i => {
    if (newObj[i.userId]) {
        newObj[i.userId]["Reward Point"] = newObj[i.userId]["Reward Point"] + i["Reward Point"]
    } else {
        newObj[i.userId] = i;
    }
});

fs.writeFileSync("./public/resut.json",JSON.stringify(Object.values(newObj)))