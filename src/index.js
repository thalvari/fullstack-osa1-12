import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = ({anecdotes}) => {
    const [most, setMost] = useState(0)
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(6).fill(0))

    const handleNext = () => setSelected(Math.floor(Math.random() * 6))
    const handleVote = () => {
        const copy = [...votes]
        copy[selected]++
        setVotes(copy)
        setMost(copy.indexOf(Math.max(...copy)))
    }

    return (
        <div>
            <h3>Anecdote of the day</h3>
            <div>{anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
            <Button handleClick={handleVote} text="vote"/>
            <Button handleClick={handleNext} text="next anecdote"/>
            <h3>Anecdote with most votes</h3>
            <div>{anecdotes[most]}</div>
            <div>has {votes[most]} votes</div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))
