// Data arrays
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

// DOM Elements
const photoUpload = document.getElementById('photo-upload');
const imagePreview = document.getElementById('image-preview');
const uploadedImage = document.getElementById('uploaded-image');
const uploadPlaceholder = document.getElementById('upload-placeholder');
const loadingOverlay = document.getElementById('loading-overlay');
const analysisResults = document.getElementById('analysis-results');
const faceShapeElement = document.getElementById('face-shape');
const featuresElement = document.getElementById('features');
const recommendationsElement = document.getElementById('recommendations');

// Initialize Lucide icons
lucide.createIcons();

// Helper function to get random items from array
function getRandomItems(array, count) {
    return array
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
}

// Handle image upload
photoUpload.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            uploadedImage.src = reader.result;
            imagePreview.classList.remove('hidden');
            uploadPlaceholder.classList.add('hidden');
            simulateAnalysis();
        };
        reader.readAsDataURL(file);
    }
});

// Simulate AI analysis
function simulateAnalysis() {
    // Show loading state
    loadingOverlay.classList.remove('hidden');
    analysisResults.classList.add('hidden');
    
    // Simulate processing time
    setTimeout(() => {
        // Generate random results
        const randomFaceShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
        const randomFeatures = getRandomItems(features, 3);
        const randomRecommendations = getRandomItems(styleRecommendations, 3);

        // Update UI with results
        faceShapeElement.textContent = randomFaceShape;
        
        featuresElement.innerHTML = randomFeatures
            .map(feature => `<li>${feature}</li>`)
            .join('');
            
        recommendationsElement.innerHTML = randomRecommendations
            .map(rec => `<li>${rec}</li>`)
            .join('');

        // Hide loading state and show results
        loadingOverlay.classList.add('hidden');
        analysisResults.classList.remove('hidden');
    }, 2000);
}