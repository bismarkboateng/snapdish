import { Button } from "@/components/atoms/button/button";

const CareersCTA = () => {
  return (
    <div className="text-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-12">
      <h2 className="text-3xl font-bold text-white mb-4">
        Don&apos;t See Your Role?
      </h2>
      <p className="text-white/90 mb-6 max-w-2xl mx-auto">
        We&apos;re always looking for talented individuals who share our passion for
        making a difference. Send us your resume and let&apos;s talk about how you
        can contribute to our mission.
      </p>
      <Button className="px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-xl hover:scale-105 transition-all duration-300">
        Send Your Resume
      </Button>
    </div>
  );
};

export default CareersCTA;
