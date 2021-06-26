import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'

const AdminNavbar = () => {
    const [user, setUser] = useState("")
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              setUser(user.email)
            } else {
              console.log("Not logged in")
            }
          });
    },[])
    return (
        <div>
            {/* Navbar Start */}
            <header id="topnav" class="defaultscroll sticky">
                <div class="container">
                    {/*Logo container */}
                    <div>
                        <Link to="/AdminDashboard">
                            <a class="logo" href="index.html">PeriodAid<span class="text-danger">.</span></a>
                        </Link>
                    </div>                 
                    <div class="buy-button">
                        <Link to="/AdminUserSignIn">
                            <a href="#" target="_blank" class="btn btn-primary mr-5">Home</a>
                        </Link>
                        {/* <a href="#" target="_blank" class="btn btn-primary">{user!="" ? "Logout" : "Login"}</a> */}
                    </div>{/*end login button */}
                    {/*End Logo container */}
                </div>{/*end container */}
            </header>{/*end header */}
            {/*Navbar End */}
        </div>
    )
}

export default AdminNavbar