import { SuccessMessage } from "@/components/molecules/success/success";
import React from "react";

const SuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">
      <SuccessMessage
        title="Password Reset Successfully!"
        description="Your password has been updated. You can now log in with your new credentials."
        buttonText="Back to Login"
        buttonLink="/login"
      />
    </div>
  );
};

export default SuccessPage;
