import { ResetPasswordContainer } from "@/components/organisms/reset-password/reset-password";
import { Suspense } from "react";

const ResetPasswordPage = () => {
  return (
    <Suspense>
      <ResetPasswordContainer />
    </Suspense>
  );
};

export default ResetPasswordPage;
