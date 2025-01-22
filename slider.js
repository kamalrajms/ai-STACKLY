document.querySelectorAll(".room").forEach((room) => {
  const slider = room.querySelector(".slider");
  const aiImage = room.querySelector(".ai");
  const container = room.querySelector(".tainer");

  // Adjust the position of the slider and image clipping based on mouse movement
  function handleSliderMove(event) {
    const containerRect = container.getBoundingClientRect();
    let position = event.clientX - containerRect.left;

    // Clamp the slider position between 0 and container width
    position = Math.max(0, Math.min(position, containerRect.width));

    // Update slider and image clipping
    const percentage = (position / containerRect.width) * 100;
    slider.style.left = `${percentage}%`;
    aiImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  }

  // Add event listeners for dragging
  slider.addEventListener("mousedown", () => {
    room.addEventListener("mousemove", handleSliderMove);
  });

  room.addEventListener("mouseup", () => {
    room.removeEventListener("mousemove", handleSliderMove);
  });
});
