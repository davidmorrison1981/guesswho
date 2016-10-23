var React = require('react');

var GuessWho = React.createClass({
  propTypes:{
    title: React.PropTypes.string.isRequired,
    rules: React.PropTypes.string.isRequired,
    // depositAmount: React.PropTypes.number.isRequired,
  },
  setToUnselectable: function(){
    this.setState({ total: this.state.total + this.props.depositAmount });
  },

  withdrawMoney: function(){
    this.setState({ total: this.state.total - this.props.depositAmount });
  },

  getInitialState: function(){
    return {
      total: 0
    }
  },

  render: function(){

    var total = this.state.total.toFixed(2);

    return(
        <div>
          <h1>{this.props.title}</h1>
          <h3>{this.props.rules}</h3>
          <p>s</p>
        
          <button type="button" onClick={this.setToUnselectable}><img src="http://images.clipartpanda.com/mario-bros-clip-art-LcKge5Mca.jpeg"/>Mario</button>
          <button type="button" onClick={this.setToUnselectable}><img src="http://www.clipartkid.com/images/441/luiginsmbw-png-nYr7Ak-clipart.png" />Luigi</button>
          <button type="button" onClick={this.setToUnselectable}><img src="http://images.clipartpanda.com/mario-bros-clip-art-nsmb-yoshi.jpg" />Yoshi</button>
          <button type="button" onClick={this.setToUnselectable}><img src="http://images.clipartpanda.com/mario-bros-clip-art--mario-bros-clipart-3.jpg" />Bowser</button>
          <button type="button" onClick={this.setToUnselectable}><img src="http://images.clipartpanda.com/mario-bros-clip-art-fe32b21affa9d98b4c50cd19d7e95179.jpg"/>Toad</button>
          <button type="button" onClick={this.setToUnselectable}><img src="http://images.clipartpanda.com/mario-bros-clip-art-nsmb-princess-peach.jpg"/>Princess Peach</button>
        </div>
    );
  }

});

module.exports = GuessWho;
