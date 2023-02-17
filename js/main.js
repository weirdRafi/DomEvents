serial = 0;
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