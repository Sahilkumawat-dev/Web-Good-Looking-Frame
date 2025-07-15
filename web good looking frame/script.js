    // Body ko select karte hain dark/light mode ke liye
    const body = document.querySelector("body");
    const darkLight = document.querySelector("#darkLight");
    
    // Sidebar ke liye elements select karte hain
    const sidebar = document.querySelector(".sidebar");
    const submenuItems = document.querySelectorAll(".submenu_item");
    const sidebarOpen = document.querySelector("#sidebarOpen");
    const sidebarClose = document.querySelector(".collapse_sidebar");
    const sidebarExpand = document.querySelector(".expand_sidebar");
    
    // Sidebar open aur close karne ke liye
    sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));
    
    sidebarClose.addEventListener("click", () => {
      // Sidebar ko close aur hoverable banane ke liye
      sidebar.classList.add("close", "hoverable");
    });
    
    sidebarExpand.addEventListener("click", () => {
      // Sidebar ko expand karne ke liye
      sidebar.classList.remove("close", "hoverable");
    });
    
    // Mouse hover karne par sidebar ko open/close karne ka kaam
    sidebar.addEventListener("mouseenter", () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
      }
    });
    
    sidebar.addEventListener("mouseleave", () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
      }
    });
    
    // Dark aur Light mode toggle karne ke liye
    darkLight.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        // Agar dark mode hai to moon icon dikhayein
        darkLight.classList.replace("bx-sun", "bx-moon");
      } else {
        // Agar light mode hai to sun icon dikhayein
        darkLight.classList.replace("bx-moon", "bx-sun");
      }
    });
    
    // Submenu ko show/hide karne ka kaam
    submenuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        // Selected submenu ko toggle karein
        item.classList.toggle("show_submenu");
        submenuItems.forEach((item2, index2) => {
          if (index !== index2) {
            // Dusre submenu ko close rakhein
            item2.classList.remove("show_submenu");
          }
        });
      });
    });
    
    // Screen size ke hisaab se sidebar ko close karne ka kaam
    if (window.innerWidth < 768) {
      sidebar.classList.add("close"); // Mobile screen par sidebar close karein
    } else {
      sidebar.classList.remove("close"); // Desktop par sidebar open rakhein
    }
