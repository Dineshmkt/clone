

import { FaChevronRight } from "react-icons/fa";

const faqs = [
  "Coupons & Offers",
  "General Inquiry",
  "Payment Related",
  "Feedback & Suggestions",
  "Order / Products Related",
  "Gift Card",
  "No-Cost EMI",
  "Wallet Related",
  "Zepto Super Saver",
];

const FaqList = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-4">FAQs</h2>
      <div className="divide-y divide-gray-200 border-t border-b">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-50"
          >
            <span className="text-sm font-medium text-gray-800">{item}</span>
            <FaChevronRight className="text-pink-500 text-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;
