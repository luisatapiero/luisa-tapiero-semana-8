import getData from "../../json.js";

let list = [];


class firstComponent extends HTMLElement {
    static get observedAttributes(){
        return['class']
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.printData();
    }
    attributeChangeCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.printData();
}

    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="./components/firstComponent/componentExample.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
                `;
        list.forEach((item)=>{

            this.shadowRoot.innerHTML +=`            
            <div class="container">
        
        <div class="card">
            <div class="card-image">
                <img src="${item.url}">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
            </div>
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>$ ${item.price} USD</p>
                <button class="add-to-cart">
                    Add To Cart
                </button>
            </div>
        </div> 
            `;
        })
        
    }

    printData () {
        getData().then((a)=>{list = a
            this.render()})
        
    }
    
    
}
customElements.define("app-header", firstComponent);
export default firstComponent;