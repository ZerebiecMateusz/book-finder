import { Component } from "react";
import {Container, Form} from 'react-bootstrap';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: props.value
         } 
    }

    onChange(e) {
        this.setState({value: e.target.value});
        this.props.onChange(this.state.value);
    }

    render() { 
        return (
            <Container>
                <Form.Control size="lg" type="text" value={this.state.value} placeholder="Find books..." onChange={this.onChange.bind(this)}/>
            </Container>
        );
    }
}
 
export default SearchInput;