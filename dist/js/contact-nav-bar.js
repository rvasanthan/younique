class ContactNavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="nav-container fixed-top nav-sticky">
    	<nav class="sub-navbar bg-white d-flex">
    		<div class="d-flex align-items-center mr-auto">
    		</div>

    		<ul class="nav list-inline ml-auto">
    			<li>
    				<a href="#!" class="px-2">+1 508 333 8661</a>
    			</li>
    			<li>
    				<a href="wishlist.html" class="px-2">unqfsn@gmail.com</a>
    			</li>
    		</ul>
    	</nav><!-- /.sub-navbar -->
    </div> `
  }
}

customElements.define('contact-nav-bar', ContactNavBar);
