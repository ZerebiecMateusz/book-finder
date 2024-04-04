import React, { Component } from 'react';
import {Accordion, Col, Row, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

class Books extends Component {
  render() {
    let bookItems;
    if(this.props.books){
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        let description = book.volumeInfo.description;
        let thumbnail = book.volumeInfo.imageLinks.thumbnail;
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let pageCount = book.volumeInfo.pageCount;
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.saleInfo.buyLink;

        return (
            <Accordion.Item eventKey={id}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col xs={3} md={3} lg={3}>
                            <img src={thumbnail} role="presentation" alt='zdjecie okladki'/>
                        </Col>
                        <Col xs={8} md={8} lg={8}>
                            <ListGroup>
                                <ListGroupItem><strong>Categories: </strong> {categories}</ListGroupItem>
                                <ListGroupItem><strong>Authors: </strong> {authors}</ListGroupItem>
                                <ListGroupItem><strong>Publisher: </strong> {publisher}</ListGroupItem>
                                <ListGroupItem><strong>Publish date: </strong> {publishedDate}</ListGroupItem>
                                <ListGroupItem><strong>Page count: </strong> {pageCount}</ListGroupItem>
                                <ListGroupItem><strong>Average Rating: </strong> <span className='rating'>{averageRating}</span></ListGroupItem>

                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={11} md={11} lg={11}>
                            <h3>Book Description</h3>
                            {description}
                            <hr/>
                            <Button href={buyLink}>Kup</Button>
                        </Col>
                    </Row>


                </Accordion.Body>
            </Accordion.Item>

        )
      });
    }
    return (
        <Accordion>
          {bookItems}
        </Accordion>
    );
  }
}

export default Books;
