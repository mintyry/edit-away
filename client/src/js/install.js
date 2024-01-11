const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // event is stored here, allowing PWA to access event hwne user decides to install app
    //event in this case is an object containing meta info like app name, icon, etc.
    //this info will be pulled when user clicks to install
    window.deferredPrompt = event;
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    //if not event is stored from prior fn, stop running consequent code
    if (!window.deferredPrompt) {
        return;
    }
    // prompt user to install app
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    // hides so cant install again
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
     // Clear prompt
  window.deferredPrompt = null;
});
