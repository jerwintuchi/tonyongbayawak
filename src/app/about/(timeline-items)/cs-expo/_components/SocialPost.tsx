import React from 'react'

export default function SocialPost() {
    return (
        <div className="mt-16 mb-16">
            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/csexpo2024/posts/pfbid02kK2LyDfFrEQMPKUCcPhZY1Sg3Qg4fQRcpwGR2utyvm9kStwLHRpfh12BZ4wDdhZhl&show_text=true&width=500"
                width="500"
                height="699"
                style={{
                    border: "none",
                    overflow: "hidden",
                    backgroundColor: "white",
                }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}
