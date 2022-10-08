const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Veggie</h1>
            <form method="POST" action="/vegetables">
                Name: <input type="text" name="name" ></input><br/>
                Color: <input type="text" name="color"></input><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Veggie"></input>
            </form>
            </>
        )
    }
}

module.exports = New