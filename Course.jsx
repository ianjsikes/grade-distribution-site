Course = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired
  },

  render() {
    return(
      <li>{JSON.stringify(this.props.course)}</li>
    );
  }
});
