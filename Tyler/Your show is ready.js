function shareLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
}
