import { Gift } from "lucide-react";

const FixedTopBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-pink-dark text-white py-3 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center">
        <Gift className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
        <p className="text-xs md:text-base font-medium whitespace-nowrap">
          De <span className="line-through opacity-75">R$ 297</span> por{" "}
          <span className="font-bold text-sm md:text-lg">R$ 29,90</span> — só HOJE!
        </p>
      </div>
    </div>
  );
};

export default FixedTopBanner;
