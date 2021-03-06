import React, {useState,useContext} from 'react';
import {TaskContext} from './App.js'
import './App.css';
import {Modal,Button,Form,Container,Row,Col,Card} from 'react-bootstrap';


const httpHeaders = {
  'Content-type': 'application/json'
};



const CreateTask = () => {

  const{state,dispatch}=useContext(TaskContext)

  //Modal ShowUp Constants
  const [show, setShow] = useState(state.modalOpen);
  const [dshow,setdshow]=useState(false);

  const handleClose = () => {setShow(false);dispatch({type:"MOD",payload:false})}
  const dhandleClose = () => setdshow(false);


  const openDModal=()=>{
   setdshow(true);
   setShow(false)
 }

  //Input Values
  const [tvalues,setTvalues]=useState({
    "name":"",
    "summary":"",
    "date":"",
    "time":"",
    "color":""
  })

  const valueSubmit=(event)=>{
   setTvalues({...tvalues,[event.target.name]:event.target.value});
  }

    
    //For changing Color
const [color,setColor]=useState('primary');

 const changeColor=()=>{
  var arr=["secondary","dark","danger","info","success","warning"];
  var colors=arr[Math.floor(Math.random() * arr.length)];
  setColor(colors)
  setTvalues({...tvalues,color:colors})
 }

 const getData=async()=>{
  let ldata={
    name:tvalues.name,
    summary:tvalues.summary,
    date:tvalues.date,
    time:tvalues.time,
    color:tvalues.color===""?"primary":tvalues.color
  }
  console.log(ldata)
  let dataas=await fetch("http://localhost:3000/tasks",{
    method: 'POST',
    body: JSON.stringify(ldata),
    headers: httpHeaders
  });

  let Tdata = await dataas.json()
  dispatch({type:"POST",payload:Tdata})
  dispatch({type:"MOD",payload:false})
  setdshow(false);
}


    return (    
    <Container>

    {/* Modal popup top   */}

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
       >
      <Modal.Header >
        <Modal.Title>CREATE NEW TASK</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Task-Name </Form.Label>
    <Form.Control type="text" placeholder="Task Title" name="name" onChange={valueSubmit} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Task-Summary</Form.Label>
    <Form.Control as="textarea" placeholder="Task Summary" rows={3} name="summary" onChange={valueSubmit}/>
  </Form.Group>
   </Form>
      </Modal.Body>
      <Modal.Footer>    
        <Button variant="secondary" onClick={()=>{handleClose()}}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{openDModal();}}>Send</Button>
      </Modal.Footer>
    </Modal>



 {/* Modal popup down */}

    {dshow?<><Modal  
    scrollable={true}
      size="lg"
      show={dshow}
      onHide={handleClose}
      backdrop="static"
      dialogClassName="bottom"
      aria-labelledby="example-custom-modal-styling-title"
      keyboard={false} >
      <Modal.Body className="show-grid">
          <Row>
           <Button style={{"backgroundColor":"chartreuse","color":"black"}} size="md" onClick={()=>{changeColor()}}>Change Color</Button>
            <Col xs={12} md={4} style={{"paddingTop":"25px"}}>     
       <Card
         style={{"width":"auto","height":"250px",}}
          bg={color}
         className="mb-2"
          >
        <Card.Body>
        </Card.Body>
        </Card>
            </Col>
            <Col md={7} >
            <Row>
            <Col xs={12} md={8}>
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label><h5>Enter Task-Name</h5>   </Form.Label>
    <Form.Control type="text" placeholder="Task Title" name="name" value={tvalues.name} onChange={valueSubmit}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label><h5>Enter Task-Summary</h5></Form.Label>
    <Form.Control as="textarea" placeholder="Task Summary" rows={3} name="summary" value={tvalues.summary} onChange={valueSubmit}/>
  </Form.Group>
   </Form>
            </Col>
            </Row>
            <hr />
            <Row>
            <Col xs={12} md={5}>
            <Form.Group controlId="formFile" className="mb-3">
               <Form.Label><h5>Enter Schedule Date</h5></Form.Label>
              <Form.Control type="date" name="date" onChange={valueSubmit}/>
             </Form.Group>
            </Col>
            <Col xs={12} md={5}>
            <Form.Group controlId="formFile" className="mb-3">
             <Form.Label><h5>Enter Schedule Time</h5></Form.Label>
            <Form.Control type="time" name="time" onChange={valueSubmit}/>
                </Form.Group>
            </Col>
            <Col xs={6} md={1}>
            <Button size="lg" onClick={()=>{getData()}}>Schedule</Button>
            </Col>
            </Row>
            </Col>
            
          </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={dhandleClose}>Close</Button>
      </Modal.Footer>
    </Modal></>:<></>}
    </Container>

    );
};

export default CreateTask;
