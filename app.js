// TODO
// var GroceryListItem = (props) => (
//   <li onClick={props.onClick}>{props.item}</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };

  render() {
    var style = {
      'user-select': 'none',
      cursor: 'pointer',
      width: 'fit-content',
      'font-weight': this.state.done ? 'bold' : 'normal'
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
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


ReactDOM.render(<GroceryList items={['Milk', 'Cookies', 'Rice']} />, document.getElementById('app'));