// Sample XML string
const xmlString = `
  <intro>
    <book>
      <name>Junaid Ur Rahman</name>
      <ID>17896</ID>
      <sub>Web Engineering </sub>
      <Assign> XML parsing a string, Multiples entries </Assign>
    </book>
  </intro>
`;

// Parse the XML string into a DOM object
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Extract information from the XML DOM object
const books = xmlDoc.getElementsByTagName("book");
const bookInfo = [];

for (let i = 0; i < books.length; i++) {
  const name = books[i].getElementsByTagName("name")[0].textContent;
  const ID = books[i].getElementsByTagName("ID")[0].textContent;
  const sub = books[i].getElementsByTagName("sub")[0].textContent;
  const Assign = books[i].getElementsByTagName("Assign")[0].textContent;
  bookInfo.push({ name, ID ,sub ,Assign});
}

// Display the extracted information on the web page
const bookContainer = document.getElementById("book-container");

bookInfo.forEach(book => {
  const bookElement = document.createElement("div");
  bookElement.innerHTML = `<h3>Name: ${book.name}</h3><p>ID: ${book.ID} <p>Subject: ${book.sub}</p><p>Assignment: ${book.Assign}</p>`;
  bookContainer.appendChild(bookElement);
});
