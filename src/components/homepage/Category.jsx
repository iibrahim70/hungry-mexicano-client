import React from 'react';

const Category = () => {
  const categories = [
    {
      image: 'https://healthyfitnessmeals.com/wp-content/uploads/2018/08/Grilled-chicken-burrito-bowls-10-500x500.jpg',
      title: 'Burrito Bowl',
      description: 'To make burrito bowl, you need to make Mexican rice, refried beans, uncooked salsa and sour cream. Then assemble it. Divide the rice into 4 equal portions.'
    },
    {
      image: 'https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Homemade-Vegan-Mexican-Beef-Tacos-with-Herbs.jpg',
      title: 'Tacos',
      description: 'Tacos are the top-rated and most well-known street Mexican food. It is made up of meat or other fillings wrapped in a tortilla often served with cheese added.'
    },
    {
      image: 'https://www.seriouseats.com/thmb/2qh8uyOJMFWewNqgJbzJ8gvO1Dc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__01__20170131-quesadillas-three-variations-7-1c3c71a59e9245f380fce6a6d70d3c5b.jpg',
      title: 'Quesadillas',
      description: 'Quesadillas is a Mexican dish consisting of a tortilla that is filled primarily with cheese, and sometimes meats, spices, and other fillings, and then cooked on a griddle or stove.'
    },
    {
      image: 'https://townsquare.media/site/71/files/2022/05/attachment-ipod-52.jpg?w=980&q=75',
      title: 'Nachos',
      description: 'a dish made with small pieces of fried tortilla covered with melted cheese, beans, sometimes pieces of meat, and a spicy sauce: To taste real nachos you have to go to Mexico.'
    },
    {
      image: 'https://www.foodnetwork.com/content/dam/images/food/fullset/2019/10/28/0/FNK_Red-Pork-Tamales_H2_s4x3.jpg',
      title: 'Tamales',
      description: 'tamale, Spanish tamal, plural tamales, in Mesoamerican cuisine, a small steamed cake of dough made from corn (maize) is made into a thick paste.'
    },
    {
      image: 'https://www.thespruceeats.com/thmb/-g-eTieVF44gcjxac5wyG0egAo0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-fajitas-recipe-3052908-hero-01-e4dc09dd6b28488191a9ddf700c7441b.jpg',
      title: 'Fajitas',
      description: 'any stripped grilled meat, optionally served with stripped peppers and onions usually served on a flour or corn tortilla. The term originally referred to skirt steak.'
    }
  ];

  return (
    <div className='min-h-screen space-y-5 mt-10'>
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold md:font-medium text-center">Popular Categories</h2>
      <p className='md:w-[50%] text-center mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque adipisci accusantium assumenda ullam quasi praesentium vel pariatur! Fugit, esse corporis.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-md shadow-xl">
            <img className="w-full h-64 object-cover" src={category.image} alt={`Category ${index + 1}`} />
            <div className="ms-5 space-y-2">
              <h3 className="text-xl font-semibold mt-2">{category.title}</h3>
              <p className="text-gray-700 leading-relaxed">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
