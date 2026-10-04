/** @format */

const Shimmerui = () => {
  return (
    <div className='cards-container'>
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className='cards shimmer-card' key={index}>
            <div className='shimmer-img'></div>
            <div className='shimmer-line line-title'></div>
            <div className='shimmer-line line-price'></div>
            <div className='shimmer-line line-desc'></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmerui;
