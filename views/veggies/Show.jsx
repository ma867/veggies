const React = require('react');

class Show extends React.Component {
   render(){

    //deconstructing the object being past it
    const {name, color, _id} = this.props.veggie
    return(
    <>
        <h1> {name[0].toUpperCase()+ name.substring(1)} Show Page </h1>
        <nav>
        <a href="/vegetables">Back to fruits home</a>
    </nav>
        <p>{name} is {color}</p>
    </>
    )
   }
}

module.exports = Show