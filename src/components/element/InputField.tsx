import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputFieldProps {
  name: string;
  form: any;
  type: string;
  label: string;
  classname?: string;
  disabled?: boolean;
  icon?: JSX.Element;
}
export const InputField = ({
  name,
  type,
  label,
  classname,
  disabled,
}: InputFieldProps) => {
  const { control } = useFormContext();
  switch (type) {
    case "text":
      return (
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className={`m-2 space-y-0 ${classname}`}>
              <FormLabel className="pl-0.5 fornt-sans text-sm text-bold">
                {label}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"Enter " + label + " . . ."}
                  type={type}
                  {...field}
                  disabled={disabled}
                  className="font-sans pl-2 text-gray-700"
                  autoComplete="off"
                />
              </FormControl>
            </FormItem>
          )}
        />
      );
    case "email":
      return (
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className={`m-2 space-y-0 ${classname}`}>
              <FormLabel className="pl-0.5 fornt-sans text-sm text-bold">
                {label}
              </FormLabel>
              <FormControl>
                <Input
                  className="font-sans pl-2 text-gray-700"
                  placeholder="Email"
                  {...field}
                  disabled={disabled}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "password":
      const [showPassword, setShowPassword] = useState(false);
      return (
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className={`m-2 space-y-0 ${classname}`}>
              <FormLabel className="pl-0.5 fornt-sans text-sm text-bold">
                {label}
              </FormLabel>
              <div className="flex items-end">
                <FormControl>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    disabled={disabled}
                    autoComplete="off"
                    className="font-sans pl-2 text-gray-700"
                  />
                </FormControl>
                {showPassword ? (
                  <Eye
                    className="self-center w-5 h-5 -ml-10 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeOff
                    className="self-center w-5 h-5 -ml-10 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    default:
      return null;
  }
};
