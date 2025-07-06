"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { addToWaitlist } from "@/actions";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  role: z.enum(["TENANT", "LANDLORD"], {
    required_error: "Please select a role.",
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setIsSubmitting(true);
      const { terms, ...submitData } = data;
      const result = await addToWaitlist(submitData);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success(
        "Successfully joined the waitlist! We'll be in touch soon."
      );
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-gray-700 mb-2">
                Full name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your full name"
                  className="min-w-full w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg h-auto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-gray-700 mb-2">
                Email address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="We'll use this to contact you"
                  type="email"
                  className="min-w-full w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg h-auto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-gray-700 mb-2">
                Phone number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Preferably WhatsApp-enabled"
                  type="tel"
                  className="min-w-full w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg h-auto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-gray-700 mb-2">
                Country / City
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Where are you located?"
                  className="min-w-full w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg h-auto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Role Selection */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-base font-medium text-gray-700">
                What are you interested in?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="LANDLORD"
                      id="landlord"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label
                      htmlFor="landlord"
                      className="text-base text-gray-700"
                    >
                      Becoming a Landlord
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="TENANT"
                      id="tenant"
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="tenant" className="text-base text-gray-700">
                      Becoming a Tenant
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="w-5 h-5 mt-0.5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
              </FormControl>
              <div className="space-y-1">
                <FormLabel className="text-base text-gray-700">
                  I accept the{" "}
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-700 underline"
                  >
                    Terms
                  </a>
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium h-auto disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Submitting...
              </div>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}