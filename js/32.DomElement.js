// Parent To Child and Child To Parent Relations

// const parent = document.querySelector(".parent")
// firstElementChild
//lastElementChild
// parentElement
// nextElementSibling
//childNodes


//CreateElement
/*
    const div = document.createElement('div')
    console.log('div');
    div.className = "main"
    div.id = Math.round(Math.random() *   10 + 1)
    div.setAttribute("title","generated tittle")
    div.style.backgroundColor = "green"
    div.padding = "12px"
    const addText = document.createTextNode("Hello")
    div.appendChild(addText)
    document.body.appendChild(div)
*/

// Edit and Remove Element
/* Add List 

    <ul class="language">
        <li>JavaScript</li>
    </ul>

    function addLanguage(langname){
        const li = document.createElement("li");
        li.innerHTML = `${langname}`
        document.querySelector('language').appendChild('li')
    }
    addLanguage("Physics")  
    addLanguage("Python")  

    function addOptLanguage("language"){
        const li = document.creatElement("li");
        li.appendChild(document.createTextNode(language)).document.querySelector('.language').appendChild
    }
 */