import { useState } from "react";

export default function InputUrl() {
  const [url, setUrl] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setIsError(false);
    setErrorMessage('');
    setShortenedUrl('');
    setIsCopied(false);
    
    // Validate input
    if (!url) {
      setIsError(true);
      setErrorMessage('Please add a link');
      return;
    }
    
    if (!validateUrl(url)) {
      setIsError(true);
      setErrorMessage('Please enter a valid URL');
      return;
    }
    
    // Show loading state
    setIsLoading(true);
    
    try {
      // Call CleanURI API
      const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `url=${encodeURIComponent(url)}`,
      });
      
      const data = await response.json();
      
      if (response.ok) {
        if (data.result_url) {
          setShortenedUrl(data.result_url);
        } else {
          setIsError(true);
          setErrorMessage('Error shortening URL');
        }
      } else {
        setIsError(true);
        setErrorMessage(data.error || 'Error shortening URL');
      }
    } catch (error) {
      console.error('Error shortening URL:', error);
      setIsError(true);
      setErrorMessage('Failed to connect to URL shortening service');
    } finally {
      setIsLoading(false);
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text:', err);
      });
  };

  return (
    <section className="w-full px-6 md:px-20 relative -mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg p-6 md:p-10 bg-h1">
          <form onSubmit={handleSubmit} className="lg:flex md:flex items-center gap-3.5 justify-center">
            <div className="w-full">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={`w-full bg-white rounded-[5px] p-4 mb-2 md:mb-0 lg:mb-0 ${
                  isError ? 'border-2 border-red-500' : ''
                }`}
              />
              {isError && (
                <p className="text-red-500 text-sm mt-1 absolute">{errorMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className={`p-[17px] lg:w-[150px] md:w-[160px] text-white rounded-[5px] font-bold font-poppins bg-primary hover:opacity-70 transition-opacity ease-in cursor-pointer w-full ${
                isLoading ? 'opacity-70' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Shortening...' : 'Shorten It!'}
            </button>
          </form>
          
          {shortenedUrl && (
            <div className="mt-4 p-4 bg-white rounded-[5px] flex flex-col md:flex-row items-center justify-between">
              <p className="text-black truncate max-w-full md:max-w-[60%] mb-2 md:mb-0">{url}</p>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary truncate"
                >
                  {shortenedUrl}
                </a>
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded-[5px] font-bold text-white ${
                    isCopied ? 'bg-h1' : 'bg-primary'
                  }`}
                >
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}