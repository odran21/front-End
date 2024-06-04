const father = document.querySelector('.father');
const paragraph = document.createElement('p');
const textInner = `Hey, it's my computer and i can write, look at this!`;
paragraph.textContent = textInner; // Asigna el texto al atributo textContent del elemento <p>
father.appendChild(paragraph); // Añade el elemento <p> al elemento con id 'father'

const otherP = document.createElement('p')
const aaaaa = 'sadflkjhlkjfsdañflkañsldkfjñlaksd <b>ñlkasdjfñl</b> añlskdja ñ lk añ lkjasdñlkasdgqweiwi';
otherP.innerHTML = aaaaa;
otherP.style.color = '#012abc';
father.appendChild(otherP);