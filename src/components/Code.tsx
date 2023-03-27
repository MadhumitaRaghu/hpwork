import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {AiFillPlayCircle} from 'react-icons/ai'
import "../styles/Markdown.css"
const Code = ({children,language}:any) => {
  return (
    <div>  
      <AiFillPlayCircle className='play'></AiFillPlayCircle>
      <SyntaxHighlighter
    language={language}
    style={materialLight}
  >
    {children}
  </SyntaxHighlighter></div>
  )
}

export default Code