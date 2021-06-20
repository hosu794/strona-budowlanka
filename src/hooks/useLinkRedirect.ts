
const useLinkRedirect = (content: string): void  => {
    if (content.substring(0, 3) === "htt") {
        window.location.href = content;
      } 
}

export default useLinkRedirect; 