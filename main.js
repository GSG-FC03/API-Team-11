const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);
const button = document.getElementById("button");
const input = document.getElementById("input");
const created = document.getElementsByClassName("card");
button.addEventListener("click", function () {
  localStorage.setItem(1,input.value)
 location.reload();
});
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s= ${localStorage.getItem(1)}`)
        .then((response) => {
          if (response.status !== 200) {
            console.log(
              `Looks like there was a problem. Status Code: ${response.status}`
            );
          } else {
            // Examine the text in the response
            return response.json();
          }
        })
        .then((data) => {
          let dat = data.drinks;
          for (element of dat) {
            // Create a div with a card class
            const card = document.createElement("div");
            card.setAttribute("class", "card");
  
            // Create an h1 and set the text content to the cocktail's name
            const h1 = document.createElement("h1");
            h1.textContent = element.strDrink;
  
            // Create a p and set the text content to the cocktail's id
            const p = document.createElement("p");
            // movie.description = movie.description.substring(0, 300) // Limit to 300 chars
            p.textContent = element.idDrink; // End with an ellipses
  
            //Create an img and set the src to the cocktail's url photo
            const pic = document.createElement("img");
            pic.src = element.strDrinkThumb;

            //on click show the instruction
           card.addEventListener("click",function(){
              const p = document.createElement("p");
              p.textContent =  "Instruction: "+ `${element.strInstructions}`
              card.appendChild(p);
           });

            // Append the cards to the container element
            container.appendChild(card);
  
            // Each card will contain an h1 and a p and an img
            card.appendChild(h1);
            card.appendChild(p);
            card.appendChild(pic);
          
        }

      }

      );