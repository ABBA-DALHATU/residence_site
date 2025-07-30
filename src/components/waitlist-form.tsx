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
  message: z.string().optional(),
  // Landlord fields
  landlordState: z.string().optional(),
  landlordLocality: z.string().optional(),
  landlordLandmarks: z.array(z.string()).optional(),
  landlordAddress: z.string().optional(),
  landlordPaymentType: z.string().optional(),
  landlordPriceRange: z.string().optional(),
  landlordPropertyType: z.string().optional(),
  landlordBedrooms: z.string().optional(),
  landlordBathrooms: z.string().optional(),
  landlordToilets: z.string().optional(),
  landlordLivingRooms: z.string().optional(),
  landlordStayDuration: z.string().optional(),
  landlordCondition: z.string().optional(),
  landlordFurnishing: z.string().optional(),
  landlordAmenities: z.array(z.string()).optional(),
  landlordHouseRules: z.array(z.string()).optional(),
  landlordAvailability: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.role === "LANDLORD") {
    if (!data.landlordState || data.landlordState.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "State is required",
        path: ["landlordState"],
      });
    }
    if (!data.landlordLocality || data.landlordLocality.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Locality is required",
        path: ["landlordLocality"],
      });
    }
    if (!data.landlordPaymentType || data.landlordPaymentType.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Payment type is required",
        path: ["landlordPaymentType"],
      });
    }
    if (!data.landlordPriceRange || data.landlordPriceRange.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Price range is required",
        path: ["landlordPriceRange"],
      });
    }
    if (!data.landlordPropertyType || data.landlordPropertyType.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Property type is required",
        path: ["landlordPropertyType"],
      });
    }
    if (!data.landlordBedrooms || data.landlordBedrooms.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Number of bedrooms is required",
        path: ["landlordBedrooms"],
      });
    }
    if (!data.landlordBathrooms || data.landlordBathrooms.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Number of bathrooms is required",
        path: ["landlordBathrooms"],
      });
    }
    if (!data.landlordToilets || data.landlordToilets.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Number of toilets is required",
        path: ["landlordToilets"],
      });
    }
    if (!data.landlordLivingRooms || data.landlordLivingRooms.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Number of living rooms is required",
        path: ["landlordLivingRooms"],
      });
    }
    if (!data.landlordStayDuration || data.landlordStayDuration.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Stay duration is required",
        path: ["landlordStayDuration"],
      });
    }
    if (!data.landlordCondition || data.landlordCondition.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Property condition is required",
        path: ["landlordCondition"],
      });
    }
    if (!data.landlordFurnishing || data.landlordFurnishing.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Furnishing status is required",
        path: ["landlordFurnishing"],
      });
    }
    if (!data.landlordAvailability || data.landlordAvailability.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Availability is required",
        path: ["landlordAvailability"],
      });
    }
  }
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
      message: "",
      landlordState: "",
      landlordLocality: "",
      landlordLandmarks: [],
      landlordAddress: "",
      landlordPaymentType: "",
      landlordPriceRange: "",
      landlordPropertyType: "",
      landlordBedrooms: "",
      landlordBathrooms: "",
      landlordToilets: "",
      landlordLivingRooms: "",
      landlordStayDuration: "",
      landlordCondition: "",
      landlordFurnishing: "",
      landlordAmenities: [],
      landlordHouseRules: [],
      landlordAvailability: "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setIsSubmitting(true);
      const result = await addToWaitlist(data);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success(
        "Successfully joined the waitlist! We'll be in touch soon."
      );
      form.reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast.error(error?.message || "Something went wrong. Please try again.");
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

        {/* Landlord-specific fields */}
        {form.watch("role") === "LANDLORD" && (
          <div className="space-y-6 border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Details</h3>
            
            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="landlordState"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      >
                        <option value="">Select state</option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="FCT">FCT (Abuja)</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="landlordLocality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Locality/Neighborhood</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Lekki, Ikeja, Gwarinpa"
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Nearby Landmarks */}
            <FormField
              control={form.control}
              name="landlordLandmarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nearby Landmarks (Select all that apply)</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["School/University", "Market", "Hospital", "Main Road", "Mosque", "Church", "Shopping Mall", "Bank", "Restaurant"].map((landmark) => (
                        <div key={landmark} className="flex items-center space-x-2">
                          <Checkbox
                            id={landmark}
                            checked={field.value?.includes(landmark)}
                            onCheckedChange={(checked) => {
                              const current = field.value || [];
                              if (checked) {
                                field.onChange([...current, landmark]);
                              } else {
                                field.onChange(current.filter(item => item !== landmark));
                              }
                            }}
                          />
                          <label htmlFor={landmark} className="text-sm text-gray-700">{landmark}</label>
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Specific Address */}
            <FormField
              control={form.control}
              name="landlordAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specific Address (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Street address, building name, etc."
                      className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Payment Type and Price Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="landlordPaymentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Type</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      >
                        <option value="">Select payment type</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                        <option value="Per Night">Per Night</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Per Semester">Per Semester</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="landlordPriceRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price Range</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. ₦500,000 - ₦1,000,000"
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Property Type */}
            <FormField
              control={form.control}
              name="landlordPropertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                    >
                      <option value="">Select property type</option>
                      <option value="Flat/Apartment">Flat/Apartment</option>
                      <option value="Duplex">Duplex</option>
                      <option value="Bungalow">Bungalow</option>
                      <option value="Self-Contained">Self-Contained</option>
                      <option value="Studio Apartment">Studio Apartment</option>
                      <option value="Hostel Room">Hostel Room</option>
                      <option value="Boys Quarter (BQ)">Boys Quarter (BQ)</option>
                      <option value="Shared Apartment">Shared Apartment</option>
                      <option value="Short Let">Short Let</option>
                      <option value="Mini Flat">Mini Flat</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Mansion">Mansion</option>
                      <option value="Co-Living Space">Co-Living Space</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Number of Rooms */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="landlordBedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5 and Above</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="landlordBathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bathrooms</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="landlordToilets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toilets</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="landlordLivingRooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Living Rooms</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      >
                        <option value="">Select</option>
                        <option value="None">None</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Stay Duration */}
            <FormField
              control={form.control}
              name="landlordStayDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stay Duration</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                    >
                      <option value="">Select stay duration</option>
                      <option value="Short Let (Per Night)">Short Let (Per Night)</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Half Year">Half Year</option>
                      <option value="Annually">Annually</option>
                      <option value="Long-Term">Long-Term</option>
                      <option value="Student Term (Per Semester)">Student Term (Per Semester)</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Property Condition and Furnishing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="landlordCondition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Condition</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      >
                        <option value="">Select condition</option>
                        <option value="Brand New">Brand New</option>
                        <option value="Renovated">Renovated</option>
                        <option value="Fairly Used">Fairly Used</option>
                        <option value="Old">Old</option>
                        <option value="Needs Renovation">Needs Renovation</option>
                        <option value="Under Construction">Under Construction</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="landlordFurnishing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Furnishing</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                      >
                        <option value="">Select furnishing</option>
                        <option value="Fully Furnished">Fully Furnished</option>
                        <option value="Semi-Furnished">Semi-Furnished</option>
                        <option value="Not Furnished">Not Furnished</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Amenities */}
            <FormField
              control={form.control}
              name="landlordAmenities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amenities/Features (Select all that apply)</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Wi-Fi", "Generator", "24/7 Light", "Prepaid Meter", "Borehole Water", "POP Ceiling", 
                        "Air Conditioning", "Kitchen Cabinets", "Gas Cooker Installed", "Fridge/Freezer", 
                        "Bed/Mattress", "Wardrobe", "Balcony", "Private Toilet", "Private Kitchen", 
                        "Shared Toilet", "Shared Kitchen", "Laundry Area", "DSTV/Cable Ready", "Security", 
                        "CCTV Cameras", "Cleaning Services", "Parking Space", "Swimming Pool", "Gym", 
                        "Elevator", "Intercom"
                      ].map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox
                            id={amenity}
                            checked={field.value?.includes(amenity)}
                            onCheckedChange={(checked) => {
                              const current = field.value || [];
                              if (checked) {
                                field.onChange([...current, amenity]);
                              } else {
                                field.onChange(current.filter(item => item !== amenity));
                              }
                            }}
                          />
                          <label htmlFor={amenity} className="text-sm text-gray-700">{amenity}</label>
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* House Rules */}
            <FormField
              control={form.control}
              name="landlordHouseRules"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>House Rules/Restrictions (Select all that apply)</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "No Smoking", "No Pets", "No Parties", "Female Only", "Male Only", 
                        "Mixed Gender Allowed", "Couples Allowed", "Visitors Allowed", 
                        "No Overnight Guests", "Alcohol Prohibited"
                      ].map((rule) => (
                        <div key={rule} className="flex items-center space-x-2">
                          <Checkbox
                            id={rule}
                            checked={field.value?.includes(rule)}
                            onCheckedChange={(checked) => {
                              const current = field.value || [];
                              if (checked) {
                                field.onChange([...current, rule]);
                              } else {
                                field.onChange(current.filter(item => item !== rule));
                              }
                            }}
                          />
                          <label htmlFor={rule} className="text-sm text-gray-700">{rule}</label>
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Availability */}
            <FormField
              control={form.control}
              name="landlordAvailability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 text-base"
                    >
                      <option value="">Select availability</option>
                      <option value="Available Now">Available Now</option>
                      <option value="Available Next Week">Available Next Week</option>
                      <option value="Available Next Month">Available Next Month</option>
                      <option value="Pre-Book">Pre-Book</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {/* Build With Us */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-gray-700 mb-2">
                Build with us
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what you would like to have on your management dashboard or any features you'd want to see"
                  className="min-w-full w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg min-h-[100px] resize-vertical"
                  {...field}
                />
              </FormControl>
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
