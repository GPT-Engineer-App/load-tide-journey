import { Dog } from "lucide-react";

const Index = () => {
  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
    "Poodle",
    "Beagle",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Dog className="mx-auto h-16 w-16 text-blue-500" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">All About Dogs</h1>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Man's Best Friend</h2>
            <p className="text-gray-600 mb-6">
              Dogs have been domesticated for thousands of years and are known for their loyalty, 
              companionship, and diverse roles in human society. From working dogs to beloved pets, 
              these amazing animals have captured our hearts with their intelligence, affection, and 
              unwavering devotion.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Characteristics of Dogs</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Loyal and affectionate</li>
              <li>Intelligent and trainable</li>
              <li>Diverse in size, shape, and temperament</li>
              <li>Excellent sense of smell and hearing</li>
              <li>Social animals that form strong bonds with humans</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Popular Dog Breeds</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {popularBreeds.map((breed, index) => (
                <div key={index} className="bg-gray-100 rounded p-2 text-center text-gray-700">
                  {breed}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Whether you're a long-time dog owner or considering getting your first canine companion, 
            dogs bring joy, laughter, and unconditional love to our lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
