document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.querySelector(".menu-toggle");
  let navLinks = document.querySelector(".nav-links");
  let navbar = document.getElementById("navbar");
  let logo = document.querySelector(".logo");

  menuToggle.addEventListener("click", function (event) {
    navLinks.classList.toggle("active");
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      navLinks.classList.remove("active");
    }
  });

  navLinks.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  logo.addEventListener("click", function () {
    location.reload();
  });

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#f1c40f" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#f1c40f",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
});

// Loading screen functionality
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
      loadingScreen.style.opacity = "0";
      setTimeout(function () {
        loadingScreen.style.display = "none";
      }, 200); // This matches the transition time
    }
  }, 2000); // 5000 milliseconds = 5 seconds
});

// Function to show loading modal
function showLoadingModal() {
  const modal = document.createElement("div");
  modal.className = "loading-modal";
  modal.innerHTML = `
    <div class="wheel-and-hamster" aria-label="Orange and tan hamster running in a metal wheel" role="img">
      <div class="wheel"></div>
      <div class="hamster">
        <div class="hamster__body">
          <div class="hamster__head">
            <div class="hamster__ear"></div>
            <div class="hamster__eye"></div>
            <div class="hamster__nose"></div>
          </div>
          <div class="hamster__limb hamster__limb--fr"></div>
          <div class="hamster__limb hamster__limb--fl"></div>
          <div class="hamster__limb hamster__limb--br"></div>
          <div class="hamster__limb hamster__limb--bl"></div>
          <div class="hamster__tail"></div>
        </div>
      </div>
      <div class="spoke"></div>
    </div>
    <p>Loading...</p>
  `;
  document.body.appendChild(modal);

  // Remove modal after 5 seconds
  setTimeout(() => {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.remove();
    }, 200);
  }, 2000);
}

// Add event listeners to all "More details" buttons
// ...existing code...

// Enhanced Loading screen functionality with page load time
document.addEventListener("DOMContentLoaded", function () {
  // Calculate how long it took to get to DOMContentLoaded
  const [navigationEntry] = performance.getEntriesByType("navigation");
  const loadStartTime = navigationEntry.startTime;
  const domContentLoadedTime = navigationEntry.domContentLoadedEventEnd;
  const initialLoadTime = (domContentLoadedTime - loadStartTime) / 1000; // in seconds

  // Update the loading screen with the current load time
  const loadingText = document.querySelector("#loading-screen p");
  if (loadingText) {
    loadingText.innerHTML = `Loading... <br><span style="font-size: 0.8em">DOM loaded in ${initialLoadTime.toFixed(
      2
    )}s</span>`;
  }

  // Wait for all resources to finish loading before removing the loading screen
  window.addEventListener("load", function () {
    const fullLoadTime = (performance.now() / 1000).toFixed(2); // in seconds

    if (loadingText) {
      loadingText.innerHTML = `Ready! <br><span style="font-size: 0.8em">Page loaded in ${fullLoadTime}s</span>`;
    }

    // Store the load time for display after loading screen disappears
    localStorage.setItem("lastLoadTime", fullLoadTime);

    // Fade out loading screen after small delay to show the final time
    setTimeout(function () {
      var loadingScreen = document.getElementById("loading-screen");
      if (loadingScreen) {
        loadingScreen.style.opacity = "0";
        setTimeout(function () {
          loadingScreen.style.display = "none";

          // Show a small notification with the load time
          showLoadTimeNotification(fullLoadTime);
        }, 200);
      }
    }, 800); // Short delay to show the final load time
  });
});

