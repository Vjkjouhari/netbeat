import { Link } from "react-router-dom";
import CommonLayout from "../layout/CommonLayout";
import { Signin } from "../../config/FormTypeInputField";
import { useForm } from "react-hook-form";
import { SignInSchema } from "../../config/FormSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputField } from "../element/InputField";
import { Form } from "../ui/form";
import { LogoWithText } from "./Signup";

export const SignIn = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    console.log(data);
  };

  return (
    <CommonLayout>
      <LogoWithText name={"Sign In"} />
      <Form {...form}>
        <form className=" font-sans" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="font-sans text-[#4A628A]">
            {Signin.map((input) => (
              <>
                <InputField
                  type={input.type}
                  label={input.label}
                  form={form}
                  name={input.id}
                />
                {input.id === "password" && (
                  <div className="flex items-end justify-end mr-4">
                    <Link to="/auth/forgot-password">
                      <span className="text-sm font-medium text-primary hover:underline text-[#4A628A]">
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-[#4A628A] w-2/3 rounded-lg text-white p-2 m-4">
              Sign In
            </button>
          </div>
          <div className="flex font-medium text-sm items-center justify-center mb-4 space-x-4 text-[#4A628A]">
            <Link to="/auth/sign-up">
              <span className="text-sm font-medium  hover:underline">
                Don't Have Account ? Sign Up
              </span>
            </Link>
          </div>
        </form>
      </Form>
    </CommonLayout>
  );
};
