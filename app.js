// TODO
// var GroceryListItem = (props) => (
//   <li onClick={props.onClick}>{props.item}</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  onHover() {
    this.setState({
      hover: true
    });
  };

  onLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      'user-select': 'none',
      cursor: 'pointer',
      width: 'fit-content',
      'font-weight': this.state.hover ? 'bold' : 'normal'
    }

    return (
      <li style={style} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} >{this.props.item}</li>
    );
  };
}

var GroceryList = (props) => (
  <div>
    <h1>GroceryList</h1>

    <ul>
      {props.items.map(item => <GroceryListItem item={item} />)}
    </ul>
  </div>
);


let groceries = ['Milk', 'Juice', 'Apples', 'Oranged', 'Cookies', 'Lettuce', 'Carrots', 'Salt', 'Flour', 'Sugar', 'Cheese', 'Eggs', 'Detergent'];
ReactDOM.render(<GroceryList items={groceries} />, document.getElementById('app'));