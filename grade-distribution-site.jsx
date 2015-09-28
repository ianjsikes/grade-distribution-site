// Define a collection to hold our tasks
Instructors = new Mongo.Collection("instructors");

if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    console.log(Instructors);
    React.render(<App />, document.getElementById("render-target"));
  });
}
