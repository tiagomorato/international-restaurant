class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header>
                <a href="#" class="logo"><img src="pics/logo.png"> </a>

                <nav class="navbar">
                    <a href="index.html#home" class="actives">home</a>
                    <a href="#about">about</a>
                    <a href="index.html#menu">menu</a>
                    <a href="index.html#team">team</a>
                    <a href="index.html#reservation">reservation</a>
                </nav>

                <div class="icons">
                    <i class="fas fa-bars" id="menue"></i>


                    <input type="checkbox"   id="cart">
                    <label for="cart"  class="label-cart">
                        <div id="cartAmount" class="cartAmount">0</div>
                        <a href="cart.html">
                            <i class="fas fa-shopping-cart"></i>
                            <!--                    <div id="cartAmount" class="cartAmount">0</div>-->
                        </a>
                    </label>
                    </a>

                </div>

        `
  }
}

//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <footer class="footer" id="about">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>Restaurant</h4>
                        <ul>
                            <li><a href="#">about us</a> </li>
                            <li><a href="#">our services</a> </li>
                            <li><a href="#">privacy policy</a> </li>
                            <li><a href="#">affiliate program</a> </li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a> </li>
                            <li><a href="#">shipping</a> </li>
                            <li><a href="#"></a> </li>
                            <li><a href="#">order status</a> </li>
                            <li><a href="#">payment options</a> </li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="cart.html">orders</a> </li>
                            <li><a href="brazilianFood.html">brazilian</a> </li>
                            <li><a href="bulgarianFood.html">bulgarian</a> </li>
                            <li><a href="kurdishFood.html">turkish</a> </li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4 class="follow">follow us</h4>
                        <div class="social-links">
                            <a href="#">
                                    <span class="box">
                                        <span class="face front">
                                            <i class="fab fa-facebook-f"></i>
                                        </span>
                                        <span class="face bottom">
                                            <i class="fab fa-facebook-f"></i>
                                        </span>
                                    </span>
                            </a>
                            <a href="#">
                                    <span class="box">
                                        <span class="face front">
                                            <i class="fab fa-twitter"></i>
                                        </span>
                                        <span class="face bottom">
                                            <i class="fab fa-twitter"></i>
                                        </span>
                                    </span>
                            </a>
                            <a href="#">
                                    <span class="box">
                                        <span class="face front">
                                            <i class="fab fa-instagram"></i>
                                        </span>
                                        <span class="face bottom">
                                            <i class="fab fa-instagram"></i>
                                        </span>
                                    </span>
                            </a>
                            <a href="#">
                                    <span class="box">
                                        <span class="face front">
                                            <i class="fab fa-youtube"></i>
                                        </span>
                                        <span class="face bottom">
                                            <i class="fab fa-youtube"></i>
                                        </span>
                                    </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>

      `

  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);