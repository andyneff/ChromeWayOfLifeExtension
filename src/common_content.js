function createObserverWithRetry(monitor_tags, callback, observer_flags) {
  // console.log('Trying to connect MutationObserver to ' + monitor_tags)
  const url = document.location.href

  if ( ! Array.isArray(monitor_tags) ) {
    monitor_tags = [monitor_tags]
  }

  for (i = 0; i<monitor_tags.length; i++) {
    if ( ! Array.isArray(monitor_tags[i]) ) {
      monitor_tags[i] = [monitor_tags[i]]
    }

    controls = document

    for (monitor_tag = 0;
         monitor_tag < monitor_tags.length;
         monitor_tag++) {
      controls = controls.querySelector(monitor_tags[i][monitor_tag])

      if (!controls) {
        // console.log('Waiting for ' + monitor_tags[i] + '...')
        setTimeout(
            function (){
              createObserverWithRetry(monitor_tags.slice(i),
                                      callback,
                                      observer_flags)
            }, 1000);
        return;
      }
    }

    // console.log(monitor_tags[i] + ' found')
    const observer = new MutationObserver(callback);

    if ( observer_flags === undefined ) {
      observer_flags = {childList: true, subtree: true}
    }
    observer.observe(controls, observer_flags);

    document.debug_observer = observer
  }
}