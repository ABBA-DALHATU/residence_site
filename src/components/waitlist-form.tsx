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

const landlordPropertyTypes = [
  "Flat/Apartment", "Duplex", "Bungalow", "Self Contained", "Studio Apartment", "Hostel Room", "Boys Quarter (BQ)", "Shared Apartment", "Short Let", "Mini Flat", "Penthouse", "Mansion", "Co Living Space"
];
const paymentTypes = [
  "Monthly", "Yearly", "Per Night", "Weekly", "Per Semester"
];
const stayDurations = [
  "Short Let (Per Night)", "Weekly", "Monthly", "Quarterly", "Half Year", "Annually", "Long Term", "Student Term (Per Semester)"
];
const propertyConditions = [
  "Brand New", "Renovated", "Fairly Used", "Old", "Needs Renovation", "Under Construction"
];
const furnishingOptions = [
  "Fully Furnished", "Semi-Furnished", "Not Furnished"
];
const amenitiesOptions = [
  "Wi-Fi", "Generator", "24/7 Light", "Prepaid Meter", "Borehole Water", "POP Ceiling", "Air Conditioning", "Kitchen Cabinets", "Gas Cooker Installed", "Fridge / Freezer", "Bed / Mattress", "Wardrobe", "Balcony", "Private Toilet", "Private Kitchen", "Shared Toilet", "Shared Kitchen", "Laundry Area", "DSTV / Cable Ready", "Security", "CCTV Cameras", "Cleaning Services", "Parking Space", "Swimming Pool", "Gym", "Elevator", "Intercom"
];
const houseRulesOptions = [
  "No Smoking", "No Pets", "No Parties", "Female Only", "Male Only", "Mixed Gender Allowed", "Couples Allowed", "Visitors Allowed", "No Overnight Guests", "Alcohol Prohibited"
];
const availabilityOptions = [
  "Available Now", "Available Next Week", "Available Next Month", "Pre-Book"
];
const bedroomsOptions = ["1", "2", "3", "4", "5 and Above"];
const bathroomsOptions = ["1", "2", "3", "4+"];
const toiletsOptions = ["1", "2", "3", "4+"];
const livingRoomsOptions = ["None", "1", "2"];

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
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  paymentType: z.string().optional(),
  landlordPropertyType: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  toilets: z.string().optional(),
  livingRooms: z.string().optional(),
  stayDuration: z.string().optional(),
  propertyCondition: z.string().optional(),
  furnishing: z.string().optional(),
  amenities: z.array(z.string()).optional(),
  houseRules: z.array(z.string()).optional(),
  availability: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.role === "LANDLORD") {
    if (!data.minPrice || isNaN(Number(data.minPrice)) || Number(data.minPrice) < 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Minimum price is required and must be a number",
        path: ["minPrice"],
      });
    }
    if (!data.maxPrice || isNaN(Number(data.maxPrice)) || Number(data.maxPrice) < Number(data.minPrice || 0)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Maximum price is required and must be a number greater than or equal to minimum price",
        path: ["maxPrice"],
      });
    }
    if (!data.paymentType || !paymentTypes.includes(data.paymentType)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Payment type is required",
        path: ["paymentType"],
      });
    }
    if (!data.landlordPropertyType || !landlordPropertyTypes.includes(data.landlordPropertyType)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Property type is required",
        path: ["landlordPropertyType"],
      });
    }
    if (!data.bedrooms || !bedroomsOptions.includes(data.bedrooms)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Bedrooms is required",
        path: ["bedrooms"],
      });
    }
    if (!data.bathrooms || !bathroomsOptions.includes(data.bathrooms)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Bathrooms is required",
        path: ["bathrooms"],
      });
    }
    if (!data.toilets || !toiletsOptions.includes(data.toilets)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Toilets is required",
        path: ["toilets"],
      });
    }
    if (!data.livingRooms || !livingRoomsOptions.includes(data.livingRooms)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Living rooms is required",
        path: ["livingRooms"],
      });
    }
    if (!data.stayDuration || !stayDurations.includes(data.stayDuration)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Stay duration is required",
        path: ["stayDuration"],
      });
    }
    if (!data.propertyCondition || !propertyConditions.includes(data.propertyCondition)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Property condition is required",
        path: ["propertyCondition"],
      });
    }
    if (!data.furnishing || !furnishingOptions.includes(data.furnishing)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Furnishing is required",
        path: ["furnishing"],
      });
    }
    if (!data.amenities || !Array.isArray(data.amenities) || data.amenities.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one amenity is required",
        path: ["amenities"],
      });
    }
    if (!data.houseRules || !Array.isArray(data.houseRules) || data.houseRules.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one house rule is required",
        path: ["houseRules"],
      });
    }
    if (!data.availability || !availabilityOptions.includes(data.availability)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Availability is required",
        path: ["availability"],
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
      minPrice: "",
      maxPrice: "",
      paymentType: "",
      landlordPropertyType: "",
      bedrooms: "",
      bathrooms: "",
      toilets: "",
      livingRooms: "",
      stayDuration: "",
      propertyCondition: "",
      furnishing: "",
      amenities: [],
      houseRules: [],
      availability: "",
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
          <div className="space-y-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            {/* Minimum Price */}
            <FormField
              control={form.control}
              name="minPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Price (₦)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Minimum price"
                      type="number"
                      min="0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Maximum Price */}
            <FormField
              control={form.control}
              name="maxPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Price (₦)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Maximum price"
                      type="number"
                      min="0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Payment Type */}
            <FormField
              control={form.control}
              name="paymentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Type</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                      <option value="">Select payment type</option>
                      {paymentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Property Type */}
            <FormField
              control={form.control}
              name="landlordPropertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                      <option value="">Select property type</option>
                      {landlordPropertyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Number of Rooms */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms</FormLabel>
                    <FormControl>
                      <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                        <option value="">Select bedrooms</option>
                        {bedroomsOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bathrooms</FormLabel>
                    <FormControl>
                      <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                        <option value="">Select bathrooms</option>
                        {bathroomsOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="toilets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toilets</FormLabel>
                    <FormControl>
                      <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                        <option value="">Select toilets</option>
                        {toiletsOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="livingRooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Living Rooms</FormLabel>
                    <FormControl>
                      <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                        <option value="">Select living rooms</option>
                        {livingRoomsOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
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
              name="stayDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stay Duration</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                      <option value="">Select stay duration</option>
                      {stayDurations.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Property Condition */}
            <FormField
              control={form.control}
              name="propertyCondition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Condition</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                      <option value="">Select property condition</option>
                      {propertyConditions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Furnishing */}
            <FormField
              control={form.control}
              name="furnishing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Furnishing</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                      <option value="">Select furnishing</option>
                      {furnishingOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Amenities / Features */}
            <FormField
              control={form.control}
              name="amenities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amenities / Features</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto border rounded p-2 bg-white">
                      {amenitiesOptions.map((opt) => (
                        <label key={opt} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={opt}
                            checked={field.value?.includes(opt) || false}
                            onChange={e => {
                              if (e.target.checked) {
                                field.onChange([...(field.value || []), opt]);
                              } else {
                                field.onChange((field.value || []).filter((v: string) => v !== opt));
                              }
                            }}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* House Rules / Restrictions */}
            <FormField
              control={form.control}
              name="houseRules"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>House Rules / Restrictions</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto border rounded p-2 bg-white">
                      {houseRulesOptions.map((opt) => (
                        <label key={opt} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={opt}
                            checked={field.value?.includes(opt) || false}
                            onChange={e => {
                              if (e.target.checked) {
                                field.onChange([...(field.value || []), opt]);
                              } else {
                                field.onChange((field.value || []).filter((v: string) => v !== opt));
                              }
                            }}
                          />
                          <span>{opt}</span>
                        </label>
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
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full px-4 py-3 rounded-full border border-gray-300">
                      <option value="">Select availability</option>
                      {availabilityOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
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
