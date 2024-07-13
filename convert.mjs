#!/usr/bin/env zx

const buf = fs.readFileSync("./ports.lists.json");
const jsonObj = JSON.parse(buf.toString());

let newObject = {
    ports: [],
};
Object.entries(jsonObj).forEach(([key, value]) => {
    console.log(`${key} ${JSON.stringify(value)}`);
    newObject.ports.push({
        port: key,
        description: value,
    });
});

fs.writeFileSync("./ports.swift.json", JSON.stringify(newObject, null, 2));
