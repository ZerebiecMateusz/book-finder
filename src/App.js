import {Container, Row, Col} from 'react-bootstrap';
import Header from "./Components/Header.js";
import Books from './Components/Books.js';
import SearchInput from './Components/SearchInput.js';
import axios from 'axios';
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      books:[],
      text:'game of throne'
    }
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios.request({
      method:'get',
      url:'https://www.googleapis.com/books/v1/volumes?q='+this.state.text
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log(this.state);
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(text){
    this.setState({text: text}, this.getBooks())
  }
  
  render() { 
    return ( 
      <div className="App">
        <Header/>
        <Container>
          <Row>
              <Col xs={12} md={12} lg={12}>
                <SearchInput onChange={this.handleChange.bind(this)} value={this.state.text}/>
                <Books books={this.state.books} />
              </Col>
          </Row>
        </Container>
    </div>
     );
  }
}
 
export default App;
