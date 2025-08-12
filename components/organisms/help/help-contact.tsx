import { Button } from "@/components/atoms/button";

const HelpContact = () => {
  return (
    <div className="text-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-12">
      <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
      <p className="text-white/90 mb-6 max-w-2xl mx-auto">
        Can&apos;t find what you&apos;re looking for? Our support team is here to help you
        with any questions or issues.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-xl hover:scale-105 transition-all duration-300">
          Contact Support
        </Button>
        <Button
          variant="outline"
          className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          Live Chat
        </Button>
      </div>
    </div>
  );
};

export default HelpContact;
