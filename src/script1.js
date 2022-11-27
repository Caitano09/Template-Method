"use strict";
let txt;
let json;
function preload() {
    txt = loadStrings('files/customer.txt');
    json = loadJSON('files/customer.json');
}
function setup() {
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    var abstractReadData = /** @class */ (function () {
        function abstractReadData(filePath) {
            var _this = this;
            this.filePath = filePath;
            this.custumerData = [];
            this.fixCustumerDataMethod = function () {
                return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, this.parseData()];
                            case 1:
                                _a.custumerData = _b.sent();
                                this.custumerData = this.fixCpf();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        }
        abstractReadData.prototype.fixCpf = function () {
            return this.custumerData.map(function (custumer) {
                return __assign(__assign({}, custumer), { cpf: custumer.cpf.replace(/\D/g, '') });
            });
        };
        abstractReadData.prototype.hook = function () { };
        return abstractReadData;
    }());
    var concreteReadDataTxt = /** @class */ (function (_super) {
        __extends(concreteReadDataTxt, _super);
        function concreteReadDataTxt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        concreteReadDataTxt.prototype.parseData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var rawData, data, lines, custumerData, _i, lines_1, line, _a, name_1, age, cpf;
                return __generator(this, function (_b) {
                    rawData = txt
                    data = rawData.toString();
                    lines = data.split(',');
                    custumerData = [];
                    for (_i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                        line = lines_1[_i];
                        _a = line.split('\t'), name_1 = _a[0], age = _a[1], cpf = _a[2];
                        custumerData.push({ name: name_1, age: age, cpf: cpf });
                    }
                    return [2 /*return*/, custumerData];
                });
            });
        };
        return concreteReadDataTxt;
    }(abstractReadData));

    var concreteReadDataJson = /** @class */ (function (_super) {
        __extends(concreteReadDataJson, _super);
        function concreteReadDataJson() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        concreteReadDataJson.prototype.parseData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var rawData, data, custumerData, _i, data_1, customer, name_2, age, cpf;
                return __generator(this, function (_a) {
                    rawData = json
                    data = json[0];
                    custumerData = [];
                    for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                        customer = data_1[_i];
                        name_2 = customer.name, age = customer.age, cpf = customer.cpf;
                        custumerData.push({ name: name_2, age: age, cpf: cpf });
                    }
                    return [2 /*return*/, custumerData];
                });
            });
        };
        return concreteReadDataJson;
    }(abstractReadData));
    function run() {
        return __awaiter(this, void 0, void 0, function () {
            var filePathTxt, customerDataTxt, filePathJson, customerDataJson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filePathTxt = './files/customer.txt';
                        customerDataTxt = new concreteReadDataTxt(filePathTxt);
                        return [4 /*yield*/, customerDataTxt.fixCustumerDataMethod()];
                    case 1:
                        _a.sent();
                        console.log(customerDataTxt.custumerData);
                        console.log('-------------------------------');
                        filePathJson = './files/customer.json';
                        customerDataJson = new concreteReadDataJson(filePathJson);
                        return [4 /*yield*/, customerDataJson.fixCustumerDataMethod()];
                    case 2:
                        _a.sent();
                        console.log(customerDataJson.custumerData);
                        return [2 /*return*/];
                }
            });
        });
    }
    run();
}
