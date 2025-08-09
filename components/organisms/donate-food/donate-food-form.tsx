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
    setIsSubmitting,
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="overflow-x-auto scrollbar-hide md:overflow-visible md:flex md:justify-center">
        <DonateFoodSteps currentStep={currentStep} />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--color-surface)] rounded-2xl border border-[#e5e7eb] p-4 sm:p-8 md:p-10"
            >
              {currentStep === 0 && <DonateFoodDetails form={form} />}

              {currentStep === 1 && <DonateFoodLocation form={form} />}

              {currentStep === 2 && <DonateFoodContact form={form} />}

              {currentStep === 3 && <DonateFoodDietryInfo form={form} />}
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-6 md:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                prevStep();
              }}
              disabled={currentStep === 0}
              className="border-[#e5e7eb] hover:bg-[var(--color-surface)] w-full sm:w-auto md:w-auto"
            >
              Previous
            </Button>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto md:w-auto">
              {currentStep < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    nextStep();
                  }}
                  className="w-full sm:w-auto bg-[#009379] text-white hover:bg-[var(--color-primary-hover)]"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-[#009379] text-white hover:bg-[var(--color-primary-hover)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Donation"}
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
