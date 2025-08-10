"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Form } from "@/components/atoms/form";
import { requestFormInitialValues, requestSchema } from "./request-food.schema";
import { RequestFormData } from "./request-food.types";
import RequestFoodSuccess from "./request-food-success";

import useRequestFood from "./use-request-food";
import RequestFoodProgress from "./request-food-progress";
import RequestFoodDetails from "./request-food-details";
import RequestFoodLocation from "./request-food-location";

import RequestFoodContact from "./request-food-contact";
import RequestFoodInfo from "./request-food-info";
import RequestFoodNavigation from "./request-food-navigation";


export const RequestFoodForm = () => {
  const form = useForm<RequestFormData>({
    resolver: zodResolver(requestSchema),
    defaultValues: requestFormInitialValues,
  });

  const {
    currentStep,
    isSubmitting,
    submitSuccess,
    nextStep,
    prevStep,
    setIsSubmitting,
    setSubmitSuccess,
    setCurrentStep,
  } = useRequestFood(form);

  const onSubmit = async () => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      form.reset();
      setCurrentStep(0);
      setSubmitSuccess(false);
    }, 3000);
  };

  if (submitSuccess) {
    return <RequestFoodSuccess />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <RequestFoodProgress currentStep={currentStep} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#ffffff] rounded-2xl border border-[#e5e7eb] p-8"
            >
              {currentStep === 0 && <RequestFoodDetails form={form} />}

              {currentStep === 1 && <RequestFoodLocation form={form} />}

              {currentStep === 2 && <RequestFoodContact form={form} />}

              {currentStep === 3 && <RequestFoodInfo form={form} />}
            </motion.div>
          </AnimatePresence>

          <RequestFoodNavigation
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </form>
      </Form>
    </div>
  );
};
