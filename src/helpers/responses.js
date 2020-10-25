export const UNAUTHORIZED = (
  res,
  message = "You are authorized to access this route",
  data
) => res.status(401).json({ status: error, error_code: 401, message, data });

export const CREATED = (res, message = "Resource successfully created", data) =>
  res.status(201).json({ status: 201, message, data });

export const SUCCESS = (res, message = "Successful", data) =>
  res.status(200).json({ status: 200, message, data });

export const BAD_REQUEST = (
  res,
  message = "An error occured, please the data you are sending",
  data
) => res.status(400).json({ status: "error", error_code: 400, message, data });

export const NOT_FOUND = (res, message = "Resource not found", data) =>
  res.status(404).json({ status: "error", error_code: 404, message, data });

export const CONFLICT = (res, message = "Resource has conflicts", data) =>
  res.status(409).json({ status: "error", error_code: 409, message, data });

export const NO_CONTENT = (res, message = "Operation Successful", data) =>
  res.status(204).json({ status: 204, message, data });

export const SERVER_ERROR = (
  res,
  message = "An error occurred, its not you its from us",
  data
) => res.status(500).json({ status: "error", error_code: 500, message, data });
