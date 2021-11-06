import React,{useState,useEffect, useContext} from 'react';
import './App.css';
import {Modal,Form} from 'react-bootstrap';
import {Card,Container,Row,Col,Button} from 'react-bootstrap';
import { TaskContext } from './App';
const httpHeaders = {
  'Content-type': 'application/json'
};
const Display = ({deletetask}) => {

const{state,dispatch}=useContext(TaskContext)
const [tasks,setTasks]=useState([]);

//Get tasks
const values=async()=>{
  let dataas=await fetch("http://localhost:3000/tasks")
  let fdata= await dataas.json()
  return fdata;
}

//On Load
   useEffect(()=>{
    const putdata = async() =>{
      setTasks(await values());
    } 
    putdata();
  },[state])


  const [eshow,setEshow]=useState(false);
  const handleClose = () => {setEshow(false);}
  const dhandleClose = () => {setEshow(false);}


  const [tvalues,setTvalues]=useState({
    "id":"",
    "name":"",
    "summary":"",
    "date":"",
    "time":"",
    "color":""
  })
  const valueSubmit=(event)=>{
    setTvalues({...tvalues,[event.target.name]:event.target.value});
   }


   const editTask=async(id)=>{
     setEshow(true);
    let dataas=await fetch(`http://localhost:3000/tasks/${id}`)
    let fdata= await dataas.json()
    setTvalues({
      "id":fdata.id,
      "name":fdata.name,
      "summary":fdata.summary,
      "date":fdata.date,
      "time":fdata.time,
      "color":fdata.color
    })
   
   }


   //EDIT ROUTE
   const addEdit=async()=>{
    let ldata={
          name:tvalues.name,
          summary:tvalues.summary,
          date:tvalues.date,
          time:tvalues.time,
          color:tvalues.color
        }
        let dataas=await fetch(`http://localhost:3000/tasks/${tvalues.id}`,{
          method: 'PUT',
          body: JSON.stringify(ldata),
          headers: httpHeaders
        });
       let Edata= await dataas.json();
        dispatch({type:"PUT",payload:Edata})
        dispatch({type:"MOD",payload:false})
   }


   //DELETE ROUTE
   const deleteTask=async(id)=>{
    await fetch(`http://localhost:3000/tasks/${id}`,{
          method: 'DELETE',
          headers: httpHeaders
        });
        setTasks(await values());
    }

    
    return (
    <Container style={{"paddingTop":"10px"}}>
      <Row xs={1} md={3} className="g-4">
      {tasks.map((task)=> 
    
      <Col key={task.id}>
        <Card
              bg={task.color}
               key={task.id}
               text={task.color === 'light' ? 'dark' : 'white'}
             style={{ width: '18rem' }}
            className="mb-2"
            >
            <Card.Header> <h4>{task.name}</h4>&nbsp;<b>Complete By: </b>{task.date}</Card.Header>
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
    <Form.Control type="text" placeholder="Task Title" value={tvalues.name} name="name" onChange={valueSubmit} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Task-Summary</Form.Label>
    <Form.Control as="textarea" placeholder="Task Summary" rows={3} value={tvalues.summary} name="summary" onChange={valueSubmit}/>
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
               <Form.Label><h5>Enter Schedule Date</h5></Form.Label>
              <Form.Control type="date" value={tvalues.date} name="date" onChange={valueSubmit}/>
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