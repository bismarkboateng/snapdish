const FooterBottom = () => {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} SnapDish. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <span className="text-white/60">Made with</span>
            <span className="text-[var(--color-secondary)] text-lg">❤️</span>
            <span className="text-white/60">for communities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
