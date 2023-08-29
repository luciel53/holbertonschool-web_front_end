# Accessibility

    Master
    By: David Dias, Senior Software Engineer at HomeX
    Weight: 1
    Your score will be updated as you progress.

Concepts

For this project, we expect you to look at this concept:

    A Crash Course on Accessibility

Resources

Read or watch:

    Accessibility is not a feature. — Ethan Marcotte
    How to Meet WCAG (Quickref Reference
    Web Accessibility Guidebook for Developers
    Testing with assistive technologies - Service Manual - GOV.UK
    A11Y Style Guide
    Building Pylon-Free Web Pages: An Intro to Web Accessibility
    I Threw Away my Mouse - 24 Accessibility
    I Used a Switch Control for a Day - 24 Accessibility
    The Myths of Color Contrast Accessibility
    IAAP Certification
    Accessibility Blog | Deque Systems
    Tink - Léonie Watson – On technology, food & life in the digital age
    Articles » Simply Accessible
    Accessibility Weekly
    European label (Web Accessibility): Euracert - Home page
    Section508.gov | GSA Government-wide IT Accessibility Program

Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    ARIA’s main purpose
    WCAG conformance levels (A, AA and AAA)
    The importance of Web Accessibility
    Tools to use for Web Accessibility

Requirements

    Allowed editors: vi, vim, emacs
    A README.md at the root of the project directory is mandatory
    HTML and CSS have been rendered on Chrome 78 or more.

Quiz questions
Great! You've completed the quiz successfully! Keep going! (Show quiz)
Tasks
0. make the "works" card focus visible
mandatory
Score: 100.00% (Checks completed: 100.00%)

Start with this 00-styles.css file:
Click to expand/hide file contents

You can use it with this 00-index.html file:

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>Homepage - Techium</title>
    <meta name="description" content="Description of the page less than 150 characters">
    <link rel="icon" type="image/x-icon" href="../images/favicon.ico">
    <link rel="icon" type="image/png" href="../images/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="00-styles.css">
  </head>
  <body>
    <!– Header –>
    <header class="header" data-section-theme="dark">
      <div class="container">
        <div class="header-container">
          <div class="header-logo">
            <a href="/">
              <img src="../images/logo-white.png" alt="Techium logo" width="160" height="40">
            </a>
          </div>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          <nav class="navbar-menu">
            <ul class="nav">
              <li class="nav-item">
                <a href="/" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link">Services</a>
              </li>
              <li class="nav-item">
                <a href="#works" class="nav-link">Works</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="#latest_news" class="nav-link">Latest news</a>
              </li>
              <li class="nav-item">
                <a href="#testimonials" class="nav-link">Testimonials</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
              </li>
              <li class="nav-item">
                <form action="#" method="post" class="form-search">
                  <input type="search" name="q" id="search-input" placeholder="Search..." aria-label="Search through site content">
                  <button class="search-button">
                    <svg viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon">
                      <title>
                        Search icon
                      </title>
                      <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"/>
                    </svg>
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <!– Main –>
    <main>
      <h1 class="visually-hidden">Homepage</h1>
      <!– Hero section –>
      <section class="section-hero hero-homepage" data-section-theme="dark">
        <div class="container">
          <div class="section-body">
            <section class="section-inner">
              <h2 class="section-title">We help you building your brand!</h2>
              <a href="#" class="button">Get Started</a>
            </section>
          </div>
        </div>
      </section>
      <!– Services section –>
      <section id="services" class="section section-services">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">Services</h2>
            <p class="section-tagline">We work with you</p>
          </header>
          <div class="section-body">
            <ul class="row">
              <li class="col-1-3">
                <div class="card-services">
                  <h3 class="card-title"><a href="#">Design & Concept</a></h3>
                </div>
              </li>
              <li class="col-1-3">
                <div class="card-services">
                  <h3 class="card-title"><a href="#">Digital Strategy</a></h3>
                </div>
              </li>
              <li class="col-1-3">
                <div class="card-services">
                  <h3 class="card-title"><a href="#">Content Strategy</a></h3>
                </div>
              </li>
              <li class="col-1-3">
                <div class="card-services">
                  <h3 class="card-title"><a href="#">UX Design</a></h3>
                </div>
              </li>
              <li class="col-1-3">
                <div class="card-services">
                  <h3 class="card-title"><a href="#">Web Development</a></h3>
                </div>
              </li>
              <li class="col-1-3">
                <div class="card-services">
                  <h3 class="card-title"><a href="#">Social Media</a></h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!– Works section –>
      <section id="works" class="section section-works" data-section-theme="dark">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">Works</h2>
            <p class="section-tagline">Take a look in our portfolio</p>
          </header>
          <div class="section-body">
            <ul class="row">
              <li class="col-1-3">
                <article class="card-work">
                  <div class="card-outer">
                    <div class="card-image">
                      <img src="../images/pic-work-01.jpg" alt="">
                    </div>
                    <div class="card-inner">
                      <h3 class="card-title"><a href="#">Interior Design</a></h3>
                    </div>
                  </div>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-work">
                  <div class="card-outer">
                    <div class="card-image">
                      <img src="../images/pic-work-02.jpg" alt="">
                    </div>
                    <div class="card-inner">
                      <h3 class="card-title"><a href="#">Web Development</a></h3>
                    </div>
                  </div>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-work">
                  <div class="card-outer">
                    <div class="card-image">
                      <img src="../images/pic-work-03.jpg" alt="">
                    </div>
                    <div class="card-inner">
                      <h3 class="card-title"><a href="#">Personal Development</a></h3>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!– About Us section –>
      <section id="about" class="section section-about-us">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">About us</h2>
            <p class="section-tagline">Everything about us</p>
          </header>
          <div class="section-body">
            <div class="row">
              <div class="col-1-2">
                <img
                  sizes="(max-width: 3000px) 40vw, 1200px"
                  srcset="
                  ../images/responsive/about-us_icoxoo_c_scale,w_380.jpg 380w,
                  ../images/responsive/about-us_icoxoo_c_scale,w_853.jpg 853w,
                  ../images/responsive/about-us_icoxoo_c_scale,w_1200.jpg 1200w"
                  src="../images/responsive/about-us_icoxoo_c_scale,w_1200.jpg"
                  alt="">
              </div>
              <div class="col-1-2">
                <h3>Who are we</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
                <h3>Our culture</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
                <h3>How we work</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
              </div>
            </div>
          </div>
          <div class="section-footer">
            <a href="about-us.html" class="button">Learn more about us</a>
          </div>
        </div>
      </section>
      <!– Latest news section –>
      <section id="latest_news" class="section section-latest-news">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">Latest News</h2>
          </header>
          <div class="section-body">
            <ul class="row">
              <li class="col-1-3">
                <article class="card-blog">
                  <div>
                    <img
                    sizes="(max-width: 2250px) 40vw, 900px"
                    srcset="
                      ../images/responsive/pic-article-01_l2waac_c_scale,w_380.jpg 380w,
                      ../images/responsive/pic-article-01_l2waac_c_scale,w_673.jpg 673w,
                      ../images/responsive/pic-article-01_l2waac_c_scale,w_900.jpg 900w"
                      src="../images/responsive/pic-article-01_l2waac_c_scale,w_900.jpg"
                    alt="">
                  </div>
                  <p class="card-category">Career</p>
                  <h3><a href="#">Hoc loco tenere se Triarius non potuit.</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
                  <small>By Kelly D.</small>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-blog">
                  <div>
                    <img
                    sizes="(max-width: 2250px) 40vw, 900px"
                    srcset="
                      ../images/responsive/pic-article-02_xe0wgi_c_scale,w_380.jpg 380w,
                      ../images/responsive/pic-article-02_xe0wgi_c_scale,w_682.jpg 682w,
                      ../images/responsive/pic-article-02_xe0wgi_c_scale,w_900.jpg 900w"
                      src="../images/responsive/pic-article-02_xe0wgi_c_scale,w_900.jpg"
                    alt="">
                  </div>
                  <p class="card-category">Digital Life</p>
                  <h3><a href="#">Ut alios omittam, hunc appello, quem ille unum secutus est.</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?</p>
                  <small>By William A.</small>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-blog">
                  <div>
                    <img
                    sizes="(max-width: 2250px) 40vw, 900px"
                    srcset="
                      ../images/responsive/pic-article-03_hzlhrf_c_scale,w_380.jpg 380w,
                      ../images/responsive/pic-article-03_hzlhrf_c_scale,w_679.jpg 679w,
                      ../images/responsive/pic-article-03_hzlhrf_c_scale,w_900.jpg 900w"
                    src="../images/responsive/pic-article-03_hzlhrf_c_scale,w_900.jpg"
                    alt="">
                  </div>
                  <p class="card-category">Social</p>
                  <h3><a href="#">Bestiarum vero nullum iudicium puto.</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.</p>
                  <small>By Frances J.</small>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!– Testimonials section –>
      <section id="testimonial" class="section section-testimonial">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">Testimonials</h2>
            <p class="section-tagline">We are more than a digital company</p>
          </header>
          <div class="section-body">
            <ul class="row">
              <li class="col-1-3">
                <article class="card-testimonial">
                  <img src="../images/pic-person-01.jpg" alt="Yuri Y. avatar" width="100" height="100" class="card-avatar">
                  <blockquote class="card-quote">
                    <p>I am completely blown away. Thanks to Techium, we’ve just launched our 5th website!
                      <cite>Yuri Y.</cite>
                    </p>
                  </blockquote>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-testimonial">
                  <img src="../images/pic-person-02.jpg" alt="Dorrie S. avatar" width="100" height="100" class="card-avatar">
                  <blockquote class="card-quote">
                    <p>Thank you so much for your help. Techium company is awesome!
                      <cite>Dorrie S.</cite>
                    </p>
                  </blockquote>
                </article>
              </li>
              <li class="col-1-3">
                <article class="card-testimonial">
                  <img src="../images/pic-person-03.jpg" alt="Sven H. avatar" width="100" height="100" class="card-avatar">
                  <blockquote class="card-quote">
                    <p>I love your system. Definitely worth the investment. I’d be lost without Techium company.
                      <cite>Sven H.</cite>
                    </p>
                  </blockquote>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!– Contact section –>
      <section id="contact" class="section section-contact">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">Contact</h2>
            <p class="section-tagline">We like to know new people</p>
          </header>
          <div class="section-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
          </div>
          <div class="section-footer">
            <a href="contact.html" class="button">Get in touch</a>
          </div>
        </div>
      </section>
    </main>
    <!– Footer –>
    <footer class="footer" data-section-theme="dark">
      <div  class="container">
        <div class="row">
          <div class="col-1-2">
            <img src="../images/logo-white.png" alt="Techium logo" width="160" height="40">
            <address class="footer-address">
              234 Washington Street<br>
              Urbana, Illinois
            </address>
          </div>
          <div class="col-1-2">
            <ul class="social nav">
              <li class="social-item nav-item">
                <a href="https://www.facebook.com/HolbertonSchool/" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Facebook icon
                    </title>
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                  </svg>
                </a>
              </li>
              <li class="social-item nav-item">
                <a href="https://twitter.com/holbertonschool" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Twitter icon
                    </title>
                    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
              </li>
              <li class="social-item nav-item">
                <a href="https://www.instagram.com/holbertonschool/" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Instagram icon
                    </title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-1-2">
            <p class="footer-copyright">© 2020 Techium, made with ♥ by students at Holberton School.</p>
          </div>
          <div class="col-1-2">
            <ul class="footer-nav nav">
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Terms of use</a>
              </li>
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Privacy Policy</a>
              </li>
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>

Images archive

Let’s start by the “Work” section:

We have an issue with the focus (moving from one link to another with the TAB key) in the Desktop version. With the DevTools, you can active the focus on the <a> inside .card-title and nothing happen.

To solve it, we need to update the way we are managing the hover state of .card-title:

    In your keyboard/01-styles.css file, in the /* Card WORK section
        Remove opacity: 0 inside .card-work .card-title
        Remove .card-work:hover .card-inner
        Remove .card-work:hover .card-title
        Target the selector .card-work .card-title a and add an opacity to 0.
        For .card-work .card-title a with the a in state focus and .card-work:hover .card-title a:
            Property: opacity, Value: 1
            Property: height, Value: 100%
            Property: background-color, Value: rgba(0, 0, 0, 0.7)

Now you use the keyboard to navigate, you should see the card with the title and the dark background like when you hover the card with your mouse.

All the other elements have a blue outline around.

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: keyboard/01-styles.css, keyboard/01-index.html

10/10 pts
1. add the skip-links
mandatory
Score: 100.00% (Checks completed: 100.00%)

Using the 00-index.html provided in the previous task, in your skip-links/01-index.html file, just after the <body> HTML open tag

    Add the <!-- Skip links --> comment
    Create a new <nav> tag with the aria-label attribute. Put the value Skip links inside it.
        Create a non ordered list of class off-screen
            Create a first li with a link inside
                Href: #a11y-primary-nav
                Class: skip-link
                Text: Skip to primary navigation
            Create a second li with a link inside
                Href: #a11y-main-content
                Class: skip-link
                Text: Skip to main content
    On the <nav class="navbar-menu">, add an id with the text: a11y-primary-nav and a tabindex="-1"
    On the <main> tag, add an id with the text: a11y-main-content, and tabindex="-1"

00-article.html is provided to you below to repeat the same changes in your skip-links/01-article.html file

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>Article - Techium</title>
    <meta name="description" content="Description of the page less than 150 characters">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" href="/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="00-styles.css">
  </head>
  <body class="article-page">

    <!-- Header -->
    <header class="header" data-section-theme="dark">
      <div class="container">
        <div class="header-container">
          <div class="header-logo">
            <a href="/">
              <img src="../images/logo-white.png" alt="Techium logo" width="160" height="40">
            </a>
          </div>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          <nav class="navbar-menu">
            <ul class="nav">
              <li class="nav-item">
                <a href="/" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link">Services</a>
              </li>
              <li class="nav-item">
                <a href="#works" class="nav-link">Works</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="#latest_news" class="nav-link">Latest news</a>
              </li>
              <li class="nav-item">
                <a href="#testimonials" class="nav-link">Testimonials</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
              </li>
              <li class="nav-item">
                <form action="#" method="post" class="form-search">
                  <input type="search" name="q" id="search-input" placeholder="Search..." aria-label="Search through site content">
                  <button class="search-button">
                    <svg viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon">
                      <title>
                        Search icon
                      </title>
                      <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"/>
                    </svg>
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main>

      <!-- Hero section -->
      <header class="section-hero hero-article" data-section-theme="dark" style="background-image: url('../images/pic-article-02.jpg')">
        <div class="container">
          <div class="section-body">
            <section class="section-inner">
              <span class="section-category">Digital Life</span>
              <h1 class="section-title">Ut alios omittam, hunc appello, quem ille unum secutus est.</h1>
            </section>
          </div>
        </div>
      </header>

      <div class="main-article">
        <div class="container">
          <div class="post">
            <article class="post-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed haec omittamus; <b>Hoc Hieronymus summum bonum esse dixit.</b> Duo Reges: constructio interrete.</p>

              <h2>Prioris generis est docilitas, memoria</h2>

              <ol>
                <li>Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</li>
                <li>Quid enim de amicitia statueris utilitatis causa expetenda vides.</li>
              </ol>

              <p>Morbi pharetra congue ante ac tincidunt. Donec euismod eu mauris nec laoreet. Praesent id sodales ipsum. Aliquam erat volutpat. Ut porta sem eget libero faucibus, eget convallis nisi finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum accumsan euismod nunc quis viverra.</p>

              <figure>
                <img src="../images/the-honest-company-j69c0Q650Hw-unsplash.jpg" alt="Glasses, baby converse shoes, black bag, wipper on a dresser with a open drawer" width="620" height="350">
                <figcaption class="img-caption">Pugnant Stoici cum Peripateticis. Prioris generis est docilitas</figcaption>
              </figure>

              <p>Quare conare, quaeso. Dici enim nihil potest verius. Primum divisit ineleganter; Suam denique cuique naturam esse ad vivendum ducem.</p>

              <blockquote cite="https://www.holbertonschool.com/">
                <p>Ego autem tibi, Piso, assentior usu hoc venire, ut acrius aliquanto et attentius de claris viris locorum admonitu cogitemus.</p>
              </blockquote>

              <p>Omnia contraria, quos etiam insanos esse vultis. Tibi hoc incredibile, quod beatissimum.</p>

              <h2>Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus.</h2>

              <p><a href="http://loripsum.net/" target="_blank" rel="noopener">Apparet statim, quae sint officia, quae actiones.</a> Quae in controversiam veniunt, de iis, si placet, disseramus.</p>

              <ul>
                <li>Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P.</li>
                <li>Quis est autem dignus nomine hominis, qui unum diem totum velit esse in genere isto voluptatis?</li>
                <li>Sed in rebus apertissimis nimium longi sumus.</li>
              </ul>

              <p>Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Atqui, inquam, Cato, si istud optinueris, traducas me ad te totum licebit. Nemo nostrum istius generis asotos iucunde putat vivere. Res enim se praeclare habebat, et quidem in utraque parte. Qui autem esse poteris, nisi te amor ipse ceperit? Ita fit cum gravior, tum etiam splendidior oratio. De vacuitate doloris eadem sententia erit. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum.</p>
            </article>

            <!-- Aside section -->
            <aside class="post-aside">
              <div class="post-meta">
                <ul class="post-meta-list row">
                  <li class="post-meta-author">
                    <strong>Written by:</strong>
                    <a href="#" rel="author">William Attaway</a>
                  </li>
                  <li class="post-meta-date">
                    <strong>Posted on:</strong>
                    <time datetime="2019-10">October 2019</time>
                  </li>
                  <li class="post-meta-tag">
                    <strong>Tags:</strong>
                    <ul class="tag-list">
                      <li>
                        <a href="#" rel="tag">Web Design</a>
                      </li>
                      <li>
                        <a href="#" rel="tag">UX</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="post-share">
                <ul class="social nav">
                  <li class="social-item nav-item">
                    <a href="#" class="social-link">
                      <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                        <title>
                          Facebook icon
                        </title>
                        <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                      </svg>
                    </a>
                  </li>
                  <li class="social-item nav-item">
                    <a href="#" class="social-link">
                      <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                        <title>
                          Twitter icon
                        </title>
                        <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          <!-- Comment section -->
          <section class="post-comments">
            <header>
              <h2 class="section-title">Leave a comment</h2>
              <p>All fields are required.</p>
            </header>
            <form action="#" method="post">
              <fieldset>
                <legend class="visually-hidden">Your personal information</legend>
                <div class="form-group col-1-2">
                  <label for="your-first-name">First Name</label>
                  <div class="form-field">
                    <span class="form-field-container">
                      <input type="text" name="your-first-name" id="your-first-name" placeholder="e.g. Mike" pattern="[A-Za-zÀ-ž\s]{3,}"  maxlength="35" autocomplete accesskey="f" required>
                      <i class="form-field-icon"></i>
                      <p class="form-help">First name should be at least 3 characters and only contains letters</p>
                    </span>
                  </div>
                </div>
                <div class="form-group col-1-2">
                  <label for="your-last-name">Last Name</label>
                  <div class="form-field">
                    <span class="form-field-container">
                      <input type="text" name="your-last-name" id="your-last-name" placeholder="e.g. Smith" pattern="[A-Za-zÀ-ž\s]{3,}" maxlength="40" autocomplete accesskey="l" required>
                      <i class="form-field-icon"></i>
                    </span>
                    <p class="form-help">Last name should be at least 3 characters and only contains letters</p>
                  </div>
                </div>
                <div class="form-group col-2-3">
                  <label for="your-email">Email</label>
                  <div class="form-field">
                    <span class="form-field-container">
                      <input type="email" name="your-email" id="your-email" placeholder="e.g. youremail@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" maxlength="55" autocomplete accesskey="e" required>
                      <i class="form-field-icon"></i>
                    </span>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend class="visually-hidden">Your comment</legend>
                <div class="form-group col-2-3">
                  <label for="your-title">Title</label>
                  <div class="form-field">
                    <span class="form-field-container">
                      <input type="text" name="your-title" id="your-title" placeholder="e.g. I loved that article" pattern="[A-Za-zÀ-ž\s]{4,}" maxlength="75" accesskey="t" required>
                      <i class="form-field-icon"></i>
                      <p class="form-help">Title should be at least 4 characters and only contains letters</p>
                    </span>
                  </div>
                </div>
                <div class="form-group col-2-3">
                  <label for="your-comment">Comment</label>
                  <div class="form-field">
                    <span class="form-field-container">
                      <textarea accesskey="c" placeholder="Write your comment here" name="your-comment" id="your-comment" minlength="10" cols="30" rows="6" required></textarea>
                    </span>
                    <p class="form-help">Comment should be at least 10 characters</p>
                  </div>
                </div>
                <div class="form-group">
                  <button class="button button-primary">Post my comment</button>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>

    </main>

    <!-- Footer -->
    <footer class="footer" data-section-theme="dark">
      <div  class="container">
        <div class="row">
          <div class="col-1-2">
            <img src="../images/logo-white.png" alt="Techium logo" width="160" height="40">
            <address class="footer-address">
              234 Washington Street<br>
              Urbana, Illinois
            </address>
          </div>
          <div class="col-1-2">
            <ul class="social nav">
              <li class="social-item nav-item">
                <a href="https://www.facebook.com/HolbertonSchool/" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Facebook icon
                    </title>
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                  </svg>
                </a>
              </li>
              <li class="social-item nav-item">
                <a href="https://twitter.com/holbertonschool" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Twitter icon
                    </title>
                    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
              </li>
              <li class="social-item nav-item">
                <a href="https://www.instagram.com/holbertonschool/" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Instagram icon
                    </title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr>

        <div class="row">
          <div class="col-1-2">
            <p class="footer-copyright">© 2020 Techium, made with ♥ by students at Holberton School.</p>
          </div>
          <div class="col-1-2">
            <ul class="footer-nav nav">
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Terms of use</a>
              </li>
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Privacy Policy</a>
              </li>
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>

The name of the ID can be anything but prefixing with a11y can help us to remember why we are using an ID. (I recommend reading this article about CSS namespacing by Harry Roberts)

Using the stylesheet from the previous task, in your skip-links/01-styles.css file, in the /* Helpers section, after the visually-hidden selector

    Target the off-screen class
        Property: left, Value: -100vw
        Property: position, Value: absolute
    Target the skip-link class
        Property: background, Value: link to the color-black variable
        Property: color, Value: link to the color-white variable
        Property: left, Value: 0
        Property: padding, Value: .7rem
        Property: position, Value: fixed
        Property: opacity, Value: 0
        Property: top, Value: 0
        Property: z-index, Value: 10
        Property: transform, Value: translateY(-1rem)
        Property: transition, Value: transform .2s ease-in-out, opacity .2s ease-in-out
    Target the focus state of skip-link class
        Property: opacity, Value: 1
        Property: transform, Value: translateY(0)

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: skip-links/01-index.html, skip-links/01-article.html, skip-links/01-styles.css

47/47 pts
2. Elements must have sufficient color contrast
mandatory
Score: 100.00% (Checks completed: 100.00%)

You are given this fix-a11y/00-index.html starter file:

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta charset="UTF-8">
    <title></title>
    <style>
      body {
        color: #a6a5a5;
        background-color: #5f7a8a;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div>
        <div>
          <div><a href="#"><img src="img/logo.png"></a></div>
          <div class="nav">
            <div>
              <p><a href="#">Home</a></p>
              <p><a href="#">About</a></p>
              <p><a href="#">Services</a></p>
              <p><a href="#">Portfolio</a></p>
              <p><a href="#">Pricing</a></p>
              <p><a href="#">Pages</a></p>
              <p><a href="#">Contact</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h6>This is me</h6>
            <h1>Philip Gilbert</h1>
            <div>You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</div><a class="primary-btn" href="#">discover now</a>
          </div>
          <div class="col-6"><img class="img-fluid" src="hero-img.png"></div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-6"><img class="img-fluid" src="about-img.png" alt="About image"></div>
          <div class="col-5">
            <h6>About Me</h6>
            <h1>Personal Details</h1>
            <p>Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p><a class="primary-btn" href="#">View Full Details</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-7">
            <div class="title">
              <h1>My Offered Services</h1>
              <p>At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="single-services"><a href="#">
                <h4>Web Design</h4></a>
              <p>It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
            </div>
          </div>
          <div class="col-4">
            <div class="single-services"><a href="#">
                <h4>Web Development</h4></a>
              <p>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="counter">2536</h1>
            <p>Projects Completed</p>
          </div>
          <div class="col-lg-3">
            <h1 class="counter">6784</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="menu-content">
            <div class="title">
              <h1>Client’s Feedback About Me</h1>
              <p>It is very easy to start smoking but it is an uphill task to quit it. Ask any chain smoker or even a person.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="active-testimonial">
            <div class="single-testimonial item d-flex flex-row">
              <div class="thumb"><img class="img-fluid" src="image-01.png" alt=""></div>
              <div class="desc">
                <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.</p>
                <h4>Harriet Maxwell</h4>
                <p>CEO at Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="title text-center">
              <h1>Choose Your Plan</h1>
              <p>When someone does something that they know that they shouldn’t do, did they.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div>
              <h1>01</h1>
              <h4>Economy</h4>
              <p>For the individuals</p>
            </div>
            <div class="package-list">
              <div><span>Secure Online Transfer</span><span>Unlimited Styles for interface</span><span>Reliable Customer Service</span></div>
            </div>
            <div class="bottom-part">
              <h1>$199.00</h1><a href="#">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <div>
              <h4>About Me</h4><span>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.</span>
            </div>
          </div>
          <div class="col-5">
            <div class="footer-widget">
              <h4>Newsletter</h4>
              <p>Stay updated with our latest trends</p>
              <form action="#" method="post">
                <div class="input-group">
                  <input class="form-control" type="text" name="email" placeholder="Enter Email Address">
                  <div class="input-group-btn"><a class="btn" type="submit">Validate</a></div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-2">
            <div class="footer-widget">
              <h4>Follow Me</h4>
              <p>Let us be social</p>
              <div><a href="#"><i class="facebook-icon"></i></a><a href="#"><i class="twitter-icon"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

As you can see, the contrast is not good. The easy fix is simply to remove the body styles in the embed <style>. Do this in your fix-a11y/01-index.html file. In a real case, you could use the Contrast Ratio section of the Color Picker.

Check with Axe to ensure the issue is fixed.

Rendering the page should display something like this

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/01-index.html

1/1 pt
3. Documents must have <title> element to aid in navigation
mandatory
Score: 100.00% (Checks completed: 100.00%)

Taking your code from the previous task, in your fix-a11y/02-index.html file

Add a title: Homepage - A fake website

Check with Axe to ensure the issue is fixed

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/02-index.html

1/1 pt
4. <html> element must have a lang attribute
mandatory
Score: 100.00% (Checks completed: 100.00%)

Taking your code from the previous task, in your fix-a11y/03-index.html file

On the html tag, add the attribute lang with the en value.

Check with Axe to ensure the issue is fixed.

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/03-index.html

1/1 pt
5. Images must have alternate text
mandatory
Score: 100.00% (Checks completed: 100.00%)

Taking your code from the previous task, in your fix-a11y/04-index.html file

    Locate the img that points to the logo.png
        Add an alt attribute with the text Name of the logo
    Locate the img that points to the hero-img.png
        Add an empty alt (decorative image)

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/04-index.html

2/2 pts
6. Form elements must have labels
mandatory
Score: 100.00% (Checks completed: 100.00%)

Taking your code from the previous task, in your fix-a11y/05-index.html file, locate the form

    Add a label just before the input
        Class: visually-hidden
        For: email
    On the input
        Add an id: email

Axe tells use that the issue is solved. But actually, some elements should be fixed for better accessibility and usability.

    We can change the type from text to email
    Add the attribute autocomplete with the value email
    Add the required attribute and the aria-required="true"
    Change the a to be a button
    We can remove the placeholder as it doesn’t add any value

We don’t have any error handling in our example, that should exist on the front-end / back-end side.

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/05-index.html

8/8 pts
7. Links must have discernible text
mandatory
Score: 100.00% (Checks completed: 100.00%)

In your fix-a11y/06-index.html file

    Locate thefacebook-icon and add an aria-label on the a with the text Facebook
    Locate the twitter-icon and add an aria-label on the a with the text Twitter

Links should never be empty, in our case, we are using a font (like Font Awesome) to generate icons.

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/06-index.html

2/2 pts
8. Zooming and scaling must not be disabled
mandatory
Score: 100.00% (Checks completed: 100.00%)

In your fix-a11y/07-index.html file

Locate the meta viewport and remove user-scalable=no

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/07-index.html

1/1 pt
9. Heading levels should only increase by one and all page content must be contained by landmarks
mandatory
Score: 100.00% (Checks completed: 100.00%)

You can install the headingsMap extension to have a visual representation of your headings.

Taking your code from the previous task, in your fix-a11y/08-index.html file

    Like our Techium project, we are going to create an h1 just after the <div class="header"> closing tag. (The h1 will be sibling to the <div class="header"> div)
        Text: Homepage
    Change <h6>This is me</h6> to be <h2>This is me</h2>
    Change <h1>Philip Gilbert</h1> to be <span>Philip Gilbert</span>
    Change <h6>About Me</h6> to be <h2>About Me</h2>
    Change <h1>Personal Details</h1> to be <span>Personal Details</span>
    Change <h1>My Offered Services</h1> to be <h2>My Offered Services</h2>
    Change <h4>Web Design</h4> to be <h3>Web Design</h3>
    Change <h4>Web Development</h4> to be <h3>Web Development</h3>
    Change <h1 class="counter">2536</h1> to be <span class="counter">2536</span>
    Change <h1 class="counter">6784</h1> to be <span class="counter">6784</span>
    Change <h1>Client's Feedback About Me</h1> to be <h2>Client's Feedback About Me</h2>
    Change <h4>Harriet Maxwell</h4> to be <span>Harriet Maxwell</span>
    Change <h1>Choose Your Plan</h1> to be <h2>Choose Your Plan</h2>
    Change <h1>01</h1> to be <h3>01</h3>
    Change <h1>$199.00</h1> to be <span>$199.00</span>
    Change <h4>About Me</h4> to be <span>About Me</span>
    Change <h4>Newsletter</h4> to be <span>Newsletter</span>
    Change <h4>Follow Me</h4> to be <span>Follow Me</span>

Fixing wrong headings is not an easy task. Headings represent the outline of your content. Like the table of contents in a book, headings should help to understand what is inside your page.

Always ask yourself if that word or sentence would make sense for anybody visiting your website.

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/08-index.html

18/18 pts
10. Document must have one main landmark
mandatory
Score: 100.00% (Checks completed: 100.00%)

You can install the Landmarks extension to visually locate the landmarks on your pages.

Taking your code from the previous task, in your fix-a11y/09-index.html file

    Locate the header class and convert that <div> into a <header> tag (only change the tag, no need to change or remove other attributes in the tag)
    Convert the <div class='nav'> into a <nav> element (only change the tag, no need to change or remove other attributes in the tag)
    Wrap everything from the <h1>Homepage</h1> to before the <div class="footer"> in a <main> tag.
    Locate the footer class and transform the div to a <footer> (only change the tag, no need to change or remove other attributes in the tag)
    Locate all divs with the section class, and update divs to be <section> (only change the tag, no need to change or remove other attributes in the tag). Except the one with the Projects Completed text. Sections should have headings, we don’t have one anymore.

If you open the landmarks extension, you should see the landmarks showing.

Tip

Remember that header, section, footer etc contain a default role (=landmarks).

All automated issues are now solved! You fixed around 50% of accessibility issues. The rest are manual issues, tested using screen-reading tools or just reading the code.

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/09-index.html

7/7 pts
11. More than 2 elements become list
mandatory
Score: 100.00% (Checks completed: 100.00%)

Automated tools can’t always alert about elements that should exist as a list.

Taking your code from the previous task, in your fix-a11y/10-index.html file

    Locate the nav
        Transform the <div> in a <ul> and every <p> in an li
    Locate the div with package-list class
        Transform the children in an ul with the 3 spans being each an li

Repo:

    GitHub repository: holbertonschool-web_front_end
    Directory: accessibility
    File: fix-a11y/10-index.html

