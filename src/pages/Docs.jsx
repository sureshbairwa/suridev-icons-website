import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx'; 
import 'prismjs/themes/prism-tomorrow.css'; 
import { Lock } from 'suridev-icons';
import Example from './Example';
import Example2 from './Example2';
import copy from 'copy-to-clipboard'; 
import "../App.css"

const Docs = () => {
  const [copiedCode, setCopiedCode] = useState(null); 

  useEffect(() => {
    Prism.highlightAll(); 
  }, [copiedCode]); 

  const handleCopy = (text, section) => {
    copy(text); 
    setCopiedCode(section); 
    setTimeout(() => setCopiedCode(null), 500); 
  };

  return (
    <div className="flex mt-16 bg-slate-50">
      <nav className="fixed w-64 p-4">
        <ul className="space-y-4">
          <li>
            <a href="#installation" className="text-blue-500 hover:underline">Installation</a>
          </li>
          <li>
            <a href="#import-statement" className="text-blue-500 hover:underline">Import Statement</a>
          </li>
          <li>
            <a href="#usage" className="text-blue-500 hover:underline">Usage</a>
          </li>
          <li>
            <a href="#customization" className="text-blue-500 hover:underline">Customization</a>
          </li>
          <li>
            <a href="#license" className="text-blue-500 hover:underline">License</a>
          </li>
        </ul>
      </nav>

      {/* Documentation Content */}
      <div className="ml-64 pl-8 w-full mr-40 sm:mr-5">
        <section id="installation">
          <h1 className="text-2xl font-bold mb-4 mt-3">Suridev Icons Documentation</h1>
          <h2 className="text-xl font-semibold mb-2">Installation</h2>
          <p >To install the <code className="font-bold" title="click to copy to clipboard">suridev-icons</code> package use npm.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Using npm:</h3>
          <span className="relative group">
          <pre
            className="bg-black text-white p-4 rounded cursor-pointer"
            onClick={() => handleCopy('npm install suridev-icons', 'installation')}
          >
            {copiedCode === 'installation' ? (
              <p className="text-lime-500 m-0">Copied to clipboard</p>
            ) : (

              
                <code className="language-jsx">npm install suridev-icons</code>
               
              //
            )}
          </pre>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-32 bg-black text-white text-center text-xs rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to copy to clipboard
              </span>
            </span> 


          
        </section>

        <section id="import-statement" className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Import Statement</h2>
          <span className="relative group">

          <pre
            className="bg-black text-white p-4 rounded cursor-pointer"
            onClick={() => handleCopy("import { Lock, Menu } from 'suridev-icons';", 'import')}
          >
            {copiedCode === 'import' ? (
              <p className="text-lime-500 m-0">Copied to clipboard</p>
            ) : (
              <code className="language-jsx">{`import { Lock , Menu } from 'suridev-icons';`}</code>
            )}
          </pre>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-32 bg-black text-white text-center text-xs rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to copy to clipboard
              </span>
            </span> 
        </section>

        <section id="usage" className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Usage</h2>
          <p>Once installed, you can import icons as React components and use them directly in your JSX code.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Basic Usage</h3>
          <span className="relative group">

          <pre
            className="bg-black text-white p-4 rounded cursor-pointer"
            onClick={() => handleCopy(`import React from 'react';
import { Lock, Menu } from 'suridev-icons';

const Example = () => {
  return (
    <div className='flex'>
      <Lock />
      <Menu />
    </div>
  );
};

export default Example;`, 'usage')}
          >
            {copiedCode === 'usage' ? (
              <p className="text-lime-500 m-0">Copied to clipboard</p>
            ) : (
              <code className="language-jsx">{`import React from 'react';\nimport { Lock, Menu } from 'suridev-icons';\n\nconst Example = () => {\n  return (\n    <div className='flex'>\n      <Lock />\n      <Menu />\n    </div>\n  );\n};\n\nexport default Example;`}</code>
            )}
          </pre>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-32 bg-black text-white text-center text-xs rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to copy to clipboard
              </span>
            </span> 

          <div className="mt-5 bg-white">
            <p className="font-medium text-xl mb-3">Result</p>
            <Example />
          </div>
        </section>

        <section id="customization" className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Customization</h2>
          <p>You can customize the size by passing props such as <code>width</code> and <code>height</code>.</p>
          <span className="relative group">

          <pre
            className="bg-black text-white p-4 rounded cursor-pointer"
            onClick={() => handleCopy(`import React from 'react';
import { Lock, Menu } from 'suridev-icons';

const Example2 = () => {
  return (
    <div className='flex'>
      <Lock height="100" width="100" />
      <Menu height="100" width="100" />
    </div>
  );
};

export default Example2;`, 'customization')}
          >
            {copiedCode === 'customization' ? (
              <p className="text-lime-500 m-0">Copied to clipboard</p>
            ) : (
              <code className="language-jsx">{`import React from 'react';\nimport { Lock, Menu } from 'suridev-icons';\n\nconst Example2 = () => {\n  return (\n    <div className='flex'>\n      <Lock height="100" width="100" />\n      <Menu height="100" width="100" />\n    </div>\n  );\n};\n\nexport default Example2;`}</code>
            )}
          </pre>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-32 bg-black text-white text-center text-xs rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to copy to clipboard
              </span>
            </span> 

          <div className="mt-5 bg-white mb-3">
            <p className="font-medium text-xl mb-3">Result</p>
            <Example2 />
          </div>
        </section>

        <section id="license" className="mt-8 mb-10">
          <h2 className="text-xl font-semibold mb-2 mt-5">License</h2>
          <p className="mb-5">
            This package is licensed under the MIT<a href="https://github.com/sureshbairwa/suridev-icons/blob/main/LICENSE" className="text-blue-500 underline"> License</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Docs;
