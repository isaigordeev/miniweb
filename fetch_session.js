$(document).ready(function() {
    // Make a POST request to fetch session data
    $.post("fetch_session.php", function(sessionData) {
        // Use the session data as needed
        console.log("Session data:", sessionData);
    }, "json");
});
