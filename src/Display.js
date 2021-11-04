import React,{useState} from 'react';
import './App.css';
import {Modal,Form} from 'react-bootstrap';
import {Card,Container,Row,Col,Button} from 'react-bootstrap';
const Display = ({dispTasks,addEditValue,deletetask}) => {
  const [eshow,setEshow]=useState(false);
  const[tname,setTname]=useState('');
  const[tsummary,setTsummary]=useState('');
  const[tdate,setTdate]=useState('');
  const[time,setTime]=useState('');
  const [color,setColor]=useState('');
  const [id,setId]=useState('')
  const handleClose = () => {setEshow(false);}
  const dhandleClose = () => {setEshow(false);}

   const editTask=async(id)=>{
     setEshow(true);
    let dataas=await fetch(`http://localhost:3000/tasks/${id}`)
    let fdata= await dataas.json()
    setTname(fdata.name)
    setTsummary(fdata.summary)
    setTdate(fdata.date)
    setTime(fdata.time)
    setColor(fdata.color)
    setId(fdata.id)
   }



   const deleteTask=(id)=>{
       deletetask({id})
    }

   const addEdit=()=>{
     addEditValue({id,tname,tsummary,tdate,time,color})
   }


    return (
    <Container style={{"paddingTop":"10px"}}>
<Row xs={1} md={3} className="g-4">
      {dispTasks.map((task)=> 
      <Col>
        <Card
              bg={task.color}
               key={task.id}
               text={task.color === 'light' ? 'dark' : 'white'}
             style={{ width: '18rem' }}
            className="mb-2"
            >
            <Card.Header> <h4>{task.name}</h4>&nbsp;<b>Complete By:</b>{task.date}</Card.Header>
        <Card.Body>
               <Card.Text>
                {task.summary}
                </Card.Text>
                <hr />
          <Row>
       
              <Col xs={4} md={7}> 
              <Button variant="light" onClick={()=>{editTask(task.id)}} >EDIT</Button>{''}
              </Col>
              <Col xs={4} md={4}>
              <Button variant="light" onClick={()=>{deleteTask(task.id)}}>DELETE</Button>{''}
            </Col>
          </Row>
        </Card.Body>
        </Card>
        </Col>
        )}
</Row>


<Modal
      show={eshow}
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
    <Form.Control type="text" placeholder="Task Title" value={tname} onChange={e =>setTname(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Task-Summary</Form.Label>
    <Form.Control as="textarea" placeholder="Task Summary" rows={3} value={tsummary} onChange={e =>setTsummary(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
               <Form.Label><h5>Enter Schedule Date</h5></Form.Label>
              <Form.Control type="date" value={tdate} onChange={e =>setTdate(e.target.value)}/>
    </Form.Group>
   </Form>
      </Modal.Body>
      <Modal.Footer>    
        <Button variant="secondary" onClick={()=>{handleClose()}}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{addEdit();dhandleClose();}}>Send</Button>
      </Modal.Footer>
    </Modal>

    </Container>
    );
};

export default Display;