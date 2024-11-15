import { Activity } from "lucide-react";
import CommonLayout from "../layout/CommonLayout";
import { Link } from "react-router-dom";
import { SignUpField } from "../../config/FormTypeInputField";
import { InputField } from "../element/InputField";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { defaultSignupValues, SignUpSchema } from "../../config/FormSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [apiResponse, setApiResponse] = useState<any>([]);
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: defaultSignupValues,
  });

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    console.log(data);
    submitForm(data);
  };

  const submitForm = async (data: z.infer<typeof SignUpSchema>) => {
    console.log("Maydey maydey got hit");
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/sign-up",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = res.data;
      setApiResponse(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(apiResponse);
  return (
    <CommonLayout className="">
      <LogoWithText name={"Sign Up"} />
      <Form {...form}>
        <form
          className="w-3/4 font-sans"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="font-sans text-[#4A628A]">
            {SignUpField.map((input) => (
              <InputField
                type={input.type}
                label={input.label}
                form={form}
                name={input.id}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-[#4A628A] w-2/3 rounded-lg text-white p-2 m-4">
              Sign Up
            </button>
          </div>
        </form>
      </Form>
      <div className="flex text-sm font-medium items-end justify-end mb-4 space-x-4">
        <Link to="/auth/sign-in">
          <span className="text-sm text-[#acc2e9] font-medium text-[#4A628A] hover:underline">
            Already Have Account Sign In
          </span>
        </Link>
      </div>
    </CommonLayout>
  );
}

export const LogoWithText = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <div className="flex flex-col m-4 w-12 h-12  border-2 rounded-full border-white">
        <Activity size="48" color="#4A628A" />
      </div>
      <div className="font-sans">
        <h1 className="text-3xl font-bold text-[#4A628A]">{name}</h1>
      </div>
    </div>
  );
};
