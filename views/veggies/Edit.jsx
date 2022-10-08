const React = require('react')

class Edit extends React.Component{
    render(){
        return(
            <>
            <h1>Edit Existing Fruit</h1>
            <nav>
                <a href="/veggies"> Go Back to Veggie Index</a>

            </nav>
            <form method="POST" action="/fruits">
                name: <input type="text" name="name"></input><br />
                color: <input type="text" name="color"></input><br />
                <input type="submit" value="Submit Fruit" />
            </form>
            </>
        )
    }
}

module.exports = Edit