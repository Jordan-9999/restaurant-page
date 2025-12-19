function createContact(){
    const siteContent = document.getElementById("content");
    const contactContent = document.createElement("div");
    
    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact";
    contactContent.appendChild(contactHeader);

    const contactNum = document.createElement("p");
    contactNum.textContent = "555-5555";
    contactContent.appendChild(contactNum);

    const email = document.createElement("p");
    email.textContent = "somebodysfakeemail@fakeemail.com";
    contactContent.appendChild(email);

    siteContent.appendChild(contactContent);
};

export {createContact};