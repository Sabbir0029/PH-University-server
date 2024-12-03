import { NextFunction, Request, Response } from 'express';
// import status from "http-status";
import { StudentServices } from './student.services';
import sendResponse from '../../utils/sendResponse';
// import sendResponse from '../../utils/sendResponse';

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is retrieved succesfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is retrieved succesfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is deleted succesfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
