import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }).default(""),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character Long" })
    .default(""),
});

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 character Long" })
    .default(""),
  mobile_no: z
    .string()
    .min(10, { message: "Mobile Number must be at least 10 character Long" })
    .default(""),
  email: z.string().email({ message: "Invalid Email Address" }).default(""),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character Long" })
    .default(""),
  cnf_password: z.string().default(""),
});

export const defaultSignupValues = {
  username: "",
  name: "",
  mobile_no: "",
  email: "",
  password: "",
  cnf_password: "",
};

export const RequestPasswordChangeSchema = z.object({
  email: z.string().email("Invalid Email Address"),
});
