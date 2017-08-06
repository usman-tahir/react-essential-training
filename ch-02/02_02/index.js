const { createElement } = React
const { render } = ReactDOM

const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Verdana'
}
const title = createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'hello world'
);

render(title, document.getElementById('react-container'));