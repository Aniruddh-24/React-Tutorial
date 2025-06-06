function mainContainer(reactElement, container){
//   const domElement =  document.createElement(reactElement.type)
//   domElement.innerHTML = reactElement.children
//   domElement.setAttribute('href', reactElement.props.href)
//   domElement.setAttribute('target', reactElement.props.target)
//   container.appendChild(domElement)
const domElement = document.createElement(reactElement.type)
domElement.innerHtml= reactElement.children
for (const prop in reactElement.props){
    domElement.setAttribute(prop, reactElement.props[prop])
}

}



const reactElement = {
    type:'a',
    props: {
        href:"https://google.com",
        target:'_blank'
    },
    children: 'click me for GOOGLE'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)