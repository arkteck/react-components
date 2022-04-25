var groceryList = ['mangos', 'watermelons', 'bananas', 'apples', 'honeydews'];

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item={item} />)}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bought: false,
      hover: false
    };
  }
  onListItemClick() {
    this.setState({
      bought: !this.state.bought
    })
  }

  onListItemOver() {
    this.setState({
      hover: true
    })
  }
  onListItemOut() {
    this.setState({
      hover: false
    })
  }
  render() {
    var style = {
      textDecoration: this.state.bought ? 'line-through': 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemOver.bind(this)} onMouseOut={this.onListItemOut.bind(this)}>{this.props.item}</li>;
  }
}

ReactDOM.render(<GroceryList items={groceryList}/>, document.getElementById('app'));