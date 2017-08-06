const { createElement } = React
const { render } = ReactDOM

const title = createElement(
  'h1',
  {id: 'title', className: 'header'},
  'hello world'
);

render(title, document.getElementById('react-container'));