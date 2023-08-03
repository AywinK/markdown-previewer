import './App.css';
import { useState } from "react";
import { marked } from "marked";

marked.use({
  mangle: false,
  headerIds: false,
  breaks: true
});

function App() {

  const exampleMarkownContent = `
  # heading example
  \n\n
  ## sub-heading example
  \n\n
  [link example](https://www.google.com)
  \n\n
  \`inline code example\`
  \n\n
  \`\`\`
  // multiline code example
  const exampleFunction = () => {
    console.log("hello world");
  };
  \`\`\`
  \n\n
  - list item example
  \n\n
  > blockquote example!
  \n\n
  ![image example](https://media.tenor.com/A8tZEYwwxsAAAAAC/munchlax-munch.gif)
  \n\n
  **bold text example**
  `

  const [markdownData, setMarkdownData] = useState(exampleMarkownContent);

  const handleChange = (e) => {
    setMarkdownData(e.target.value);
  }


  return (
    <>
      <header>
        <h1 className="title">Markdown Previewer</h1>
      </header>
      <main className="wrapper">
        <label htmlFor="editor" style={{ display: "none" }}>Editor</label>
        <textarea
          spellCheck={false}
          id="editor"
          placeholder="Enter markdown here!"
          onChange={handleChange}
          value={markdownData} />
        <section id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(markdownData) }} >

        </section>
      </main>
    </>
  );
}

export default App;
