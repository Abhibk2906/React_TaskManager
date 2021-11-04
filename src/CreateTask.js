import React, { useEffect,useState } from 'react';
import './App.css';
import {Modal,Button,Form,Container,Row,Col,Card} from 'react-bootstrap';
const CreateTask = ({openModal,addTask}) => {
  //Modal ShowUp Constants
  const [show, setShow] = useState(openModal);
  const [dshow,setdshow]=useState(false);

  const handleClose = () => {setShow(false);}
  const dhandleClose = () => setdshow(false);
  const openDModal=()=>{
   setdshow(true);
   setShow(false)
 }

  //Input Values
  const[tname,setTname]=useState('');
  const[tsummary,setTsummary]=useState('');
  const[tdate,setTdate]=useState('');
  const[time,setTime]=useState('');
    

    //For changing Color
const [color,setColor]=useState('primary');

 const changeColor=()=>{
  var arr=["secondary","dark","danger","info","success","warning"];
  var colors=arr[Math.floor(Math.random() * arr.length)];
  setColor(colors)
 }

 const getData=()=>{
addTask({tname,tsummary,tdate,time,color})
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
    <Form.Control type="text" placeholder="Task Title"  onChange={e =>setTname(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Task-Summary</Form.Label>
    <Form.Control as="textarea" placeholder="Task Summary" rows={3} onChange={e =>setTsummary(e.target.value)}/>
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
    <Form.Control type="text" placeholder="Task Title" value={tname} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label><h5>Enter Task-Summary</h5></Form.Label>
    <Form.Control as="textarea" placeholder="Task Summary" rows={3} value={tsummary}/>
  </Form.Group>
   </Form>
            </Col>
            </Row>
            <hr />
            <Row>
            <Col xs={12} md={5}>
            <Form.Group controlId="formFile" className="mb-3">
               <Form.Label><h5>Enter Schedule Date</h5></Form.Label>
              <Form.Control type="date" onChange={e =>setTdate(e.target.value)}/>
             </Form.Group>
            </Col>
            <Col xs={12} md={5}>
            <Form.Group controlId="formFile" className="mb-3">
             <Form.Label><h5>Enter Schedule Time</h5></Form.Label>
            <Form.Control type="time" onChange={e =>setTime(e.target.value)}/>
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


    //     <div className="modal fade"  id="#exampleModal">
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="exampleModalLabel">CREATE NEW TASK</h5>
    //           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //         </div>
    //         <div className="modal-body">
    //           <form>
    //             <div className="mb-3">
    //               <label htmlFor="Task-name" className="col-form-label">Task Name</label>
    //               <input type="text" className="form-control" id="name"/>
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="Task-Summary" className="col-form-label">Task Summary</label>
    //               <textarea className="form-control" id="summary"></textarea>
    //             </div>
    //           </form>
    //         </div>
    //         <div className="modal-footer">
    //           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //           <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Create Task</button>
    //         </div>
    //       </div>
    //     </div>




//     <div class="modal " id="exampleModalToggle2"
// aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
//     <div class="modal-dialog modal-xl modal-dialog-scrollable">
//       <div class="modal-content modal-bottom">
//         <div class="modal-header">
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//             <div class="row">
//                 <div class="col-sm-3">
//                     <button class="btn btn-md" style="background-color:chartreuse" onclick="changeColor()">Change Color</button>
//                     <label class="col-form-label"><h2>TASK SCHEDULER</h2></label>
//                    <div id="setColor" style="width:auto;height:250px;">
//                        <!-- <div class="card-header"></div>  -->
//                        <div class="card-body" style="padding-top:20px;">
//                           <h5 class="card-title"></h5>
//                          <p class="card-text"></p> 
//                        </div> 
//                    </div>
//                  </div>
//                  <div class="col-md-9 col-sm-9">
//                     <div class="row">
//                         <div class="col-8 col-sm-6">
//                             <div class="mb-1">
//                                 <label for="Task-name" class="col-form-label"><h5>Task Name</h5></label>
//                                 <input type="text" class="form-control" id="ttname">
//                               </div>
//                               <div class="mb-1">
//                                 <label for="Task-Summary" class="col-form-label"><h5>Task Summary</h5></label>
//                                 <textarea class="form-control" id="ttsummary"></textarea>
//                               </div>
//                         </div>
//                     </div>
//                     <hr style="height: 0px;
//                     border: none;
//                     border-top: 3px solid black;">
//                     <div class="row">
//                         <div class="col-md-3 col-sm-3">
//                             <div class="mb-3">
//                                 <label for="date" class="form-label"><h5>Select Date To Schedule Task</h5></label>
//                                 <input class="form-control" type="date" id="tdate">
//                               </div>
//                         </div>
//                         <div class="col-md-2 col-sm-3"></div>
//                         <div class="col-md-3 col-sm-3">
//                             <div class="mb-3">
//                                 <label for="time" class="form-label"><h5>Select Time To Schedule Task</h5></label>
//                                 <input class="form-control" type="time" id="ttime">
//                               </div>
//                           </div>
//                           <div class="d-grid gap-2 d-md-flex justify-content-md-end col-md-4 col-sm-3" >
//                             <button class="btn btn-dark" onclick="addTask()"><h3>Schedule</h3></button>
//                           </div>
//                     </div>
//                  </div>
//             </div>
//         </div>
//         <div class="modal-footer">
//           <button class="btn btn-lg btn-danger " data-bs-target="#exampleModal" data-bs-toggle="modal">Back</button>
//         </div>
//       </div>
//     </div>
//   </div>
    // </div>
    );
};

export default CreateTask;