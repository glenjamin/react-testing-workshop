import React from "react";

import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Tabs from "react-bootstrap/lib/Tabs";
import Tab from "react-bootstrap/lib/Tab";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import Label from "react-bootstrap/lib/Label";
import Table from "react-bootstrap/lib/Table";

export default class App extends React.Component {
  render() {
    return (
      <Grid>
        <Form horizontal>
          <FormGroup bsSize="large">
            <Col xs={3}>
              <ControlLabel>Title</ControlLabel>
            </Col>
            <Col xs={5}>
              <FormControl/>
            </Col>
            <Col xs={4}>
              <Button>Share</Button>
              <Button>New</Button>
            </Col>
          </FormGroup>
        </Form>
        <Tabs animation={false} id="panel-tabs">
          <Tab eventKey={1} title="Videos">
            <ButtonToolbar>
              <Button><Glyphicon glyph="random" /> Shuffle</Button>
              <Button><Glyphicon glyph="sort-by-attributes-alt" /> Sort</Button>
              <Button><Glyphicon glyph="plus-sign" /> Add</Button>
              <Button><Glyphicon glyph="lock" /> Lock</Button>
            </ButtonToolbar>
            <Row>
              <Col xs={3}>
                <div style={{
                  background: "#ccc", width: "100%", height: 150
                }} />
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <ControlLabel>Youtube URL</ControlLabel>
                  <FormControl />
                  <p>[Title]</p>
                  <p>[description]</p>
                  <Button><Glyphicon glyph="trash" /></Button>
                </FormGroup>
              </Col>
              <Col xs={3}>
                <p style={{fontSize: 50}}>3</p>
                <Label>name1</Label> <Label>name2</Label> <Label>name3</Label>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={2} title="Voters">
            <ButtonToolbar>
              <Button><Glyphicon glyph="plus-sign" /> Add</Button>
            </ButtonToolbar>
            <Table hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Voted For</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Glen</td>
                  <td>Video 1, Video 2</td>
                  <td><Button><Glyphicon glyph="trash" /></Button></td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Grid>
    );
  }
}
