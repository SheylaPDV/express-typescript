"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
// Importamos el tipo personalizado creado en types.d.ts
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveInfo = () => diaries;
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addEntry = () => undefined;
exports.addEntry = addEntry;
