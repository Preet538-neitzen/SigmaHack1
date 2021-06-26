import React, {useState, useEffect} from 'react'
import { storage, db } from '../Config/Config'
import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase/app'

const CreateBlog = () => {
    let history = useHistory()
    const [user, setUser] = useState("")
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(title)
        console.log(description)
        console.log(image)
        const uploadImage = storage.ref(`blogimages/${image.name}`).put(image)
        uploadImage.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("blogimages")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("Blogs").add({
                            Title: title,
                            Description: description,
                            Posted_By: user,
                            Created_At: new Date(),
                            ImageURL: url,
                            comments: []
                        })
                        .then((docRef) => history.push('/CommunityForum'))
                        .catch((error) => console.log("Error",error))
                    })
            }
        )
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              setUser(user.email)
            } else {
              console.log("Not logged in")
            }
          });
    },[])
    return(
        <div>
            {/* Navbar Start */}
            <header id="topnav" class="defaultscroll sticky">
                <div class="container">
                    {/*Logo container */}
                    <div>
                        <a class="logo" href="index.html">PeriodAid<span class="text-danger">.</span></a>
                    </div>                 
                    <div class="buy-button">
                        <Link to="/CommunityForum">
                            <a href="#" target="_blank" class="btn btn-primary mr-5">Community Forum</a>
                        </Link>
                        <a href="#" target="_blank" class="btn btn-primary">{user!="" ? "Logout" : "Login"}</a>
                    </div>{/*end login button */}
                    {/*End Logo container */}
                </div>{/*end container */}
            </header>{/*end header */}
            {/*Navbar End */}
            {/*Hero Start */}
            <section class="bg-half bg-light">
                <div class="home-center">
                    <div class="home-desc-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-12 text-center">
                                    <div class="page-next-level">
                                        <h4 class="title"> Create Blog </h4>
                                    </div>
                                </div>  {/*end col */}
                            </div>{/*end row */}
                        </div> {/*end container */}
                    </div>
                </div>
            </section>{/*end section */}
            {/*Hero End */}
            {/*Job apply form Start */}
            <section class="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-md-7">
                            <div class="custom-form">
                                <form class="rounded shadow p-4" onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Title :</label>
                                                <input name="title" id="title" type="text" class="form-control pl-3" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title :" />
                                            </div>
                                        </div>{/*end col */}
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Description :</label>
                                                <textarea name="description" id="description" rows="16" class="form-control pl-3" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write your post :"></textarea>
                                            </div>
                                        </div>{/*end col */}                                    
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Upload a Photo :</label>
                                                <input type="file" class="form-control-file" id="fileupload" onChange={(e) => e.target.files[0] ? setImage(e.target.files[0]):null} />
                                            </div>                                                                               
                                        </div>{/*end col */}
                                        
                                    </div>{/*end row */}
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary" value="Post" />
                                        </div>{/*end col */}
                                    </div>{/*end row */}
                                </form>{/*end form */} 
                            </div>{/*end custom-form */}
                        </div>  
                    </div>
                </div>{/*end container */}
            </section>{/*end section */}
            {/*Job apply form End */}
            
            
            {/*Back to top */}
            <a href="#" class="back-to-top rounded text-center" id="back-to-top"> 
                <i class="mdi mdi-chevron-up d-block"> </i> 
            </a>
            {/*Back to top */}
        </div>
    )
}

export default CreateBlog