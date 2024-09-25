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
// import { signUpFormSchema } from "@/types/forms";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpAction } from "@/actions/auth.action";
import { signUpFormSchema } from "@/types";
import WorkStatusForm from "@/components/work-status-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Briefcase, GraduationCap, Upload } from "lucide-react"
const SignUpForm = () => {
  const [selectedTab, setSelectedTab] = useState("experienced")
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: 1234567890,
    },
  });
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    console.log(values);
    const res = await signUpAction(values);
    if (res.success) {
      toast.success(res.data);
      router.push("/login");
    } else {
      toast.error(res.error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-96"
      >
        <FormField

          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="name@example.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+91 ***********" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full mt-2">
          <Label htmlFor="work-status">Work status*</Label>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full mt-1.5">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="experienced" className="flex items-center justify-center">
                <Briefcase className="w-4 h-4 mr-2" />
                I'm experienced
              </TabsTrigger>
              <TabsTrigger value="fresher" className="flex items-center justify-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                I'm a fresher
              </TabsTrigger>
            </TabsList>
            <TabsContent value="experienced" className="mt-2 text-sm text-muted-foreground">
              I have work experience (excluding internships)
            </TabsContent>
            <TabsContent value="fresher" className="mt-2 text-sm text-muted-foreground">
              I am a student/ Haven't worked after graduation
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex items-center justify-center w-full">
          <Label
            htmlFor="resume-upload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
              <p className="mb-2 text-sm text-muted-foreground">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">DOC, DOCX, PDF, RTF (MAX. 2MB)</p>
            </div>
            <input id="resume-upload" type="file" className="hidden" />
          </Label>
        </div>

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-5">Register</Button>
        
      </form>
    </Form>
  );
};

export default SignUpForm;