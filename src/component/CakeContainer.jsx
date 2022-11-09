import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { connect } from 'react-redux'
import { add } from '../redux'
import { deletor } from '../redux/users/userDelete'
import { updatUser } from '../redux/users/userUpdate'

const CakeContainer = (props) => {
  const formSelector = useRef()
  let sign = -1

  const dataLoad = (e) => {
    e.preventDefault()
    let obj = { Contact: e.target.contact.value, FirstName: e.target.first.value, LastName: e.target.last.value }

    if (obj.Contact && obj.FirstName && obj.LastName) {
      if (sign !== -1){
        props.updatUser({ newdata: { ...obj }, index: sign })
        alert("Data Updated Successfully to redux.")
      }
      else{
        props.add({ ...obj })
        alert("Data Added Successfully to redux.")}
    }
    else
      alert("Fill all fields...")
    formSelector.current.reset()
  }

  const updater = (i) => {
    formSelector.current.first.value = props.data[i].FirstName
    formSelector.current.last.value = props.data[i].LastName
    formSelector.current.contact.value = props.data[i].Contact
    sign = i

  }
  return (
    <>
      <form ref={formSelector} className="col w20 brd lbg p1 m1" id="form2" style={{ minWidth: "300px" }} onSubmit={(e) => dataLoad(e)}>
        <label htmlFor="Password" className='m2'>First Name: </label>
        <input placeholder="Enter text..." type="text" className='line brd m2 p3' name="first" />
        <label htmlFor="Password" className='m2'>Last Name: </label>
        <input placeholder="Enter text..." type="text" className='line brd m2 p3' name="last" />
        <label htmlFor="Username" className='m2'>Contact No.: </label>
        <input placeholder="Enter text..." type="number" className='line brd m2 p3' name="contact" />
        <button className="btn brd dbg p3 m2" type='submit'>Submit</button>
      </form>
      <div className="full m1">
        <table className="full">
          <thead>
            <tr>
              {
                ["SNo.", "FIRST NAME", "LAST NAME", "CONTACT", "EDIT", "DELETE"].map((key) => {
                  return <th><div className="row flexAIC flexSB"><p>{key}</p></div></th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              props.data.map((x, i) => {
                return <tr>
                  <td>{i}</td>
                  <td>{x.FirstName}</td>
                  <td >{x.LastName}</td>
                  <td style={{ color: "rgb(239 0 125)" }}>{x.Contact}</td>
                  <td className='p1 dbg btn' onClick={() => updater(i)} style={{ color: "white", textAlign: "center" }}>EDIT</td>
                  <td className='p1 dbg btn' onClick={() => props.deletor(i)} style={{ color: "white", textAlign: "center", background: "rgb(213 0 0)" }}>DELETE</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>

    </>
  )
}
const mapStateToProps = state => {
  return {
    data: state.data
  }
}
// Step-2
const mapDispatchToProps = dispatch => {
  return {
    add: (n) => dispatch(add(n)),
    deletor: (n) => dispatch(deletor(n)),
    updatUser: (n) => dispatch(updatUser(n))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)