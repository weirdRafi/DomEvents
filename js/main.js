serial = 0;
// For Triangle 
document.getElementById('btn-triangle').addEventListener('click', function(){
    serial = serial + 1;
    const triangleInputOne = document.getElementById('triangle-1').value;
    const triangleInputOneString = parseFloat(triangleInputOne);

    const triangleInputTwo = document.getElementById('triangle-2').value;
    const triangleInputTwoString = parseFloat(triangleInputTwo);

    const triangleInput = 0.5 * triangleInputOneString * triangleInputTwoString;
    const triangle = document.getElementById('first-name').innerText;

    const container = document.getElementById("table");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${triangle}</td>
      <td>${triangleInput}</td>
      
      
    `;
    container.appendChild(tr);

})

// For Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial = serial + 1;
    const rectangleInputOne = document.getElementById('rectangle-1').value;
    const rectangleInputOneString = parseFloat(rectangleInputOne);

    const rectangleInputTwo = document.getElementById('rectangle-2').value;
    const rectangleInputTwoString = parseFloat(rectangleInputTwo);

    const rectangleInput = rectangleInputOneString * rectangleInputTwoString;
    const rectangle = document.getElementById('second-name').innerText;

    const container = document.getElementById("table");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${rectangle}</td>
      <td>${rectangleInput}</td>
      
      
      
    `;
    container.appendChild(tr);
})

// For Parallelogram

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    serial = serial + 1;
    const parallelogramInputOne = document.getElementById('parallelogram-1').innerText;
    const parallelogramInputOneString = parseFloat(parallelogramInputOne);

    const parallelogramInputTwo = document.getElementById('parallelogram-2').innerText;
    const parallelogramInputTwoString = parseFloat(parallelogramInputTwo);

    const parallelogramInput = parallelogramInputOneString * parallelogramInputTwoString;
    const parallelogram = document.getElementById('third-name').innerText;

    const container = document.getElementById("table");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${parallelogram}</td>
      <td>${parallelogramInput}</td>
      
    `;
    container.appendChild(tr);

})

// For Rhombus

document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial = serial + 1;
    const rhombusInputOne = document.getElementById('rhombus-1').innerText;
    const rhombusInputOneString = parseFloat(rhombusInputOne);

    const rhombusInputTwo = document.getElementById('rhombus-1').innerText;
    const rhombusInputTwoeString = parseFloat(rhombusInputTwo);

    const rhombusInput = rhombusInputOneString * rhombusInputTwoeString;
    const rhombus = document.getElementById('fourth-name').innerText;

    const container = document.getElementById("table");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${rhombus}</td>
      <td>${rhombusInput}</td>
      
    `;
    container.appendChild(tr);

})

// For Pentagon

document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial = serial + 1;
    const pentagonInputOne = document.getElementById('rhombus-1').innerText;
    const pentagonInputOneString = parseFloat(pentagonInputOne);

    const pentagonInputTwo = document.getElementById('rhombus-1').innerText;
    const pentagonInputTwoeString = parseFloat(pentagonInputTwo);

    const rhombusInput = pentagonInputOneString * pentagonInputTwoeString;
    const rhombus = document.getElementById('fourth-name').innerText;

    const container = document.getElementById("table");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${rhombus}</td>
      <td>${rhombusInput}</td>
      
    `;
    container.appendChild(tr);

})

// For Ellipse


