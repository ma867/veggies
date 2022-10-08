const React = require('react');

class Index extends React.Component{
    render(){
        const {veggies} = this.props
        return(
            <div>
                <h1>Veggies Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create a New Fruit</a>
                </nav>
                <ul>
                    {
                        veggies.map((veggie) => {

                            const {name, color,readyToEat} = veggie
                            return (
                                <li key={veggie._id}>
                                    <a href={`/vegetables/${veggie._id}`}>{name}</a> is {color} and it's 
                                    {readyToEat?'It\'s ready to eat':'It\'s not ready to eat'}
                                </li>
                                
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index