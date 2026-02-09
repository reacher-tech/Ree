const FeatureSection = ({ 
  image, 
  imageAlt = "feature image",
  title, 
  features,
  imageOnLeft = true 
}) => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <div className="w-full md:w-[97%] flex flex-col md:flex-row m-4 border-[#672218] p-4 md:p-6 gap-6">
        
      
        <div className={`w-full md:w-1/2 ${imageOnLeft ? 'md:order-1' : 'md:order-2'} border-l md:border-l-[1px]`}>
          <img 
            src={image} 
            alt={imageAlt} 
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        
      
        <div className={`w-full md:w-1/2 ${imageOnLeft ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center gap-4 md:gap-8 border-r md:border-r-[1px]`}>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 md:mb-6'>
            {title}
          </h1>
          
          {features.map((feature, index) => (
            <div key={index} className='mb-4 md:mb-6'>
              <h3 className='text-amber-900 text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4'>
                {feature.subtitle}
              </h3>
              <p className='text-[#2C1332] text-base md:text-lg lg:text-xl leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default FeatureSection;