async function loadProducts() {
  const res = await fetch("/products");
  const data = await res.json();

  document.getElementById("products").innerHTML =
    data.map(p => `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p class="price">$${p.price}</p>
        <button onclick="deleteProduct('${p._id}')" style="background: #ff4d6d; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; margin-top: 10px;">Delete</button>
      </div>
    `).join("");
}

async function addProduct() {
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const descInput = document.getElementById("desc");
  const imageInput = document.getElementById("image");

  // Простая проверка перед отправкой
  if(!nameInput.value || !priceInput.value) {
      alert("Please fill in Name and Price");
      return;
  }

  const res = await fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameInput.value,
      price: Number(priceInput.value),
      description: descInput.value,
      image: imageInput.value
    })
  });

  if (!res.ok) {
    const err = await res.json();
    alert(err.error || "Error adding product");
    return;
  }

  nameInput.value = "";
  priceInput.value = "";
  descInput.value = "";
  imageInput.value = "";

  loadProducts();
}

async function deleteProduct(id) {
  if (confirm("Are you sure?")) {
    const res = await fetch(`/products/${id}`, { method: "DELETE" });
    if (res.ok) {
        loadProducts();
    } else {
        alert("Failed to delete");
    }
  }
}

loadProducts();
