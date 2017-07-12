let companyDirectoryDiv = document.querySelector(".companyDirectory")
for (var i = 0; i < customers.results.length; i++) {
  let customerDiv = document.createElement("div")
  let customerPic = document.createElement("img")
  let customerName = document.createElement("h4")
  let customerEmail = document.createElement("p")
  let customerAddr1 = document.createElement("p")
  let customerAddr2 = document.createElement("p")
  let customerPhone = document.createElement("p")

  customerPic.src = customers.results[i].picture.large
  customerName.innerHTML = `${customers.results[i].name.first} ${customers
    .results[i].name.last}`
  customerEmail.innerHTML = customers.results[i].email
  customerAddr1.innerHTML = customers.results[i].location.street
  customerAddr2.innerHTML = `${customers.results[i].location.city} ${customers
    .results[i].location.state} ${customers.results[i].location.postcode}`
  customerPhone.innerHTML = customers.results[i].phone

  customerDiv.appendChild(customerPic)
  customerDiv.appendChild(customerName)
  customerDiv.appendChild(customerEmail)
  customerDiv.appendChild(customerAddr1)
  customerDiv.appendChild(customerAddr2)
  customerDiv.appendChild(customerPhone)
  companyDirectoryDiv.appendChild(customerDiv)
}
