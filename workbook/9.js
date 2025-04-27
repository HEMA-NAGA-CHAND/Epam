// Task 1
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("msg1").textContent = "Button clicked";
  });
  
  // Task 2
  document.getElementById("box").addEventListener("mouseover", () => {
    document.getElementById("msg2").textContent = "Mouse over box";
  });
  
  // Task 3
  document.getElementById("input").addEventListener("keyup", (e) => {
    document.getElementById("msg3").textContent = "You typed: " + e.target.value;
  });
  