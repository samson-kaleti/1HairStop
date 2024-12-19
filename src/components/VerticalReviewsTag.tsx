
const VerticalReviewsTag = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div 
        className="bg-[#C1AA99] text-white  px-2 py-6 writing-mode-vertical rotate-180"
        style={{ writingMode: 'vertical-rl' }}
      >
        REVIEWS
      </div>
    </div>
  );
};

export default VerticalReviewsTag;