export default function getBaseUrl() {
    if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        
        // Create base URL with protocol and hostname
        let baseUrl = `${url.protocol}//${url.hostname}`;
        
        // Add port if it exists and isn't the default port
        if (url.port && url.port !== '80' && url.port !== '443') {
            baseUrl += `:${url.port}`;
        }
        
        return baseUrl;
    }
    return "";
}