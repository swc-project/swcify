module.exports = (React) => {
  var TestComponent = React.createClass({
    envLength() {
      return process.env.NODE_ENV.length;
    },
    render() {
      return <div/>;
    }
  });
  return TestComponent;
}
