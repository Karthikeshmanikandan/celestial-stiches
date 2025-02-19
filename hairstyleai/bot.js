document.getElementById("submitBtn").addEventListener("click", async () => {
    const fileInput = document.getElementById("imageUpload");
    const loading = document.getElementById("loading");
    const uploadedImage = document.getElementById("uploadedImage");
    const styledImage = document.getElementById("styledImage");

    if (!fileInput.files.length) {
        alert("Please upload an image first!");
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("image", file);

    // Display uploaded image
    const reader = new FileReader();
    reader.onload = function (e) {
        uploadedImage.src = e.target.result;
    };
    reader.readAsDataURL(file);

    loading.classList.remove("hidden");

    try {
        const response = await fetch("http://localhost:5000/proxy/hairstyle", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (result && result.image_url) {
            styledImage.src = result.image_url; // AI-generated hairstyle image
        } else {
            alert("Error processing the image. Please try again.");
        }
    } catch (error) {
        alert("Failed to connect to the proxy server.");
        console.error(error);
    }

    loading.classList.add("hidden");
});
