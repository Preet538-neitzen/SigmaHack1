import { useState, useEffect } from 'react';
import firebase from 'firebase/app'
import fire from "../Config/Config";
import React from 'react';
import UserNav from '../NavBar/UserNav';

export default function Doctor() {
  const [data, setData] = useState('');
  const [userId, setUserId] = useState();

  const fetch = async () => {
    console.log("test");
    try{
    fire.firestore().collection('Prescription').doc("7021418124").get()
      .then(snapshot => { setData(snapshot.data()); console.log(snapshot.data()) });
    }catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // await firebase.auth().onAuthStateChanged(function (user) {
      let user = firebase.auth().currentUser;
      if (user) {
        console.log(user);
        setUserId(user.uid);
        
      } else {
        console.log("Not logged in")
        fetch();
      }
    // });
  }, [])
//   useEffect(() => {
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           setUserId(user.uid);
//           console.log("logged in")
//           fetch();
//         } else {
//           console.log("Not logged in")
//         }
//       });
// },[])

  return (
    <>
    <UserNav/>
      <br />
      <div className="container col-md-8" style={{marginTop:'150px'}}>
            <table className="table table-striped">
              <thead className="table__thead">
                <tr className="table__head">
                  <th className="table__th">Doctor Name</th>
                  <th className="table__th">Date</th>
                  <th className="table__th">Time</th>
                  <th className="table__th">meetcode</th>
                  <th className="table__th">message</th>
                </tr>
              </thead>
              <tbody className="table__tbody">
                <tr className="table__tr" >
                  <td className="table_td table_mobile-title">
                    <span>{data.Doctorname}</span>
                  </td>
                  <td className="table__td">
                    {/* <span className="table__mobile-caption">Date</span> */}
                    <span className="table__value">{data.Date}</span>
                  </td>
                  <td className="table__td">
                    {/* <span className="table__mobile-caption">Time</span> */}
                    <span className="table__value">{data.Time}</span>
                  </td>
                  <td className="table__td">
                    {/* <span className="table__mobile-caption">meetcode</span> */}
                    <span className="table__value">{data.meetcode}</span>
                  </td>
                  <td className="table__td">
                    {/* <span className="table__mobile-caption">message</span> */}
                    <span className="table__value">{data.message}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    </>
  )
}