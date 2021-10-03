import axios from "axios"; // API fetcher

// Form validator

// Returns true if input is empty or has whitespaces
export const isEmpty = (input: string): boolean => {
  return !input || !input.trim();
};

export const isEmail = (email: string): boolean => {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// Google reCAPTCHA validation (validating the frontend's generated token through Google's API)
export const validateHuman = async (token: string): Promise<boolean> => {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${token}`
  );
  return res.data.success; // True if human user
};
