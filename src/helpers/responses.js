export const UNAUTHORIZED = (res, message) =>
  res.status(401).json({ status: error, error_code: 401, message });

export const CREATED = (res, data) =>
  res.status(201).json({ status: 201, data });

export const SUCCESS = (res, data) =>
  res.status(200).json({ status: 200, data });

export const BAD_REQUEST = (res, message) =>
  res.status(400).json({ status: "error", error_code: 400, message });

export const NOT_FOUND = (res, message) =>
  res.status(404).json({ status: "error", error_code: 404, message });

export const CONFLICT = (res, message) =>
  res.status(409).json({ status: "error", error_code: 409, message });

export const NO_CONTENT = (res, message) =>
  res.status(204).json({ status: 204, message });

export const SERVER_ERROR = (res, message) =>
  res.status(500).json({ status: "error", error_code: 500, message });
