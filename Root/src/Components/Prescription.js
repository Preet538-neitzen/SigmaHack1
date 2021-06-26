import firebase from 'firebase';
import fire from '../Config/Config'
import React, { useState } from 'react'
import "./Prescription.css";

export default function Prescription({ event, popup, useruid }) {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [meetcode, setMeetcode] = useState();
  const [message, setMessage] = useState();
  const [loader, setLoader] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    event();
    setLoader(true)
    fire.firestore().collection('ChatApplication').doc(useruid).update({
      doctoruid: useruid
    })
    fire.firestore().collection('Prescription').doc(useruid).set({
      Doctorname: name,
      Date: date,
      Time: time,
      meetcode: meetcode,
      message: message,
      useruid: useruid
    }).then(() => {
      alert('form submitted')
      setLoader(false)
    }).catch((error) => {
      alert(error.message);
      setLoader(false)
    })
    setName("");
    setDate("");
    setTime("");
    setMeetcode("");
    setMessage("");

  };

  return (

    <div className={popup ? "form-container" : "form-container-hide"}>
      <form id="contact">

        <h4> Doctor's Information</h4>
        <fieldset>
          <input placeholder="Doctor's name to assigned" type="text" tabindex="1" required autofocus value={name} onChange={(e) => setName(e.target.value)}></input>
        </fieldset>
        <fieldset>
          <input placeholder="Date for meeting" type="email" tabindex="2" required value={date} onChange={(e) => setDate(e.target.value)}></input>
        </fieldset>
        <fieldset>
          <input placeholder="Fissbel time for meet" type="tel" tabindex="3" required value={time} onChange={(e) => setTime(e.target.value)}></input>
        </fieldset>
        <fieldset>
          <input placeholder="Meet code" type="tel" tabindex="3" required value={meetcode} onChange={(e) => setMeetcode(e.target.value)}></input>
        </fieldset>
        <fieldset>
          <textarea placeholder="Prescription if needed" tabindex="5" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" onClick={handelSubmit} id="contact-submit" data-submit="...Sending" style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}>Submit</button>
        </fieldset>
      </form>
    </div>

  )
}