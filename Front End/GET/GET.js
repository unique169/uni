// to fetch products from the databse

async function getProduct() {

    try {

        const response = await fetch('https://fakestoreapi.com/products');

        console.log(initial response:, response);

        //convert the returned promise to a javascript object
        const productData = await response.json();

        console.log(productData:, productData);

        //grab an empty container from the DOM
        const productCard = document.getElementById(product-card);

        //create a variable and initiates it with an empty string
        let myCards = "";

        //Loop through the array of productfetched
        productData.map((item) => {
            myCards += `
             <div class="card">
            <img src= ${item.image} alt="photo"/>
            <h3>${item.title}/h3>
            <div class="amount">
                <h5>Price:</h5>
                <p>${item.price}</p>
            </div>           
            <div class="category">
                <h5>Category:</h5>
                <p>${item.category}</p>
            </div>
            <p>${item.description}</p>
        </div>`
        });

        productCard.innerHTML = myCards;
    }

    catch (error) {
        console.log(ptoduct error, error);
    }
    
};

getProduct();