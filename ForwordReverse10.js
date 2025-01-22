const imageSet1 = ["assets/images/trends/interior/image1.jpg","assets/images/trends/interior/image2.png","assets/images/trends/interior/image3.png","assets/images/trends/interior/image4.png","assets/images/trends/interior/image5.jpg","assets/images/trends/interior/image6.jpg","assets/images/trends/interior/image7.jpg","assets/images/trends/interior/image8.jpg","assets/images/trends/interior/image9.jpg","assets/images/trends/interior/image10.jpg"];
const imageSet2 = ["assets/images/trends/interior/image1.jpg","assets/images/trends/interior/image2.png","assets/images/trends/interior/image3.png","assets/images/trends/interior/image4.png","assets/images/trends/interior/image5.jpg","assets/images/trends/interior/image6.jpg","assets/images/trends/interior/image7.jpg","assets/images/trends/interior/image8.jpg","assets/images/trends/interior/image9.jpg","assets/images/trends/interior/image10.jpg"];

// Index to track the current image
let currentIndex = 0;

// Function to change images
function changeImage(direction) {
    const totalImages = imageSet1.length;

    // Update current index
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Wrap around to the last image
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Wrap around to the first image
    }

    // Update the images
    document.getElementById("myImg").src = imageSet1[currentIndex];
    document.getElementById("myaiImg").src = imageSet2[currentIndex];

    // Update the fractional indicator
    document.querySelector(".number").textContent = `${currentIndex + 1}/${totalImages}`;
}
