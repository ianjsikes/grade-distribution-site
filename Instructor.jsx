Instructor = React.createClass({
  propTypes: {
    instructor: React.PropTypes.object.isRequired
  },

  renderCourses(){
    return this.props.instructor.classes.map(function(c) {
      return <Course course={c} />;
    });
  },

  render() {
    console.log(this.props.instructor);
    return (
      <li>
        {this.props.instructor.name}
        <ul>
          {this.renderCourses()}
        </ul>
      </li>
    );
  }
});
