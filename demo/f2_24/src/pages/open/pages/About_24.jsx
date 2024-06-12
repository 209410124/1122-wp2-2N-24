import { Link } from 'react-router-dom';
import Header_xx from '../components/Header_xx';

const About_24 = () => {
  return (
    <>
      <Header_xx />
      <div>
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            <div className='grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center'>
              <div className='col-span-3'>
                <h1 className='text-4xl mb-10 text-accent-400 font-medium'>
                  Welcome to The Wild Oasis
                </h1>
                <div className='space-y-8'>
                  <p className='text-left'>
                    Where nature's beauty and comfortable living blend
                    seamlessly. Hidden away in the heart of the Italian
                    Dolomites, this is your paradise away from home. But it's
                    not just about the luxury cabins. It's about the experience
                    of reconnecting with nature and enjoying simple pleasures
                    with family.
                  </p>
                  <p className='text-left'>
                    Our 8 luxury cabins provide a cozy base, but the real
                    freedom and peace you'll find in the surrounding mountains.
                    Wander through lush forests, breathe in the fresh air, and
                    watch the stars twinkle above from the warmth of a campfire
                    or your hot tub.
                  </p>
                  <p className='text-left'>
                    This is where memorable moments are made, surrounded by
                    nature's splendor. It's a place to slow down, relax, and
                    feel the joy of being together in a beautiful setting.
                  </p>
                </div>
              </div>
              <div className='col-span-2'>
                <img
                  alt='Family sitting around a fire pit in front of cabin'
                  width='2000px'
                  height='2000px'
                  src='./image/about-1.webp'
                />
              </div>
              <div className='relative aspect-square col-span-2'>
                <img
                  alt='Family that manages The Wild Oasis'
                  className='absolute h-full w-full text-transparent object-cover'
                  sizes='100vw'
                  src='../image/about-2.webp'
                />
              </div>
              <div className='col-span-3'>
                <h1 className='text-4xl mb-10 text-accent-400 font-medium'>
                  `` Managed by our family since 1962
                </h1>
                <div className='space-y-8'>
                  <p className='text-left'>
                    Since 1962, The Wild Oasis has been a cherished family-run
                    retreat. Started by our grandparents, this haven has been
                    nurtured with love and care, passing down through our family
                    as a testament to our dedication to creating a warm,
                    welcoming environment.
                  </p>
                  <p className='text-left'>
                    Over the years, we've maintained the essence of The Wild
                    Oasis, blending the timeless beauty of the mountains with
                    the personal touch only a family business can offer. Here,
                    you're not just a guest; you're part of our extended family.
                    So join us at The Wild Oasis soon, where tradition meets
                    tranquility, and every visit is like coming home.
                  </p>
                  <div>
                    <Link
                      className='inline-block mt-4 bg-amber-300 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-amber-500 transition-all'
                      to='/cabins'
                    >
                      Explore our luxury cabins
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default About_24;
