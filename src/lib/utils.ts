import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const ProfileSchema = z.object({
  userId: z.string().uuid(),
  firstName: z.string({ required_error: "First name is required" }).min(2, { message: "First name must be at least 2 characters long" }),
  lastName: z.string({ required_error: "Last name is required" }).min(3, { message: "Last name must be at least 3 characters long" }),
  age: z.coerce.number({ required_error: "Age is required" }).lte(100, { message: "Must be less than 100 years old" }).gte(18, { message: "Must be at least 18 years old" }),
  ethnicity: z.string({ required_error: "Ethnicity is required" }).min(3, { message: "Ethnicity must be at least 3 characters long" }),
  gender: z.string({ required_error: "Gender is required" }),
  bio: z.string({ required_error: "Bio is required" }).min(10, { message: "Bio must be at least 10 characters long" }),
  imageUrl: z.string(),
  myersBriggsPersonalityType: z.string({ required_error: "Personality type is required" }),
  verified: z.boolean(),
});
export type ProfileForm = z.infer<typeof ProfileSchema>;

export const NewUserSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }).min(2, { message: "First name must be at least 2 characters long" }),
  lastName: z.string({ required_error: "Last name is required" }).min(3, { message: "Last name must be at least 3 characters long" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Must be a valid email" }),
  password: z.string({ required_error: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" }),
  otp: z.string(),
  confirm: z.string({ required_error: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" }),
  age: z.coerce.number({ required_error: "Age is required" }).gte(18, { message: "Must be at least 18 years old" }).lte(100, { message: "Must be less than 100 years old" }),
  ethnicity: z.string({ required_error: "Ethnicity is required" }).min(3, { message: "Ethnicity must be at least 3 characters long" }),
  gender: z.string({ required_error: "Gender is required" }),
  bio: z.string({ required_error: "Bio is required" }).min(10, { message: "Bio must be at least 10 characters long" }),
  image: z.any()
  .optional()
  .nullable()
  .refine((file) => { return !!file || file.size > 5 * 1024 * 1024 }, { message: "Image size should be smaller then 5MB" })
  .refine((file) => { return !!file || file.type === "image/jpeg" || file.type === "image/jpg" }, { message: "Image type should be jpeg" }),
  imageUrl: z.string(),
  myersBriggsPersonalityType: z.string({ required_error: "Personality type is required" })
}).refine(data => data.password === data.confirm, {
  message: "Passwords do not match",
  path: ["confirm"],
});

export type NewUserForm = z.infer<typeof NewUserSchema>;

export const LoginFormSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Must be a valid email" }),
  password: z.string({ required_error: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;

export const PasswordRestSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Must be a valid email" }),
  otp: z.string({ required_error: "OTP is required" }).min(6, { message: "OTP must be at least 6 characters long" }),
  password: z.string({ required_error: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" }),
  confirm: z.string({ required_error: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" }),
}).refine(data => data.password === data.confirm, {
  message: "Passwords do not match",
  path: ["confirm"],
});

export type PasswordResetForm = z.infer<typeof PasswordRestSchema>;
