var React = require('react');

var GuessWho = React.createClass({
  propTypes:{
    title: React.PropTypes.string.isRequired,
    rules: React.PropTypes.string.isRequired,
    
  },
  setToUnselectable: function(){
    this.setState({ total: this.state.total + this.props.depositAmount });
  },

  getInitialState: function(){
    return {
     
    }
  },

  render: function(){

    return(
        <div>
          <h1>{this.props.title}</h1>
          <h3>{this.props.rules}</h3>
          <select value={this.optionsState}>
            <option value ="Is human">Is human</option>
            <option value ="Has a moustache">Has a moustache</option>
            <option value ="Is male">Is male</option>
            <option value ="Is female">Is female</option>
            <option value ="Is royal">Is royal</option>
          </select>
      
          <button id="Mario" type="button" onClick={this.setToUnselectable}>Mario</button>
          <button id="Luigi" type="button" onClick={this.setToUnselectable}>Luigi</button>
          <button id="Yoshi" type="button" onClick={this.setToUnselectable}>Yoshi</button>
          <button id="Bowser" type="button" onClick={this.setToUnselectable}>Bowser</button>
          <button id="Toad" type="button" onClick={this.setToUnselectable}>Toad</button>
          <button id="Peach" type="button" onClick={this.setToUnselectable}>Princess Peach</button>
        </div>
    );
  }

});

module.exports = GuessWho;

// <img src="http://images.clipartpanda.com/mario-bros-clip-art-fe32b21affa9d98b4c50cd19d7e95179.jpg"/>
// <img src="http://images.clipartpanda.com/mario-bros-clip-art-nsmb-princess-peach.jpg"/>
// <img src="http://images.clipartpanda.com/mario-bros-clip-art-nsmb-yoshi.jpg" />
// <img src="http://images.clipartpanda.com/mario-bros-clip-art--mario-bros-clipart-3.jpg" />
// <img src="http://www.clipartkid.com/images/441/luiginsmbw-png-nYr7Ak-clipart.png" />
// <img src="http://images.clipartpanda.com/mario-bros-clip-art-LcKge5Mca.jpeg"/>