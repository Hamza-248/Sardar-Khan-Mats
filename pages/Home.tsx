import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { CLIENTS, REVIEWS, VIDEOS } from '../constants';
import { useStore } from '../context/StoreContext'; // UPDATED
import { ArrowRight, Truck, ThumbsUp, Wrench, Star, PlayCircle, MapPin, Award, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const { products } = useStore(); // UPDATED
  
  // Get first 8 products for featured section
  const featuredProducts = products.slice(0, 8);
  
  // Video Gallery State
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex(prev => (prev + 1) % VIDEOS.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(prev => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  // Using real images from the product list for categories
  const categories = [
    { 
      title: 'Automotive', 
      img: 'https://m.media-amazon.com/images/I/81jY%2Bn3CFML.jpg', 
      desc: 'Premium mats for cars & bikes', 
      path: '/category/Automotive' 
    },
    { 
      title: 'Industrial', 
      img: 'https://images.thdstatic.com/productImages/59b7429c-0d53-487c-a7fd-d94e6063228e/svn/black-diamond-texture-husky-garage-flooring-rolls.jpg', 
      desc: 'Safety flooring for factories', 
      path: '/category/Industrial' 
    },
    { 
      title: 'Home', 
      img: 'https://i.ebayimg.com/images/g/QBcAAOSwa7ZkrgKn/s-l1200.jpg', 
      desc: 'Stylish runners & mats', 
      path: '/category/Home' 
    },
    { 
      title: 'Office', 
      img: 'https://i5.walmartimages.com/seo/HomGarden-47-x-35-PVC-Office-Chair-Mat-Clear-Floor-Desk-Mat.jpg', 
      desc: 'Professional floor protection', 
      path: '/category/Office' 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero />

      {/* Redesigned Value Props Section - High Contrast */}
      <section className="bg-brand-black text-white py-16 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
             
             <div className="flex items-center space-x-4 p-4">
                <div className="p-3 bg-brand-red rounded-lg">
                  <Award className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg leading-tight">Authentic Quality</h4>
                  <p className="text-gray-400 text-xs mt-1">Genuine materials sourced for longevity.</p>
                </div>
             </div>

             <div className="flex items-center space-x-4 p-4">
                <div className="p-3 bg-brand-red rounded-lg">
                  <Wrench className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg leading-tight">Custom Fitting</h4>
                  <p className="text-gray-400 text-xs mt-1">Precision cutting for exact dimensions.</p>
                </div>
             </div>

             <div className="flex items-center space-x-4 p-4">
                <div className="p-3 bg-brand-red rounded-lg">
                  <Truck className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg leading-tight">Fast Delivery</h4>
                  <p className="text-gray-400 text-xs mt-1">Same day Lahore, 2-3 days Nationwide.</p>
                </div>
             </div>

             <div className="flex items-center space-x-4 p-4">
                <div className="p-3 bg-brand-red rounded-lg">
                  <ThumbsUp className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg leading-tight">Trusted Service</h4>
                  <p className="text-gray-400 text-xs mt-1">25+ years of customer satisfaction.</p>
                </div>
             </div>

           </div>
        </div>
      </section>

      {/* Auto Carousel Clients Section - Fixed Overlap */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2 block">Our Track Record</span>
             <h2 className="font-heading font-black text-3xl md:text-4xl text-gray-900">TRUSTED PARTNERS</h2>
             <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
               We are proud to supply durable flooring solutions to some of the most demanding sectors in Pakistan.
             </p>
           </div>
           
           <div className="relative w-full overflow-hidden group">
             {/* Gradient Masks */}
             <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
             <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
             
             {/* Scrolling Container */}
             <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                {/* Render the list twice to ensure infinite effect */}
                {[...CLIENTS, ...CLIENTS].map((client, index) => (
                   <div key={`${client.name}-${index}`} className="flex flex-col items-center justify-center mx-8 w-48 flex-shrink-0 group/client">
                      <div className="w-24 h-24 mb-4 bg-white rounded-full p-4 shadow-sm border border-gray-100 flex items-center justify-center group-hover/client:border-brand-red transition-all duration-300 transform group-hover/client:scale-105">
                        <img src={client.logo} alt={client.name} className="w-full h-full object-contain rounded-full opacity-70 group-hover/client:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-heading font-bold text-sm text-gray-800 text-center whitespace-nowrap overflow-hidden text-ellipsis w-full px-2">{client.name}</h3>
                   </div>
                ))}
             </div>
           </div>
        </div>
        
        {/* Style for animation */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}</style>
      </section>

      {/* Category Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">OUR SPECIALTIES</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link to={cat.path} key={cat.title} className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/5] cursor-pointer block">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-heading font-bold text-xl mb-1 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">{cat.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{cat.desc}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <span className="inline-flex items-center text-brand-red text-xs font-bold uppercase tracking-wider">
                      Explore <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl text-gray-900 mb-2">POPULAR PRODUCTS</h2>
              <p className="text-gray-500">Customer favorites from our collection</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-brand-red font-bold hover:underline">
              View All Products <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/shop" className="inline-flex items-center justify-center px-6 py-3 border border-brand-red text-brand-red font-bold uppercase rounded hover:bg-brand-red hover:text-white transition-all">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Improved Video Gallery Section */}
      <section className="py-20 bg-brand-black text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div className="text-left">
               <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2 block">Gallery</span>
               <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">WATCH US IN ACTION</h2>
               <p className="text-gray-400">See our quality and installation process</p>
             </div>
             {/* Navigation Buttons */}
             <div className="flex gap-4">
               <button 
                onClick={prevVideo}
                className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-brand-black transition-all"
                aria-label="Previous Video"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                onClick={nextVideo}
                className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-brand-black transition-all"
                aria-label="Next Video"
               >
                 <ChevronRight size={24} />
               </button>
             </div>
           </div>
           
           <div className="overflow-hidden">
             <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}
             >
             </div>
             
             {/* Simpler React Window Implementation */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[0, 1, 2, 3].map((offset) => {
                  const index = (currentVideoIndex + offset) % VIDEOS.length;
                  const video = VIDEOS[index];
                  
                  const visibilityClass = 
                    offset === 0 ? 'block' :
                    offset === 1 ? 'hidden sm:block' :
                    offset === 2 ? 'hidden lg:block' :
                    'hidden xl:block';

                  return (
                    <div 
                      key={`${video.id}-${offset}`} 
                      className={`relative group rounded-lg overflow-hidden shadow-2xl border border-white/10 aspect-video cursor-pointer ${visibilityClass} transition-all duration-500 animate-in fade-in`}
                    >
                      <img src={video.thumb} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-brand-red/90 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                           <PlayCircle size={32} className="text-white fill-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                        <Clock size={12} /> {video.duration}
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <h3 className="font-bold text-sm text-white">{video.title}</h3>
                      </div>
                    </div>
                  );
                })}
             </div>
           </div>
         </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">WHAT OUR CUSTOMERS SAY</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
               {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <p className="text-gray-500">Based on 500+ Google Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm relative">
                <div className="absolute top-6 right-6 text-brand-red/20">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 mr-3">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{review.user}</h4>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                </div>
                <div className="flex text-yellow-400 text-xs mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
          
           <div className="mt-12 text-center">
             <a href="#" className="inline-flex items-center text-brand-red font-bold hover:underline">
               Read More on Google <ArrowRight size={18} className="ml-2" />
             </a>
          </div>
        </div>
      </section>

       {/* Google Map Section */}
      <section className="bg-gray-100 h-[400px] relative">
         <div className="absolute inset-0 w-full h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14480.279820713583!2d67.0207055!3d24.8614622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1645512345678!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy"
              title="Sardar Khan Mats Location"
            ></iframe>
         </div>
         <div className="absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 bg-white p-6 shadow-2xl rounded-lg max-w-xs z-10 hidden md:block border-l-4 border-brand-red">
            <h3 className="font-heading font-bold text-xl mb-2">Visit Our Shop</h3>
            <p className="text-sm text-gray-600 mb-4">Come see our samples and get expert advice for your space.</p>
            <div className="flex items-start space-x-2 text-sm text-gray-700">
               <MapPin className="text-brand-red shrink-0 mt-1" size={16} />
               <span>Shop #12, Old Market Road,<br/>Saddar, Karachi.</span>
            </div>
             <a 
               href="https://maps.google.com" 
               target="_blank" 
               rel="noreferrer"
               className="mt-4 block w-full bg-brand-black text-white text-center py-2 text-xs font-bold uppercase rounded hover:bg-gray-800 transition-colors"
             >
               Get Directions
             </a>
         </div>
      </section>
    </div>
  );
};

export default Home;
