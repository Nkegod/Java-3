// saving the data
const menu = [
  {
    image: "../Images/Cereal dinner.jpeg",
    title: "Cereal",
    price: 2300,
    category: "breakfast",
  },
  {
    image: "../images/Tea and bread.jpeg",
    title: "Tea and Bread",
    price: 2700,
    category: "breakfast",
  },
  {
    image: "../Images/beans.jpeg",
    title: "Beans Porridge",
    price: 2200,
    category: "breakfast",
  },
  {
    image: "../Images/Juice.jpeg",
    title: "Morning Juice",
    price: 2400,
    category: "breakfast",
  },
  {
    image: "../Images/Pounded yam.jpeg",
    title: "Pounded yam with Soup",
    price: 3500,
    category: "lunch",
  },
  {
    image: "../Images/Juice.jpeg",
    title: "Juice",
    price: 3300,
    category: "lunch",
  },
  {
    image: "../Images/Rice & Salad with Chicken.jpeg",
    title: "Rice and Salad",
    price: 2200,
    category: "lunch",
  },
  {
    image: "../images/Canadian Pizza-Curry.jpeg",
    title: "Pizza",
    price: 1800,
    category: "lunch",
  },
  {
    image: "../Images/Semo & Vege.jpeg",
    title: "Semo and Vegetable Soup",
    price: 2800,
    category: "dinner",
  },
  {
    image: "../images/Plantain & Vege.jpeg",
    title: "Plantain and Vegetable Sauce",
    price: 2200,
    category: "dinner",
  },
  {
    image: "../Images/fruit meal.jpg",
    title: "Fruit Meal",
    price: 5400,
    category: "dinner",
  },
  {
    image: "../Images/love banquet.jpg",
    title: "Love Banquet",
    price: 10000,
    category: "dinner",
  }
];

let catBtn = document.querySelectorAll(".js-btn");

// looping through the button.
catBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.category;
    const menuCat = menu.filter((menuItem) => {
      // console.log(menuItem.category);
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    console.log(menuCat);
    if (category === "All") {
      menuList(menu);
    } else {
      menuList(menuCat);
    }
  });
});

// function that loops through the array
const menuList = (menuFood) => {
  let menuHTML = menuFood.map((menus) => {
    return `
    <div class="mb-3 col-md-6" style="max-width: 540px;">
      <div class="row g-0 justify-content-between">
        <div class="col-md-5 pe-3">
          <img src="${
            menus.image
          }" style="width: 100%; height: 150px;" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-7">
          <div class="">
             <div class=" d-flex justify-content-between">
              <h5>
                ${menus.title}
              </h5>
              <p>₦${menus.price}</p>
            </div>
            <p class="">Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their juices or a syrup. In different forms, fruit salad can be served as an appetizer or a side as a salad.</p>
            <p class=""><small class="text-muted">Last updated 2 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  `;
  });

  document.querySelector(".js-menu-container").innerHTML = menuHTML;
};
menuList(menu);
