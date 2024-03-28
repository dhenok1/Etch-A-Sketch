
function createGrid(height, width){
    const grid = document.createElement("div");
    grid.id = "contianer";
    for (let i = 0; i < height; i++){
        const row = document.createElement("div");
        row.className = "row";
        row.style.width = "100vw";
        row.style.height = "" + (1/height)*100 + "vh";
        grid.appendChild(row);
        for (let j = 0; j < width; j++){
            const block = document.createElement("div");
            block.className = "block";
            block.id = "block" + i + j
            block.style.height = "" + (1/height)*100 + "vh";
            block.style.width = "" + (1/width)*100 + "vw";
            row.appendChild(block);
        }
    }
    document.body.appendChild(grid);
    // Add event listener to the grid container
    grid.addEventListener("mouseover", function(event) {
        // Check if the event target is a block
        if (event.target.classList.contains("block")) {
            // Change the background color of the hovered block
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(200, 256);
            const g = randomBetween(200, 250);
            const b = randomBetween(200, 256);
            const rgb = `rgb(${r},${g},${b})`;
            event.target.style.backgroundColor = rgb;
        }
    });

    // // Add event listener to reset block color when mouse leaves the grid container
    // grid.addEventListener("mouseout", function(event) {
    //     // Check if the event target is a block
    //     if (event.target.classList.contains("block")) {
    //         // Reset the background color of the previously hovered block
    //         event.target.style.backgroundColor = "";
    //     }
    // });

    // document.getElementById("myForm").addEventListener("submit", function (e) {
    //         e.preventDefault();

    //         var formData = new FormData(form);
    //         // output as an object
    //         console.log(Object.fromEntries(formData));

    //         // ...or iterate through the name-value pairs
    //         for (var pair of formData.entries()) {
    //             console.log(pair[0] + ": " + pair[1]);
    //         }
    //     });
    }   

createGrid(16, 16);
