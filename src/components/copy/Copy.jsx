import { useState } from "react";
const Copy = () => {
  const email = 'bennyasitonkajoe@gmail.com'; 
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy email: ', error);
    }
  };

  return (
    <button 
      onClick={copyEmail}
      className="text-lg"
    >
      <span className={`text-${isCopied ? 'green' : 'blue'}-500 hover:text-${isCopied ? 'green' : 'blue'}-700`}>
      {isCopied ? 'Email Address Copied 😌' : 'Copy Email Address'}
      </span>
    </button>
  )
}

export default Copy