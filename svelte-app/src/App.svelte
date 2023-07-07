<script>
  import './styles.scss';
  import { Router, Link, Route } from 'svelte-routing';
  import About from './About.svelte';
  import Products from './products/Products.svelte';

  import { HeaderBar, NavBar, PageNotFound, Redirect } from './components';

  export let url = '';
</script>

<!-- <HeaderBar />
<div class="section columns">
  <Router {url}>
    <NavBar />
    <main class="column">
      <div>
        <Route path="/">
          <Redirect path="/products" />
        </Route>
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="**" component={PageNotFound} />
      </div>
    </main>
  </Router>
</div> -->

<div id="content">
  <header></header>
  <div>
      <aside class="main-menu"></aside>
      <main>
          <header>
              Písař&ndash;Čapek
          </header>
          <article id="about-band">
              <header>O kapele</header>
              <p class="gallery"><img src="Untitled design.jpg"/></p>  
              <p>Roman Čapek a Karel Písař se dali dohromady už na střední škole Života. Pak tuto školu spolu s vyznamenáním absolvovali.
              Historek by bylo na tisíce, ale my vám řekneme jedinou. Jednou Roman usnul na stole, a když ho Karel šel vysvobodit, skočil mu na záda trpaslík. I když se vše pak dořešilo na přestupkové komisi MČ Praha 7, tak semínko poesie už bylo zaseto...</p>                      
          </article>
          
          <article id="performances">
              <header>Koncerty</header>
              <ul>
                  <li>9. října 2021: Zámek</li>
              </ul>
          </article>
      </main>
      <aside class="">
          <article id="player">
              <header>Právě hraje</header>
              <audio controls="">
                  <em>Váš prohlížeč zřejmě nepodporuje tuto funkci.</em>
              </audio>
          </article>
          <article id="playlist">
              <header>Alba</header>
              <ul>
                  <li>
                      <header>Folková opera č. 5</header>
                      <p class="album-details">Texty písní: Roman Čapek, Hudba: Karel Písař</p>
                      <ul>
                          <li id="song1" data-url="Panco-Panco-Panco Edit 1 Export 3.mp3">
                              <div class="song-info">
                                  <div class="song-name">Pánčo, Pánčo, Pánčo!</div>
                                  <div class="song-details">Písař&ndash;Čapek</div>
                              </div>
                              <div class="song-duration">(2:57)</div>
                          </li>
                          <li id="song2" data-url="Posledni Cundr Edit 1 Export 3.mp3">
                              <div class="song-info">
                                  <div class="song-name">Poslední čundr</div>
                                  <div class="song-details">Písař&ndash;Čapek</div>
                              </div>
                              <div class="song-duration">(2:18)</div>
                          </li>
                          <li id="song3" data-url="Proudy Edit 2 Export 1.mp3">
                              <div class="song-info">
                                  <div class="song-name">Proudy</div>
                                  <div class="song-details">Písař&ndash;Čapek</div>
                              </div>
                              <div class="song-duration">(1:26)</div>
                          </li>
                          <li id="song4" data-url="Prvni Pisen Edit 1 Export 1.mp3">
                              <div class="song-info">
                                  <div class="song-name">První píseň</div>
                                  <div class="song-details">Písař&ndash;Čapek</div>     
                              </div>
                              <div class="song-duration">(1:47)</div>    
                          </li>
                          <li id="song5" data-url="Zpoved Edit 2 Export 1.mp3">
                              <div class="song-info">
                                  <div class="song-name">Zpověď</div>
                                  <div class="song-details">Písař&ndash;Čapek</div>     
                              </div>
                              <div class="song-duration">(2:07)</div>
                          </li>                                
                      </ul>
                  </li>
                  <li>
                      <header>Covers</header>                                
                      <ul>
                          <li id="song6" data-url="cajovna Edit 1 Export 1.mp3">
                              <div class="song-info">
                                  <div class="song-name">Čajovna &ndash; Pokus</div>                                            
                              </div>
                              <div class="song-duration">(0:41)</div>
                          </li>                                                                        
                      </ul>
                  </li>
              </ul>
          </article>
      </aside>
  </div>
  <footer></footer>
</div>
