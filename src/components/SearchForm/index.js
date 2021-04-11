import React from 'react';
import { Button, Col,Form } from 'react-bootstrap'

const SearchForm = (props) => {
    const {userName,repoName,handleChange,handleSearch} = props
    return (
        <Form.Row className="justify-content-center">
            <Col xs={3}>
                <Form.Control
                    placeholder="User name"
                    value={userName}
                    name="userName"
                    onChange={handleChange('userName')}
                />
                <Form.Text className="text-muted">
                    ex.  microsoft
                </Form.Text>
            </Col>
            <Col xs={3}>
                <Form.Control
                    placeholder="Repo name"
                    value={repoName}
                    name="repoName"
                    onChange={handleChange('repoName')}
                />
                <Form.Text className="text-muted">
                    ex. computervision-recipes
                </Form.Text>
            </Col>
            <Col xs={2}>
                <Button variant="primary" onClick={handleSearch}>Search</Button>
            </Col>
        </Form.Row>
    );
};

export default SearchForm;