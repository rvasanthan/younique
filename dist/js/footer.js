class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    	<div class="container">
    		<div class="widgets">
    			<div class="row">
    				<div class="col-lg-6 col-md-6 widget widget-about">
    					<h3 class="widget-title">Younique Fashions & Boutique</h3>
    					<p>
    						Younique fashions is a fashion startup which brings culture, style, trends and traditions together. It is a one stop shop of Indian ethnic wear for your whole family.
    					</p>
    				</div><!-- ./widget -->
    				<div class="col-lg-6 col-md-6 widget widget-newsletter">
    					<h3 class="widget-title">Join our Newsletter</h3>
    					<form action="#!" method="POST" class="inputs-border clearfix">
    						<div class="form-group">
    							<input type="email" name="email" placeholder="Your Email" class="form-control" autocomplete="off">
    							<button type="submit" class="btn btn-primary">
    								<i class="bx bx-right-arrow-alt"></i>
    							</button>
    						</div>
    					</form>
    					<ul class="social">
    						<li><a href="#!" target="_blank"><i class="bx bxl-facebook"></i></a></li>
    						<li><a href="#!" target="_blank"><i class="bx bxl-twitter"></i></a></li>
    						<li><a href="#!" target="_blank"><i class="bx bxl-instagram"></i></a></li>
    						<li><a href="#!" target="_blank"><i class="bx bxl-snapchat"></i></a></li>
    					</ul>
    				</div><!-- ./widget -->
    			</div><!-- /.row -->
    		</div><!-- /.widgets -->
    	</div><!-- /.container -->
    	<div class="copyright text-center">
    		<p>
    			© Copyright 2022. All Rights Reserved.
    			<br>
    			Powered by
    			<a href="https://hussam3bd.com" class="effect">
    				Adonis Innovation Labs
    			</a>
    		</p>
    	</div>
    </footer>
    `
  }
}

customElements.define('unq-footer', Footer);