// Function to show a small notification with the load time
function showLoadTimeNotification(loadTime) {
  const notification = document.createElement("div");
  notification.style.position = "fixed";
  notification.style.bottom = "10px";
  notification.style.left = "10px";
  notification.style.padding = "8px 12px";
  notification.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  notification.style.color = "#fff";
  notification.style.borderRadius = "4px";
  notification.style.fontSize = "12px";
  notification.style.zIndex = "1000";
  notification.style.opacity = "0";
  notification.style.transition = "opacity 0.3s ease";
  notification.textContent = `Page loaded in ${loadTime} seconds`;

  document.body.appendChild(notification);

  // Fade in
  setTimeout(() => {
    notification.style.opacity = "1";
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Keep the existing showLoadingModal function
// ...existing code...
document.querySelectorAll(".more-details").forEach((button) => {
  button.addEventListener("click", function (e) {
    // Only show modal if it's an external link
    if (!this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetUrl = this.getAttribute("href");
      showLoadingModal();

      // Navigate after 1 seconds
      setTimeout(() => {
        window.open(targetUrl, "_blank");
      }, 1000);
    }
  });
});

// ...existing code...

// Theme switching via keyword detection
document.addEventListener("DOMContentLoaded", function () {
  let keyBuffer = "";
  const MAX_BUFFER_LENGTH = 10; // Only keep track of last 10 keystrokes

  // Listen for keystrokes anywhere on the document
  document.addEventListener("keydown", function (event) {
    // Only capture letter keys
    if (/^[a-z]$/i.test(event.key)) {
      keyBuffer += event.key.toLowerCase();

      // Keep buffer length limited
      if (keyBuffer.length > MAX_BUFFER_LENGTH) {
        keyBuffer = keyBuffer.substring(keyBuffer.length - MAX_BUFFER_LENGTH);
      }

      // Check for keywords
      if (keyBuffer.includes("dark")) {
        setTheme("dark");
        showThemeNotification("🌙 Dark mode activated");
        keyBuffer = ""; // Reset buffer after activation
      } else if (keyBuffer.includes("white")) {
        setTheme("light");
        showThemeNotification("☀️ Light mode activated");
        keyBuffer = ""; // Reset buffer after activation
      }
    }
  });

  // Function to set theme
  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }

    // Save theme preference
    localStorage.setItem("theme", theme);
  }

  // Function to show notification when theme changes
  function showThemeNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.getElementById("theme-notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.id = "theme-notification";
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.backgroundColor = document.body.classList.contains(
      "light-mode"
    )
      ? "#fff"
      : "#625C46FF";
    notification.style.color = document.body.classList.contains("light-mode")
      ? "#000"
      : "#fff";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "2000";
    notification.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    notification.style.opacity = "0";
    notification.style.transition = "opacity 0.3s ease";
    notification.textContent = message;

    // Add notification to body
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.opacity = "1";
    }, 10);

    // Remove notification after 2 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 2000);
  }

  // Load theme from localStorage on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
});

// في نهاية ملف script.js
function updateHamsterColors() {
  const isLightMode = document.body.classList.contains("light-mode");
  const hamster = document.querySelector(".hamster");

  if (hamster) {
    if (isLightMode) {
      hamster.style.setProperty("--hamster-body", "hsl(30,90%,70%)");
      hamster.style.setProperty("--hamster-head", "hsl(30,90%,40%)");
      hamster.style.setProperty("--hamster-ear", "hsl(0,90%,70%)");
      hamster.style.setProperty("--hamster-nose", "hsl(0,90%,60%)");
      hamster.style.setProperty("--wheel-color", "hsl(0,0%,40%)");
    } else {
      hamster.style.setProperty("--hamster-body", "hsl(30,90%,90%)");
      hamster.style.setProperty("--hamster-head", "hsl(30,90%,55%)");
      hamster.style.setProperty("--hamster-ear", "hsl(0,90%,85%)");
      hamster.style.setProperty("--hamster-nose", "hsl(0,90%,75%)");
      hamster.style.setProperty("--wheel-color", "hsl(0,0%,60%)");
    }
  }
}

// استدعاء الدالة عند تغيير الثيم
document.addEventListener("DOMContentLoaded", function () {
  // عند تغيير الثيم يدويًا
  document
    .querySelector(".theme-toggle")
    .addEventListener("click", function () {
      setTimeout(updateHamsterColors, 300); // بعد انتهاء الانتقال
    });

  // عند التحميل الأولي
  updateHamsterColors();
});


