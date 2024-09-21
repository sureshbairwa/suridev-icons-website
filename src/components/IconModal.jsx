import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import { Close } from 'suridev-icons';
import copy from 'copy-to-clipboard';

const IconModal = ({ icon, onClose, styles }) => {
  const [copynpm, setCopynpm] = useState('');
  const [copyImport, setCopyImport] = useState('');

  useEffect(() => {
    Prism.highlightAll();
  }, [copyImport, copynpm]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCopyToClipboard = (text) => {
    copy(text);
    setCopynpm('copied to clipboard');
    setTimeout(() => setCopynpm(''), 500);
  };

  const handleCopyToClipboard2 = (text) => {
    copy(text);
    setCopyImport('copied to clipboard');
    setTimeout(() => setCopyImport(''), 500);
  };

  return (
    <div
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-slate-500  p-6 rounded-lg w-[500px] max-w-lg relative text-center">
        <button className="absolute top-4 right-4 text-gray-700" onClick={onClose}>
          <Close />
        </button>

        <div className="flex items-center justify-center w-32 h-32 mx-auto mb-2 bg-slate-500 hover:bg-white rounded-xl">
          {React.createElement(icon.component,{height:"90" , width:"90", className:""})}
        </div>

        <h2 className="text-xl mb-4">{icon.name}</h2>

        <h3 className="text-lg font-semibold">Installation</h3>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full">
            <span className="relative group">
              <pre
                className="bg-black text-white w-full p-4 rounded-b m-0 cursor-pointer"
                onClick={() => handleCopyToClipboard('npm install suridev-icons')}
              >
                {copynpm ? (
                  <p className="text-lime-500 m-0">{copynpm}</p>
                ) : (
                  <code className="language-jsx">npm install suridev-icons</code>
                )}
              </pre>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-32 bg-black text-white text-center text-xs rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to copy to clipboard
              </span>
            </span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-4">Usage</h3>
        <span className="relative group">
          <pre
            className="bg-black text-white w-full p-4 rounded-b m-0 cursor-pointer"
            onClick={() => handleCopyToClipboard2(`import { ${icon.name} } from 'suridev-icons';\n<${icon.name} />`)}
          >
            {copyImport ? (
              <p className="text-lime-500 m-0">{copyImport}</p>
            ) : (
              <code className="language-jsx">
                {`import { ${icon.name} } from 'suridev-icons';\n`}
                {`<${icon.name} />`}
              </code>
            )}
          </pre>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-32 bg-black text-white text-center text-xs rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to copy to clipboard
          </span>
        </span>
      </div>
    </div>
  );
};

export default IconModal;
