(function () {
  // Replace "x.com" with "vxtwitter.com"
  if (typeof originalUrl !== "undefined" && originalUrl.includes("x.com")) {
    const modifiedUrl = originalUrl.replace("x.com", "vxtwitter.com");

    // Create a temporary textarea element to copy the modified URL
    const textarea = document.createElement("textarea");
    textarea.value = modifiedUrl;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    console.log("Modified URL copied to clipboard:", modifiedUrl);
    // alert("URL modified and copied to clipboard: " + modifiedUrl);
  }
})();
