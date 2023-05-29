import React from 'react';
import imageOne from '../../assets/category/1.avif'
import imageTwo from '../../assets/category/2.avif'
import imageThree from '../../assets/category/3.avif'
import imageFour from '../../assets/category/4.avif'
import imageFive from '../../assets/category/5.avif'
import imageSix from '../../assets/category/6.avif'

const Category = () => {
  const categories = [
    {
      image: imageOne,
      title: 'Burrito Bowl',
      description: 'To make burrito bowl, you need to make Mexican rice, refried beans, uncooked salsa and sour cream. Then assemble it. Divide the rice into 4 equal portions.'
    },
    {
      image: imageTwo,
      title: 'Tacos',
      description: 'Tacos are the top-rated and most well-known street Mexican food. It is made up of meat or other fillings wrapped in a tortilla often served with cheese added.'
    },
    {
      image: imageThree,
      title: 'Quesadillas',
      description: 'Quesadillas is a Mexican dish consisting of a tortilla that is filled primarily with cheese, and sometimes meats, spices, and other fillings, and then cooked on a griddle or stove.'
    },
    {
      image: imageFour,
      title: 'Nachos',
      description: 'a dish made with small pieces of fried tortilla covered with melted cheese, beans, sometimes pieces of meat, and a spicy sauce: To taste real nachos you have to go to Mexico.'
    },
    {
      image: imageFive,
      title: 'Tamales',
      description: 'tamale, Spanish tamal, plural tamales, in Mesoamerican cuisine, a small steamed cake of dough made from corn (maize) is made into a thick paste.'
    },
    {
      image: imageSix,
      title: 'Fajitas',
      description: 'any stripped grilled meat, optionally served with stripped peppers and onions usually served on a flour or corn tortilla. The term originally referred to skirt steak.'
    }
  ];

  return (
    <div className='min-h-screen space-y-5 my-10'>
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold md:font-medium text-center">Popular Categories</h2>
      <p className='md:w-[50%] text-center mx-auto opacity-60'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque adipisci accusantium assumenda ullam quasi praesentium vel pariatur! Fugit, esse corporis.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {categories.map((category, index) => (
          <div key={index} className="rounded-md shadow-2xl">
            <img className="w-full h-64 object-cover" src={category.image} alt={`Category ${index + 1}`} />
            <div className="ms-5 space-y-2">
              <h3 className="text-xl font-semibold mt-2">{category.title}</h3>
              <p className="opacity-60 leading-relaxed">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
