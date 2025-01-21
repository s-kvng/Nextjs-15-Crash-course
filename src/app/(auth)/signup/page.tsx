"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import SignupForm from "@/components/signup-form";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Join our community</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground">
            Sign up now and unlock all features
          </p>
        </div>
        
        <SignupForm />
      </div>
    </div>
  );
}