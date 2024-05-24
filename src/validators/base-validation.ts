import { body, validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { CustomError, errorHandler } from "../core/global-error";

// export const validateForm = (
//   request: Request,
//   response: Response,
//   next: NextFunction
// ) => {
//   const errors = validationResult(request);
//   if (!errors.isEmpty()) {
//     return response.status(400).json({ errors: errors.array() });
//   }
//   next(); // Call the next middleware if validation passes
// };

export const validateForm = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    const errorMessages: string[] = errors.array().map((error) => error.msg);
    const error = new CustomError(400, "BAD_REQUEST", errorMessages[0]);
    return errorHandler(error, request, response, next);
  }
  next();
};

export const initializeValidationRules: ValidationChain[] = [
  body("email")
    .notEmpty()
    .withMessage("Please enter email")
    .isEmail()
    .withMessage("Please enter a valid email"),
  body("firstName").notEmpty().withMessage("Please enter a phone number"),
  body("userRole")
    .notEmpty()
    .withMessage("Please select a user type")
    .isIn(["PT", "PH", "MCA", "DC", "PA", "PN", "MH"])
    .withMessage("The selected user type does not exist on our platform"),
];
