import { RequestFoodForm } from "@/components/organisms/request-food/request-food-form";

export default function RequestFoodPage() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
          Request Food
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Let our community know what food assistance you need. Connect with
          generous donors who want to help.
        </p>
      </div>

      <RequestFoodForm />
    </div>
  );
}
