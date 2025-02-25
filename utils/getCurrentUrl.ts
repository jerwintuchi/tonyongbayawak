export default function getCurrentUrl() {
    if (typeof window !== "undefined") {
        let url = window.location.href;

        // Ensure HTTPS unless it's localhost
        if (url.startsWith("http://") && !url.includes("localhost")) {
            url = url.replace("http://", "https://");
        }
        
        return url;
    }
    return "";
}
