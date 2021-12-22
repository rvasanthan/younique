class NavMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav style="height:30px" class="navbar navbar-expand-lg navbar-light bg-white">
  		<div class="container">
  			<a class="navbar-brand" href="index.html">
  				<img src="https://res.cloudinary.com/abhinithame/image/upload/v1640015044/younique/logo_resized.png" alt="Sham Theme">
  			</a>

  			<ul class="nav navbar-icons ml-auto order-lg-2">
  				<li class="nav-item mr-3 shopping-cart">
        </ul>
    <button
        class="navbar-toggler ml-0 ml-sm-3 order-lg-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbar" class="collapse navbar-collapse mr-auto">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown active">
          <a class="nav-link dropdown-toggle" href="index.html" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          >
            Home
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item active"><a class="nav-link" href="#">Default</a></li>
            <li class="dropdown-item"><a class="nav-link" href="index-2.html">Default Slider</a></li>
            <li class="dropdown-item"><a class="nav-link" href="index-3.html">Overlay Products</a></li>
            <li class="dropdown-item"><a class="nav-link" href="index-4.html#instagram">Instagram section</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="nav-link" href="products.html">Full Width Shop</a></li>
            <li><a class="nav-link" href="products-with-filter.html">Shop With Filter</a></li>
            <li><a class="nav-link" href="products-sidebar-left.html">Sidebar Left</a></li>
            <li><a class="nav-link" href="products-sidebar-right.html">Sidebar Right</a></li>
            <li><a class="nav-link" href="product.html">Simple Product</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            eCommerce Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="nav-link" href="wishlist.html">Wishlist</a></li>
            <li><a class="nav-link" href="cart.html">Cart</a></li>
            <li><a class="nav-link" href="checkout.html">Checkout</a></li>
            <li><a class="nav-link" href="order-received.html">Order Received</a></li>
            <li><a class="nav-link" href="order-tracking.html">Order Tracking</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="nav-link" href="page.html">Page Default</a></li>
            <li><a class="nav-link" href="login-register.html">Login / Register</a></li>
            <li><a class="nav-link" href="404.html">Not Found (404)</a></li>
            <li><a class="nav-link" href="faqs.html">FAQ'S</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>
    </div>
    </div>
    </nav>
        `
  }
}

customElements.define('main-menu', NavMenu);
