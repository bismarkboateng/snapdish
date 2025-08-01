const Logo = ({ className }: Readonly<{ className?: string }>) => {
  return (
    <div className="absolute z-10">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-[var(--color-orange-base)] rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">S</span>
        </div>
        <span className={`text-xl font-semibold ${className}`}>SnapDish</span>
      </div>
    </div>
  );
};

export default Logo;
