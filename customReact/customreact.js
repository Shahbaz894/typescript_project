function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Fix the typo in `reactElement.children`
    domElement.innerHTML = reactElement.children;

    // Set the attributes if they exist
    if (reactElement.props.href) {
        domElement.setAttribute('href', reactElement.props.href);
    }
    if (reactElement.props.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com', // Add protocol
        target: '_blank'
    },
    children: "Click me"
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
