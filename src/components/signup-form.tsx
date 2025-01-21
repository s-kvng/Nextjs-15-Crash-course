"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Eye, EyeOff, PersonStanding } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }).regex(/^(?=.*[A-Z])(?=.*[0-9])/, {
    message: "Password must contain at least 1 uppercase letter and 1 number.",
  }),
  gender: z.enum(["male", "female"], {
    required_error: "Please select your gender.",
  }),
});

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
 // const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      gender: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // toast({
    //   title: "Account created!",
    //   description: "Welcome to our community!",
    // });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your username" 
                  {...field}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  {...field}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    {...field}
                    className="h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant={field.value === "male" ? "default" : "outline"}
                  className={`h-20 ${
                    field.value === "male"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : ""
                  }`}
                  onClick={() => field.onChange("male")}
                >
                  <div className="flex flex-col items-center gap-2">
                    <PersonStanding className="h-6 w-6" />
                    <span>Male</span>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant={field.value === "female" ? "default" : "outline"}
                  className={`h-20 ${
                    field.value === "female"
                      ? "bg-pink-500 hover:bg-pink-600"
                      : ""
                  }`}
                  onClick={() => field.onChange("female")}
                >
                  <div className="flex flex-col items-center gap-2">
                    <PersonStanding className="h-6 w-6" />
                    <span>Female</span>
                  </div>
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <Button type="submit" className="w-full h-12">
            Create Account
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}