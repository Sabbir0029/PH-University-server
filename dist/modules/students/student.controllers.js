"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
// import status from "http-status";
const student_services_1 = require("./student.services");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// import sendResponse from '../../utils/sendResponse';
const getSingleStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_services_1.StudentServices.getSingleStudentFromDB(studentId);
        // res.status(200).json({
        //   success: true,
        //   message: 'Student is retrieved succesfully',
        //   data: result,
        // });
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Student is retrieved succesfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_services_1.StudentServices.getAllStudentsFromDB();
        // res.status(200).json({
        //   success: true,
        //   message: 'Student is retrieved succesfully',
        //   data: result,
        // });
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Student are retrieved succesfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_services_1.StudentServices.deleteStudentFromDB(studentId);
        // res.status(200).json({
        //   success: true,
        //   message: 'Student is deleted succesfully',
        //   data: result,
        // });
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Student is deleted succesfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteStudent,
};
