"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";

import { Form } from "@/components/atoms/form";
import { Button } from "@/components/atoms/button";
import {
  donationFormInitialValues,
  donationSchema,
} from "./donate-food.schema";
import { DonationFormData } from "./donate-food.types";

import { steps } from "./donate-food.utils";
import DonateFoodSuccess from "./donate-food-success";
import useDonateFoodSteps from "./use-donate-food-step";
import DonateFoodDetails from "./donate-food-details";

import DonateFoodLocation from "./donate-food.location";
import DonateFoodContact from "./donate-food-contact";
import DonateFoodDietryInfo from "./donate-food-dietry-info";
import DonateFoodSteps from "./donate-food-steps";

import { useCreateDonation } from "@/features/donations/hooks/use-create-donation";
import { CreateDonationDTO } from "@/features/donations/types";

export const DonateFoodForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: donationFormInitialValues,
  });
  
  const { currentStep, setCurrentStep, nextStep, prevStep } =
  useDonateFoodSteps(form);

  const { mutate: createDonation } = useCreateDonation({ 
    form, 
    setCurrentStep, 
    setSubmitSuccess, 
    setIsSubmitting 
  });

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true);
    
    const donationData: CreateDonationDTO = {
      title: data.title,
      description: data.description,
      foodType: data.foodType,
      quantity: data.quantity,
      location: data.location,
      expiresAt: data.expiresAt,
      availablePickupTimes: data.availablePickupTimes,
      contactMethod: data.contactMethod as "phone" | "email",
      phone: data.phone,
      email: data.email,
      dietaryInfo: data.dietaryInfo || [],
      specialInstructions: data.specialInstructions,
    };
    
    createDonation(donationData);
  };

  if (submitSuccess) {
    return <DonateFoodSuccess />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <DonateFoodSteps currentStep={currentStep} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--color-surface)] rounded-2xl border border-[#e5e7eb] p-8"
            >
              {currentStep === 0 && <DonateFoodDetails form={form} />}

              {currentStep === 1 && <DonateFoodLocation form={form} />}

              {currentStep === 2 && <DonateFoodContact form={form} />}

              {currentStep === 3 && <DonateFoodDietryInfo form={form} />}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                prevStep();
              }}
              disabled={currentStep === 0}
              className="border-[#e5e7eb] hover:bg-[var(--color-background)]"
            >
              Previous
            </Button>

            <div className="flex gap-3">
              {currentStep < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Next Step clicked! Current step:", currentStep, "Steps length:", steps.length);
                    nextStep();
                  }}
                  className="bg-[#009379] hover:bg-[#007566] text-white"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#009379] hover:bg-[#007566] text-white min-w-[120px]"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    "Submit Donation"
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
