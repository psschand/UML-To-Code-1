const CSVHandler = require("./dist/CSVHandler").default;
const Project = require("./dist/Project").default;
const ApexConstructor = require("./dist/ApexConstructor").default;
const TypeScriptConstructor = require("./dist/TypeScriptConstructor").default;

const path = "/Users/gbarker/Downloads/_Blank UML.csv";
//const path = "/Users/gbarker/Downloads/TesterDiagram (2).csv";
const p = new Project(path, new TypeScriptConstructor());
p.createClasses();
