import React, {useState, useEffect} from 'react'
import {db} from '../Config/Config'
import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import UserNavbar from '../NavBar/UserNav'

const CommunityForum = () => {
    let history = useHistory()
    const [user,setUser] = useState("")
    console.log("User",user)
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async() => {
        const response = db.collection('Blogs')
        const data = await response.get()
        console.log(data.docs)
        let tempBlogs = []
        data.docs.forEach(item=>{
            let tempData = item.data()
            tempData.id = item.id
            tempBlogs.push(tempData)
        })
        setBlogs(tempBlogs)
        setUser(firebase.auth().currentUser.email)
    }
    useEffect(() => {
        fetchBlogs()
    },[])
    return (
        <div>

            <UserNavbar/>
            {/* Navbar Start */}
           
            {/*Navbar End */}
            {/*Hero Start */}
            <section class="bg-half bg-light">
                <div class="home-center">
                    <div class="home-desc-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-12 text-center">
                                    <div class="page-next-level">
                                        <h4 class="title"> Community Forum </h4>
                                        <a href="CreateBlog" class="title"> Create a new blog </a>
                                    </div>
                                </div>  {/*end col */}
                            </div>{/*end row */}
                        </div> {/*end container */}
                    </div>
                </div>
            </section>{/*end section */}
            {/*Hero End */}
            {/*Blog STart */}
            <section class="section">
                <div class="container">
                    <div class="row">
                        {blogs.map((blog) => {
                            return(<>
                            <div class="col-lg-4 col-md-6 mb-4 pb-2">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                                <div class="position-relative">
                                    <img src={blog.ImageURL} class="img-fluid rounded-top" alt="" />
                                    <div class="overlay rounded-top bg-dark"></div>
                                </div>
                                <div class="content p-4">
                                    <h4>{blog.Title}</h4>
                                    <div class="post-meta mt-3">
                                        <Link to={`/BlogDetail/${blog.id}`} style={{color: "#f37175"}}>
                                            Read More <i class="mdi mdi-chevron-right"></i>
                                        </Link>
                                        
                                    </div>
                                </div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i>{blog.Posted_By}</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i>{blog.Created_At.toDate().toDateString()}</small>
                                </div>
                            </div>
                        </div>
                        </>)
                        })}
                    </div>{/*end row */}
                </div>{/*end container */}
            </section>{/*end section */}
            {/*Blog End */}
            
            
            {/*Back to top */}
            <a href="#" class="back-to-top rounded text-center" id="back-to-top"> 
                <i class="mdi mdi-chevron-up d-block"> </i> 
            </a>
            {/*Back to top */}
        </div>
    )
}
export default CommunityForum