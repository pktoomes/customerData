
for(let i = 0; i < customers.results.length; i++){
  let customerData = customers.results[i];
  var imageProfile = customerData.picture;
  var name = customerData.name.first + " " + customerData.name.last
  console.log(name);
  var emailAddress = customerData.emailAddress;
  console.log(emailAddress);
  var telNumber = 

let content =  `<li>
      <div class = "person-info">
        <h3>${imageProfile}</h3>
        <h1>${name}</h1>
        <p>${emailAddress}</p>
        <p>${telNumber}</p>
        <p>${something}</p>
        <p>${sSNumber}</p>
      </div>
    </li>`
}
