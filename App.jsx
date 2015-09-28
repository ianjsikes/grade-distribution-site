// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      instructors: Instructors.find({}).fetch()
    };
  },

  renderInstructors() {
    return this.data.instructors.map((instructor) => {
      return <Instructor key={instructor._id} instructor={instructor} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Grade Distributions</h1>
        </header>

        <ul>
          {this.renderInstructors()}
        </ul>
      </div>
    );
  }
});
