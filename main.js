console.log(customers);
function list(){
  for(let i = 0; i < 12; i++){
    let customerData = customers.results[i];
    let div = document.createElement('div')
    let content = `
        <img src = ${customerData.picture.large}>
        <h2>${customerData.name.first} ${customerData.name.last}</h2>
        <p>${customerData.location.street}</p>
        <p>${customerData.location.city} ${customerData.location.state} ${customerData.location.postcode}</p>
        <p>${customerData.email}</p>
        <p>${customerData.phone}</p>
        <p>${customerData.id.value}</p>
      `;
    div.innerHTML = content;
    console.log(div);
    document.getElementById("people").appendChild(div);
  }
}
list();
