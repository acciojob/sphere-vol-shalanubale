function volume_sphere() {
  // Get radius value from input field
  const radius = parseFloat(document.getElementById("radius").value);

  let volume;

  // Validate radius (must be a non-negative number)
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
  }

  // Display result in output field
  document.getElementById("volume").value = volume;
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
