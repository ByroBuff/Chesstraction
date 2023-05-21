const saveOptions = () => {
    const type = document.getElementById('stringType').value;
    const mode = document.getElementById('mode').value;
  
    chrome.storage.sync.set(
      { stringType: type, mode: mode },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 2000);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { stringType: 'fen' , mode: 'lichess'},
      (items) => {
        document.getElementById('stringType').value = items.stringType;
        document.getElementById('mode').value = items.mode;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);