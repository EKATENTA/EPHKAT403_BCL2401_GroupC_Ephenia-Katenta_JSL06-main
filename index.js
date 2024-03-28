const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

//Price list
const pricePerItem = 60;

function displayMenuItems(menu) {
  const menuContainer = document.getElementById("menu");
  for (const [category, items] of Object.entries(menu)) {
    // Category Element
    const categoryElement = document.createElement("h3");
    categoryElement.textContent = category;
    menuContainer.appendChild(categoryElement);

    // List for items
    const itemList = document.createElement("ul");
    menuContainer.appendChild(itemList);

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      listItem.style.cursor = "pointer"; // Add pointer cursor on hover
      listItem.addEventListener("click", () => addToOrder(item));
      itemList.appendChild(listItem);
    });
  }
}

function addToOrder(itemName) {
  const orderItemsList = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");

  // Order Item
  const orderItem = document.createElement("li");
  orderItem.textContent = itemName;
  orderItemsList.appendChild(orderItem);

  // Calculate Total
  const currentTotal = parseFloat(orderTotalElement.textContent);
  const newTotal = currentTotal + pricePerItem;
  orderTotalElement.textContent = newTotal.toFixed(2); // Fix to 2 decimal places
}

function initMenuSystem(menu) {
  displayMenuItems(menu);
}

initMenuSystem(menu);
