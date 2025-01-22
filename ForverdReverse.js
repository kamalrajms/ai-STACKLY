const imageSet1 = ["assets/images/index/forward-reverse/image1.jpg","assets/images/index/forward-reverse/image2.png","assets/images/index/forward-reverse/image3.png"];
const imageSet2 = ["assets/images/index/forward-reverse/image4.png", "assets/images/index/forward-reverse/image5.jpg","assets/images/index/forward-reverse/image6.jpg"];
let currentIndex = 0;

// Function to change images
function changeImage(direction) {
    const totalImages = imageSet1.length;

    // Update current index
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; 
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; 
    }

    // Update the images
    document.getElementById("myImg").src = imageSet1[currentIndex];
    document.getElementById("myaiImg").src = imageSet2[currentIndex];

    // Update the fractional indicator
    document.querySelector(".number").textContent = `${currentIndex + 1}/${totalImages}`;
}
