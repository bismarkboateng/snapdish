const CareersBenefit = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12">
        Benefits & Perks
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm">✓</span>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              Competitive Salary
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Market-rate compensation with equity options
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm">✓</span>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              Health Coverage
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Comprehensive health, dental, and vision insurance
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm">✓</span>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              Flexible Schedule
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Work-life balance with flexible hours and remote options
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm">✓</span>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              Learning Budget
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Annual budget for conferences, courses, and books
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersBenefit;
