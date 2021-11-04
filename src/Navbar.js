import React from 'react';
import './App.css';
const Navbar = ({createTask}) => {
    return (
  
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light" >
            <div className="container-fluid">
              <a className="navbar-brand" >TaskManager</a>
              <ul className="navbar-nav  me-auto mb-2 mb-lg-0">  
                <li className="nav-item ">
                    <button className="nav-link btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" >CreateTask</button>
               </li>   
            </ul>
              <ul className="navbar-nav d-flex">  
                <li className="nav-item ">
                    <button className="nav-link btn btn-light" href="#">SignIn</button>
               </li>   
            </ul>
            </div>
          </nav>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">CREATE NEW TASK</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="Task-name" className="col-form-label">Task Name</label>
              <input type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="Task-Summary" className="col-form-label">Task Summary</label>
              <textarea className="form-control" id="summary"></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2" >Create Task</button>
        </div>
      </div>
    </div>
</div>


<div className="modal " id="exampleModalToggle2"
aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
    <div className="modal-dialog modal-xl modal-dialog-scrollable">
      <div className="modal-content modal-bottom">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <div className="row">
                <div className="col-sm-3">
                    <button className="btn btn-md" style={{"backgroundColor":"chartreuse"}} >Change Color</button>
                    <label className="col-form-label"><h2>TASK SCHEDULER</h2></label>
                   <div id="setColor" style={{"width":"auto","height":"250px"}}>
                       <div className="card-body" style={{"paddingTop":"20px"}}>
                          <h5 className="card-title"></h5>
                         <p className="card-text"></p> 
                       </div> 
                   </div>
                 </div>
                 <div className="col-md-9 col-sm-9">
                    <div className="row">
                        <div className="col-8 col-sm-6">
                            <div className="mb-1">
                                <label htmlFor="Task-name" className="col-form-label"><h5>Task Name</h5></label>
                                <input type="text" className="form-control" id="ttname"/>
                              </div>
                              <div className="mb-1">
                                <label htmlFor="Task-Summary" className="col-form-label"><h5>Task Summary</h5></label>
                                <textarea className="form-control" id="ttsummary"></textarea>
                              </div>
                        </div>
                    </div>
                    <hr style={{"height": "0px",
                    "border": "none",
                    "borderTop": "3px solid black"}}/>
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label"><h5>Select Date To Schedule Task</h5></label>
                                <input className="form-control" type="date" id="tdate"/>
                              </div>
                        </div>
                        <div className="col-md-2 col-sm-3"></div>
                        <div className="col-md-3 col-sm-3">
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label"><h5>Select Time To Schedule Task</h5></label>
                                <input className="form-control" type="time" id="ttime"/>
                              </div>
                          </div>
                          <div className="d-grid gap-2 d-md-flex justify-content-md-end col-md-4 col-sm-3" >
                            <button className="btn btn-dark" ><h3>Schedule</h3></button>
                          </div>
                    </div>
                 </div>
            </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-lg btn-danger " data-bs-target="#exampleModal" data-bs-toggle="modal">Back</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    );
};

export default Navbar;