import React, { Component, component } from 'react'
import './student.css'
class Student extends Component {
    constructor() {
        super()
        this.state = {
            student: []
        }
    }

    componentDidMount() {
        fetch('/api/student')
            .then(res => res.json())
            .then(student => this.setState({ student }, () => console.log('Student fetched...', student)))
    }

    render() {
        return (
            <div>
                <h3>Student data</h3>
                <ul>
                    {this.state.student.map(student => <li hey={student.id}>{student.name} {student.class} </li>)}
                </ul>
            </div>
        )
    }
}

export default Student;
