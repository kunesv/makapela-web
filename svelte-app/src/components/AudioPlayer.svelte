<script>
    // import { createEventDispatcher } from 'svelte';
  
    // const dispatch = createEventDispatcher();
  
    // export let item = undefined;
    // export let className = '';
    // export let label = '';
    // export let dataIndex = 0;
    // export let dataId = '';
    // export let iconClasses = '';
  
    // function handleClick() {
    //   console.log(`button clicked ${JSON.stringify(item)}`);
    //   dispatch('clicked', item);
    // }
  </script>
  
  <!-- <button
    class="link card-footer-item {className}"
    aria-label={label}
    tabindex="0"
    on:click={handleClick}
    data-index={dataIndex}
    data-id={dataId}>
    <i class={iconClasses} />
    <span>{label}</span>
  </button> -->

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