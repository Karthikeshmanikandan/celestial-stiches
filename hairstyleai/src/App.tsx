import React, { useState } from 'react';
import { Camera, Sparkles, RefreshCw, Scan } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<{
    faceShape?: string;
    features?: string[];
    recommendations?: string[];
  } | null>(null);

  const faceShapes = ["Oval", "Round", "Square", "Heart", "Diamond", "Rectangle"];
  const features = [
    "Strong jawline",
    "High cheekbones",
    "Defined facial features",
    "Symmetrical face",
    "Well-balanced proportions"
  ];
  const styleRecommendations = [
    "Consider adding volume at the crown",
    "Keep sides short for a slimming effect",
    "Textured layers would complement your features",
    "A side-swept style would enhance your face shape",
    "Adding height at the top would balance your proportions"
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setLoading(true);
    setAnalysis(null);
    
    // Simulate AI processing time
    setTimeout(() => {
      const randomFaceShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
      const randomFeatures = features
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      const randomRecommendations = styleRecommendations
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      setAnalysis({
        faceShape: randomFaceShape,
        features: randomFeatures,
        recommendations: randomRecommendations
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">HairStyle AI</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Perfect Hairstyle
          </h1>
          <p className="text-lg text-gray-600">
            Upload your photo and let AI suggest the best hairstyles for you
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="text-center">
              <div className="mb-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Upload Your Photo
                </label>
              </div>

              {selectedImage ? (
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  {loading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                      <RefreshCw className="w-12 h-12 text-white animate-spin" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
                  <p className="text-gray-500">Upload a photo to get started</p>
                </div>
              )}
            </div>
          </div>

          {analysis && (
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center mb-4">
                <Scan className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">AI Analysis Results</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Face Shape</h3>
                  <p className="text-gray-600">{analysis.faceShape}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {analysis.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Style Recommendations</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {analysis.recommendations?.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;