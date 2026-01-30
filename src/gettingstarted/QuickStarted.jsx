import React from "react";
import EmailSignupFooter from "../home/EmailSignupFooter";

const QuickStarted = () => {
  return (
    <div>
      <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-24">
              <ul className="space-y-2">
                <li>
                  <h5 className="uppercase font-semibold text-slate-900 mb-4">
                    Docs
                  </h5>
                </li>

                <li>
                  <a href="#" className="text-slate-900 hover:underline">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    File Structure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Customization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Gulp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    RTL
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Plugins
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:w-3/4">
            <div className="space-y-6">

              <h5 className="text-xl font-semibold pt-6">
                Quick start
              </h5>

              <p className="text-slate-600 leading-relaxed">
                Looking to start your project quickly? Just unzip the
              <code className="mx-1 px-1 rounded text-pink-600 font-medium text-xs">
                v3.1.0.zip
              </code>

                We have precompiled and packaged everything in the
                <code className="mx-1 px-1 rounded text-pink-600 font-medium text-xs">public</code>
                directory for you. Start editing the
                <code className="mx-1 px-1 rounded text-pink-600 font-medium text-xs">
                  pages/starter.html
                </code>
                file with a text or code editor, save it, and open the file in your favorite browser to see the changes.
              </p>

              <h5 className="text-xl font-semibold pt-4">
                Setting up Build system
              </h5>

              <p className="text-slate-600 leading-relaxed">
                Unzip the
                <code className="mx-1 px-1 rounded text-pink-600 font-medium text-xs">
                  v3.1.0.zip
                </code>
                {" "}to any folder and open a terminal at that location. You’ll need
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 mx-1"
                >
                  Node
                </a>
                {" "}and
                <a
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 mx-1"
                >
                  Git
                </a>.
                {" "}If you do not have them in your machine, please install their latest
                stable version from their corresponding website. As you have{" "}
                <span className="text-slate-900 font-extrabold">
                  Node and Git installed and accessible from your terminal or command line
                </span>
                , install Gulp CLI package globally with the following command:
              </p>

              <pre className="bg-gray-50 border border-gray-200  p-4 overflow-x-auto">
                <code className="font-mono text-sm text-slate-900">
                  npm i gulp-cli -g
                </code>
              </pre>


              <p className="text-slate-600">
                When you’re done, install the rest of the dependencies:
              </p>

              <pre className="bg-gray-50 border border-gray-200 p-4 overflow-x-auto">
                <code className="font-mono text-sm text-slate-900">
                  npm i
                </code>
              </pre>


              <p className="text-slate-600">
                Now run:
              </p>

              <pre className="bg-gray-50 border border-gray-200 p-4 overflow-x-auto">
                <code className="font-mono text-sm text-slate-900">
                  gulp
                </code>
              </pre>


              <p className="text-slate-600 leading-relaxed">
                Running gulp will compile the SCSS, transpile the javascript, copy all required libraries form <span className="text-pink-600 text-xs">node_modules</span>  to the corresponding <span className="text-pink-600 text-xs">public/assets/vendors</span> directory and will open a browser window to <span className="text-pink-600 text-xs">public/index.html</span>. <br /><br />All of the following folders are monitored for changes, which will tell the browser to reload automatically after any changes are made:
                
              </p>

              <pre className="bg-gray-50 border border-gray-200 p-4 overflow-x-auto">
                <code className="font-mono text-sm text-slate-900">
                public/assets/video/ <br />
                public/assets/img/ <br />
                public/vendors <br />
                / <br />
                src/scss/ <br />
                src/js/ <br />
                </code>
                
              </pre>

              <p className="text-slate-600 leading-relaxed">
                Now you can edit any <span className="text-pink-600 text-xs">pug</span> file from <span className="text-pink-600 text-xs">src/pug</span>, change SCSS variable with <span className="text-pink-600 text-xs">scss/_user-variables.scss</span>, or write your own SCSS code in <span className="text-pink-600 text-xs">scss/_user.scss</span> and add or update <span className="text-pink-600 text-xs">javaScript</span> from <span className="text-pink-600 text-xs">src/js</span> directory.
<br /><br />
                Running the <span className="text-pink-600 text-xs">gulp</span> command will discard and regenerate all the files in following directories:                
              </p>

              <pre className="bg-gray-50 border border-gray-200 p-4 overflow-x-auto">
                <code className="font-mono text-sm text-slate-900">
                public/**/*.html <br />
                public/assets/css/ <br />
                public/assets/js/ <br />
                public/vendors <br />
                </code>
              </pre>

              <p className="text-slate-600">
                Hit{" "}
                <code className="mx-1 px-1 rounded bg-pink-50 text-pink-600 text-xs font-medium">
                  Ctrl+C
                </code>
                {" "}to stop the server.
              </p>
              <p className="text-slate-600">
                Happy editing!
              </p>

            </div>
          </main>

        </div>
        
      </div>
      
    </section>
    <EmailSignupFooter/>
    </div>
  );
};

export default QuickStarted;
