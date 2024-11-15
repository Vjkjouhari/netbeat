import CommonLayout from "../layout/CommonLayout";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { InputField } from "../element/InputField";
import { z } from "zod";
import { RequestPasswordChangeSchema } from "../../config/FormSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogoWithText } from "./Signup";
import { Link } from "react-router-dom";

export const ForgetPassword = () => {
  // const [isMobile, setIsMobile] = useState<Boolean>(false);
  const form = useForm({
    resolver: zodResolver(RequestPasswordChangeSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: z.infer<typeof RequestPasswordChangeSchema>) => {
    console.log(data);
  };

  // const handleClick = () => {
  //   isMobile ? setIsMobile(false) : setIsMobile(true);
  //   form.reset();
  // };

  return (
    <CommonLayout>
      <LogoWithText name={"Reset Password"} />
      <Form {...form}>
        <form
          className="w-3/4 font-sans m-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="font-sans text-[#4A628A]">
            <InputField type="email" label="Email" form={form} name="email" />
            <div className="flex items-end justify-end mr-4">
              <Link to="/auth/sign-in">
                <span className="text-sm font-medium hover:underline">
                  Already have an Account
                </span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#4A628A] w-2/3 rounded-lg text-white p-2 m-4">
              Submit
            </button>
          </div>
          {/* <div className="mb-4 flex items-center justify-center">
            <button
              className=" text-gray-500 border-none"
              onClick={handleClick}
            >
              {isMobile
                ? "Reset Password using Mobile"
                : "Reset Password using Email"}
            </button>
          </div> */}
        </form>
      </Form>
    </CommonLayout>
  );
};
