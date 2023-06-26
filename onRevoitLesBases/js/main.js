const button = document.querySelector("button");

button.addEventListener('click',() => {

//button : c'est un bouton 
    const divRoot =  document.querySelector("#root");
//divRoot : Il défini l'emplacement de l'article pour et autre élément que l'on mettra dans ce divRoot.
    const articleElement = createNodeElement("article", "article-piscine");
    divRoot.appendChild(articleElement);

    divRoot.appendChild(articleElement)
//article : On crée un élément article qui regroupera les autres éléments.
   const titleElement = createNodeElement("h1","title-piscine",`La place d'un nageur est dans la piscine !`)
    articleElement.appendChild(titleElement)
//titre : premier élément dans l'élément article où on défini la taille de l'élément h1 puit son emplacement.
    
    const imgElement = createNodeElement(
        "img",
        "img-piscine",
        "",
        "https://fr.web.img5.acsta.net/pictures/19/09/24/11/50/3988724.jpg"
    );
    articleElement.appendChild(imgElement);
//image dimension réajusté sur css: l'image est placé dans une zone vide "".
    const textElement = createNodeElement("p","text-piscine",`Jean-Paul et Marianne forment un couple idéal et coulent des jours heureux dans leur villa de Saint-Tropez, jusqu'au jour où arrive Harry, au bras de sa fille l'incendiaire Pénélope. Ancien amant de Marianne, l'homme trouble cette vie tranquille. La tension monte.`)
    articleElement.appendChild(textElement)
//texte de l'article: même principe que le titre mais à la place de h1 c'est p.

})
 const createNodeElement = (tagType, className,text = "", imgSrc = "") => {
    const nodeElement = document.createElement(tagType);
    nodeElement.setAttribute("class", className)

    nodeElement.setAttribute("src", imgSrc)
    nodeElement.textContent = text;

    return nodeElement

// c'est le même principe qu'une boite noir.
 }

