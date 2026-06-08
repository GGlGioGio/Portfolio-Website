document.getElementById('emailBtn').addEventListener('click', function() {
    // Email which we use
    const emailAddress = "khelaia.gg@gmail.com"; 
    
    // Clipboard API to copy the email address to the clipboard
    navigator.clipboard.writeText(emailAddress).then(() => {
        const btn = document.getElementById('emailBtn');
        
        // save the original content to restore it later
        const originalContent = `Email <i class="fa-solid fa-envelope"></i>`;
        
        btn.innerHTML = `Copied! <i class="fa-solid fa-check"></i>`;
        
        btn.style.pointerEvents = 'none'; 
        
        // After 2 seconds, revert the button back to its original state
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.pointerEvents = 'auto';
        }, 2000);
    }).catch(err => {
        console.error('Couldnt copy the text: ', err);
    });
});