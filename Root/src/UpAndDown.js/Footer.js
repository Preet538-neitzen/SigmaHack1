import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
            <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                        <a class="logo-footer" href="#">CFG!!<span class="text-primary">.</span></a>
                        <p class="mt-4">Start working with Taxvisor that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <ul class="list-unstyled social-icon social mb-0 mt-4">
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-twitter" title="Twitter"></i></a></li>
                        </ul>
                    </div>
                    
                    <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 class="text-light footer-head">Company</h4>
                        <ul class="list-unstyled footer-list mt-4">
                            <li><a href="page-aboutus.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> About us</a></li>
                            <li><a href="page-services.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Services</a></li>
                            <li><a href="page-team.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Team</a></li>
                            <li><a href="page-pricing.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Pricing</a></li>
                            <li><a href="page-work.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Project</a></li>
                            <li><a href="page-jobs.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Careers</a></li>
                            <li><a href="page-blog.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Blog</a></li>
                            <li><a href="page-cover-login.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Login</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 class="text-light footer-head">Usefull Links</h4>
                        <ul class="list-unstyled footer-list mt-4">
                            <li><a href="page-terms.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Terms of Services</a></li>
                            <li><a href="page-privacy.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Privacy Policy</a></li>
                            <li><a href="documentation.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Documentation</a></li>
                            <li><a href="changelog.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Changelog</a></li>
                            <li><a href="components.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Components</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 class="text-light footer-head">Newsletter</h4>
                        <p class="mt-4">Sign up and receive the latest tips via email.</p>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="foot-subscribe form-group position-relative">
                                        <label>Write your email <span class="text-danger">*</span></label>
                                        <i class="mdi mdi-email ml-3 icons"></i>
                                        <input type="email" name="email" id="emailsubscribe" class="form-control pl-5 rounded" placeholder="Your email : " required=""/>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <input type="submit" id="submitsubscribe" name="send" class="btn btn-primary w-100" value="Subscribe"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
        <hr/>
        <footer class="footer footer-bar">
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="text-sm-left">
                            <p class="mb-0">© 2019-20 Landrick. Design with <i class="mdi mdi-heart text-danger"></i> by <a href="http://www.shreethemes.in/" target="_blank" class="text-success">Shreethemes</a>.</p>
                        </div>
                    </div>

                    <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul class="list-unstyled payment-cards text-sm-right mb-0">
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="images\payments\american-ex.png" title="American Express" alt=""/></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="images\payments\discover.png" title="Discover" alt=""/></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="images\payments\master-card.png" title="Master Card" alt=""/></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="images\payments\paypal.png" title="Paypal" alt=""/></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="images\payments\visa.png" title="Visa" alt=""/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
            </div>
        )
    }
}

export default Footer
