"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpAction } from "@/actions/auth.action";
import { signUpFormSchema } from "@/types";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    mode: "onBlur", // Validation happens when fields lose focus
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    setLoading(true);
    try {
      const res = await signUpAction(values);
      if (res.success) {
        toast.success("Registration successful!");
        router.push("/login");
      } else {
        toast.error(res.error || "Something went wrong, please try again.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="border-2 py-8 rounded-md ">
     <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
        aria-live="polite"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <div className="flex items-center gap-5">
              <FormLabel htmlFor="name" className="text-[15px]">Username:</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  aria-invalid={!!fieldState.error}
                  aria-describedby="name-error"
                  {...field}
                />
                
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              </div>
              
              <FormMessage id="name-error">{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
             <div className="flex items-center gap-5">
             <FormLabel className="text-[15px] ml-10" htmlFor="email">Email:</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  aria-invalid={!!fieldState.error}
                  aria-describedby="email-error"
                  {...field}
                />
              </FormControl>
             </div>
              <FormMessage id="email-error">{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <div className="flex items-center gap-5" >
              <FormLabel 
              className="text-[15px] "
              htmlFor="password">Password:</FormLabel>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  aria-invalid={!!fieldState.error}
                  aria-describedby="password-error"
                  {...field}
                />
              </FormControl>
              </div>
              <FormMessage id="password-error">{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <div className="flex items-center gap-5">
              <FormLabel
              className="text-[15px] "
              htmlFor="confirmPassword">Confirm Password:</FormLabel>
              <FormControl>
                <Input
                className="w-52"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  aria-invalid={!!fieldState.error}
                  aria-describedby="confirmPassword-error"
                  {...field}
                />
              </FormControl>
              </div>
              <FormMessage id="confirmPassword-error">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button className="bg-black hover:bg-black/80" type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>
        <Link className="text-sm mt-5 " href="/login">
          {/* Already have an account? */}
        </Link>
      </form>
    </Form>
   </div>
  );
};

export default SignUpForm;
