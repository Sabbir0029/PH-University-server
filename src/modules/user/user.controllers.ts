// import httpStatus from 'http-status';

import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.services';
import sendResponse from '../../utils/sendResponse';
// import sendResponse from '../../utils/sendResponse';
// import { UserServices } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    // res.status(200).json({
    //     success: true,
    //     message: 'Student is created succesfully',
    //     data: result,
    //   });

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};