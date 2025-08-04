import { DonateFoodForm } from "@/components/organisms/donate-food/donate-food-form";

export default function DonateFoodPage() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
          Donate Food
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Share your extra food with those in need. Your donation can make a
          real difference in someone&apos;s life.
        </p>
      </div>

      <DonateFoodForm />
    </div>
  );
}
