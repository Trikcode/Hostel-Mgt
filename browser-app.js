const url = "https://wiseteam-hostel-api.herokuapp.com/products";
const fileFormDOM = document.querySelector(".file-form");

const containerDOM = document.querySelector(".container");
fetchProducts();

async function fetchProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(url);
    const productsDOM = products
      .map((product) => {
        return `<article class="product">
    <img src="${product.imageurl}" alt="${product.name}" class="img"/>
    <footer>
    <p>${product.name}</p>
    <br>
    <span>$${product.priceone}</span>
       <br>
    <span>$${product.pricetwo}</span>
       <br>
    <span>${product.location}</span>
       <br>
    <span>${product.description}</span>
       <br>
    </footer>
    </article>`;
      })
      .join("");
    containerDOM.innerHTML = productsDOM;
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
