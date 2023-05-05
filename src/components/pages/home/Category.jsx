import React from 'react';

const Category = () => {
  return (
    <div className="container mx-auto px-5">
      <h2 className="text-2xl font-bold mb-10 text-center">Popular Categories</h2>
      <div className="flex flex-wrap -mx-5">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src="https://healthyfitnessmeals.com/wp-content/uploads/2018/08/Grilled-chicken-burrito-bowls-10-500x500.jpg" alt="Category 1" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Burrito Bowl</h3>
              <p className="text-gray-700 leading-relaxed">To make burrito bowl, you need to make Mexican rice, refried beans, uncooked salsa and sour cream. Then assemble it. Divide the rice into 4 equal portions.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src="https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Homemade-Vegan-Mexican-Beef-Tacos-with-Herbs.jpg" alt="Category 2" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Tacos</h3>
              <p className="text-gray-700 leading-relaxed">Tacos are the top-rated and most well-known street Mexican food. It is made up of meat or other fillings wrapped in a tortilla often served with cheese added.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src="https://www.seriouseats.com/thmb/2qh8uyOJMFWewNqgJbzJ8gvO1Dc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__01__20170131-quesadillas-three-variations-7-1c3c71a59e9245f380fce6a6d70d3c5b.jpg" alt="Category 3" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Quesadillas</h3>
              <p className="text-gray-700 leading-relaxed">Quesadillas is a Mexican dish consisting of a tortilla that is filled primarily with cheese, and sometimes meats, spices, and other fillings, and then cooked on a griddle or stove.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src="https://townsquare.media/site/71/files/2022/05/attachment-ipod-52.jpg?w=980&q=75" alt="Category 3" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Nachos</h3>
              <p className="text-gray-700 leading-relaxed">a dish made with small pieces of fried tortilla covered with melted cheese, beans, sometimes pieces of meat, and a spicy sauce: To taste real nachos you have to go to Mexico.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src="https://www.foodnetwork.com/content/dam/images/food/fullset/2019/10/28/0/FNK_Red-Pork-Tamales_H2_s4x3.jpg" alt="Category 3" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Tamales</h3>
              <p className="text-gray-700 leading-relaxed">tamale, Spanish tamal, plural tamales, in Mesoamerican cuisine, a small steamed cake of dough made from corn (maize) is made into a thick paste.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src="https://www.thespruceeats.com/thmb/-g-eTieVF44gcjxac5wyG0egAo0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-fajitas-recipe-3052908-hero-01-e4dc09dd6b28488191a9ddf700c7441b.jpg" alt="Category 3" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Fajitas</h3>
              <p className="text-gray-700 leading-relaxed">any stripped grilled meat, optionally served with stripped peppers and onions usually served on a flour or corn tortilla. The term originally referred to skirt steak.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category; 