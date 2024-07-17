{/* <h1 id="title" class="heading">DOM learning on Chai Or Code</h1>  */}

// document.getElementById("title")  =>  <h1 id="title" class="heading">DOM learning on Chai Or Code</h1>
// document.getElementById("title").id => title
// document.getElementById("title").class => undefined
// document.getElementById("title").className => heading
// document.getElementById("title").getAttribute("id") => title
// document.getElementById("title").getAttribute("class") => heading
// document.getElementById("title").setAttribute("class"."test") => <h1 id="title" class="test">DOM learning on Chai Or Code</h1>
// document.getElementById("title").setAttribute("class"."test heading") => <h1 id="title" class="test heading">DOM learning on Chai Or Code</h1> 

// document.getElementById("className")

//Style
// title.style.backgroundColor: 'green

//add content
// title.textContent => show all the content even a hidden content
// title.innerHTML => show every thing inside the tag even nested tag
// title.innerText => show only the visible content(not to display the hidden cpontent)


//querySelector
// document.querySelector('h1')
// document.querySelector('#title')
// document.querySelector('.heading')
// document.querySelector('input')
// document.querySelector('input[type="password"]')

//querySelectorAll


//htmlColllection