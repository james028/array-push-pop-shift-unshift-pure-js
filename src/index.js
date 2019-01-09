const arrayWithValues = ["one", "two", "three"];

function displayValue() {
  // const le = arrayWithValues.length;
  // arrayWithValues[le] = document.getElementById("input").value;

  for (let i = 0; i < arrayWithValues.length; i++) {
    const div = document.createElement("div");

    div.innerHTML = `
        <article class="media">
        długosc całej tablicy: ${arrayWithValues.length}
          <div class="media-content">
            <div class="content" id="content">Jest to element nr ${i + 1} z ${
      arrayWithValues.length
    }. Jego wartość to ${arrayWithValues[i]}.</div>
          </div>
        </article>
      `;

    const divBox = document.createElement("div");
    divBox.appendChild(div);

    const app = document.getElementById("app");
    app.appendChild(divBox);
    app.classList.add("box");

    document.getElementById("input").value = "";

    // const apps = document.querySelector("#content");
    // while (apps.hasChildNodes()) {
    //   apps.removeChild(apps.lastChild);
    // }
  }
}

document.getElementById("btn-one").addEventListener("click", function() {
  const inp = document.getElementById("input").value;
  arrayWithValues.push(inp);

  displayValue();
});

document.getElementById("btn-two").addEventListener("click", function() {
  const inp = document.getElementById("input").value;
  arrayWithValues.unshift(inp);

  displayValue();
});

document.getElementById("btn-three").addEventListener("click", function() {
  arrayWithValues.pop();
  displayValue();
});

document.getElementById("btn-four").addEventListener("click", function() {
  arrayWithValues.shift();
  displayValue();
});
