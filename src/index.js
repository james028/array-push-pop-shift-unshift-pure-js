const arrayWithValues = [];

function displayValue() {
  // const le = arrayWithValues.length;
  // arrayWithValues[le] = document.getElementById("input").value;

  const apps = document.getElementById("app");
  while (apps.hasChildNodes()) {
    apps.removeChild(apps.lastChild);
  }

  const app = document.getElementById("app");
  const divLength = document.createElement("div");
  divLength.classList.add(
    "column",
    "media",
    "is-three-fifths",
    "is-offset-one-fifth"
  );
  divLength.style.padding = "0 0 20px 0";

  divLength.innerHTML = `Łączna ilość wszystkich elementów to <strong>${
    arrayWithValues.length
  }</strong>.`;
  app.appendChild(divLength);

  for (let i = 0; i < arrayWithValues.length; i++) {
    const div = document.createElement("div");

    div.innerHTML = `
        <article style="padding: 0;" class="media column is-three-fifths is-offset-one-fifth">
          <div class="media-content">
            <div class="content" id="content">Jest to element nr <strong>${i +
              1}</strong> z <strong>${
      arrayWithValues.length
    }</strong>. Jego wartość to ${arrayWithValues[i]}.</div>
          </div>
        </article>
      `;

    const divBox = document.createElement("div");
    divBox.appendChild(div);
    divBox.classList.add("boxy");

    app.appendChild(divBox);
    app.classList.add("box");

    document.getElementById("input").value = "";
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
