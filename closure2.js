"use strict";

function createAgent(name){
    var age = 0;
    return {
        setName: (newName) => {
            name = newName;
        },
        getName: () => {
            return name;
        },
        setAge: (newAge) => {
            age = newAge;
        },
        getAge: () => {
            return age;
        },
        writeParams: () => {
            const output = "Soy " + name + " y tengo " + age + " años";
            console.log(output);
            return output;
        }
    }
}

module.exports = {
    createAgent: createAgent
}