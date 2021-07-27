window.onload = function() {
    document.body.className += " loaded";
}

let div = document.createElement("div");

div.classList.add( "portal");


document.body.appendChild(div);


// put everything here, in container div2
let imge = document.createElement("img");

imge.src="sun.gif";
imge.classList.add("ux-obj-sun");
imge.classList.add( "portal2");

div.appendChild(imge);


let div3 = document.createElement("div");
div3.classList.add("ui-obj-input-container")
div3.classList.add( "portal1");
// everyting in div 3
let heading1 = document.createElement("h2");
heading1.innerText="Enter you projects name:";
let input1 = document.createElement("input");
input1.placeholder="e.g Render Site";
input1.classList.add("ui-obj-input-field");
input1.type="text";
div3.appendChild(heading1);
div3.appendChild(input1);

div.appendChild(div3);

let div4 = document.createElement("div");
div4.classList.add("ui-obj-input-container-subsec");
div4.classList.add( "portal3");
//add everything to div4

let div5 = document.createElement("div");
div5.classList.add("requirement");

let heading2 = document.createElement("h3");
heading2.innerText="Enter the specification required for your project:";

let textar = document.createElement("textarea");
textar.cols="25"
textar.rows="4"
textar.placeholder="e.g A person clicks a penicl animation, then the site renders/paints a different display"
textar.id="textinput"

let pSpecial = document.createElement("p");

pSpecial.innerText="Remaining characters: "
let spanCount = document.createElement("span");
spanCount.id="count";

pSpecial.appendChild(spanCount);

let heading3 = document.createElement("h3");
heading3.innerText="Scroll down and click on the animated pencil below!";


div5.appendChild(heading2);
div5.appendChild(textar);
div5.appendChild(pSpecial);
div5.appendChild(heading3)

div4.appendChild(div5);

div.appendChild(div4);

let div6 = document.createElement("div");
div6.classList.add("ui-obj-images");

//put everything in div 6, then div 6 in div2

let imge2 = document.createElement("img");

imge2.src="render.gif"

imge2.classList.add("ui-obj-render-btn");
imge2.id="hover";

let div7 = document.createElement("div");
div7.classList.add("ui-obj-images-footer");


div6.appendChild(imge2);
div6.appendChild(div7);


div6.classList.add( "portal4");

div.appendChild(div6);

maxchar = 500;
var i = document.getElementById("textinput");
var c = document.getElementById("count");
c.innerHTML = maxchar;
    
i.addEventListener("keydown",count);

function count(e){
    var len =  i.value.length;
    if (len >= maxchar){
       e.preventDefault();
    } else{
       c.innerHTML = maxchar - len-1;   
    }
}



