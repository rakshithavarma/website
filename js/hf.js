class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ul class="navbar-nav justify-content-center">
	      		<li class="nav-item active">
	        		<a class="nav-link" href="index.html">HOME<span class="sr-only">(current)</span></a>
	      		</li>
	      		<li class="nav-item">
	        		<a class="nav-link" href="team.html">TEAM</a>
	      		</li>
	      		<li class="nav-item dropdown">
	        		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownChaptersLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          		CHAPTERS
	        		</a>
	        		<div class="dropdown-menu justify-content-start" aria-labelledby="navbarDropdownChaptersLink">
	          			<a class="dropdown-item" href="ieee_wie.html">Women In Engineering</a>
						<a class="dropdown-item" href="ieee_pes.html">Power and Engineering Society</a>
						<a class="dropdown-item" href="ieee_cs.html">Computer Society</a>
	        		</div>
	      		</li>
	      		<li class="nav-item dropdown">
	        		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMoreLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          		EVENTS
	        		</a>
	        		<div class="dropdown-menu" aria-labelledby="navbarDropdownMoreLink">
	        			<a class="dropdown-item" href="events/events_page_2021.html">2021</a>
	          			<a class="dropdown-item" href="events/events_page_2020.html">2020</a>
	          			<a class="dropdown-item" href="events/events_page_2019.html">2019</a>
	          			<a class="dropdown-item" href="events/events_page_2018.html">2018</a>
	          			<a class="dropdown-item" href="events/events_page_2017.html">2017</a>
	        		</div>
	      		</li>
	      		<li class="nav-item dropdown">
	        		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownIEEELink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          		IEEE
	        		</a>
	        		<div class="dropdown-menu justify-content-start" aria-labelledby="navbarDropdownIEEELink">
	          			<a class="dropdown-item" href="http://www.ieee.org/?WT.mc_id=mn_ieee">IEEE.org</a>
	          			<a class="dropdown-item" href="http://ieeexplore.ieee.org/">IEEE Xplore</a>
	          			<a class="dropdown-item" href="http://standards.ieee.org/">IEEE Standards</a>
	          			<a class="dropdown-item" href="http://spectrum.ieee.org/">IEEE Spectrum</a>
	          			<a class="dropdown-item" href="http://www.ieee.org/sitemap.html?WT.mc_id=mn_smap">More Sites</a>
	        		</div>
	      		</li>
	      		<li class="nav-item dropdown">
	        		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMoreLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          		MISC.
	        		</a>
	        		<div class="dropdown-menu" aria-labelledby="navbarDropdownMoreLink">
	          			<a class="dropdown-item" href="http://www.gvpce.ac.in/">GVPCE(A) HOME</a>
	          			<a class="dropdown-item" href="notices.html">Notices</a>
	          			<a class="dropdown-item" href="benefits.html">Benefits of Membership</a>
	          			<a class="dropdown-item" href="membership_form.html">Membership Form</a>
	        		</div>
	      		</li>
	      		<li class="nav-item">
	        		<a class="nav-link" href="contact.html">CONTACT US</a>
	      		</li>
	    	</ul>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

		<div class="footer-info">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-4">
						<div class="contact-mode address">
							<h4 class="text-left">Address</h4>
							<hr class="underline" align="left" style="width:6em">
						</div>
						<address>
						Gayatri Vidya Parishad College of Engineering (Autonomous)<br>
						Madhurawada<br>
						Visakhapatnam - 530 048<br>
						Andhra Pradesh<br>
						India
						</address>
					</div>
					<div class="col-xs-12 col-md-4">
						<div class="contact-mode contact">
							<h4 class="text-left">Contact Info</h4>
							<hr class="underline" align="left" style="width:9em">
						</div>
						<div>
							<p>E-Mail: <span><a href="mailto:ieeesb@gvpce.ac.in? subject = ">ieeesb@gvpce.ac.in</a></span></p>
							<p>Mobile: <a href="tel:+919441969659">+91 9441969659</a> (Branch Counsellor)</p>
							<p>Mobile: <a href="tel:+919182985123">+91 9182985123</a> (Chair)</p>
						</div>
					</div>
					<div class="col-xs-12 col-md-4">
						<div class="contact-mode social-media">
							<h4 class="text-left">Follow Us</h4>
							<hr class="underline" align="left" style="width:7em">
						</div>
						<div class="contact-mode social-media-handles">
							<a href="https://www.facebook.com/under.vizag.bay.sub.section/"><i class="fa fa-facebook-official fa-2x"></i></a>
							<a href="https://www.instagram.com/ieee_sb_gvpce_a/"><i class="fa fa-instagram fa-2x"></i></a>
							<a href="https://www.linkedin.com/in/ieee-sb-gvpce-a-b362791a1/"><i class="fa fa-linkedin-square fa-2x"></i></a>
							<a href="https://twitter.com/GvpceSb"><i class="fa fa-twitter-square fa-2x"></i></a>
						</div>
					</div>
				</div>
				<div class="row">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.3861539630434!2d83.34015411494428!3d17.820523887820432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bedc7efb603%3A0x87c06caab54e902a!2sGVP%20College%20of%20Engineering%20(Autonomous)!5e0!3m2!1sen!2sin!4v1598167973876!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
				</div>
			</div>
		</div>
        `
    }
}

customElements.define('my-footer', MyFooter)