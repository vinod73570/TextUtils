import React,{useState} from 'react'

export default function TextForm(props) {
  
const [text , setText]=useState('');



    const handleOnChange=(event)=>{ setText(event.target.value); }



    const handleloclick=()=>{
       setText(text.toLowerCase()); 
       props.showalert('converted to Lowercase','success')
      }



    const handleUpClick=()=>{  
      setText(text.toUpperCase());  
      props.showalert('converted to Uppercase','success')
    }



    const handleClearclick=()=> {
      setText('');
      props.showalert('your text is Cleared','success')

    }



    const handleSenclick=()=>{
      props.showalert('converted to Sentence Case','success')
      if (!text || text.trim().length === 0) return;
      let newtext=text.split(/[ ]+/);
      let newtext2=newtext.join(" ");

       let sentence=newtext2.split('. ');
      for(let i=0; i< sentence.length;i++){
        if(sentence[i]&&sentence.length>0)
        {
            sentence[i]=sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }

     }
     let set=sentence.join('. ');
     setText(set);
    
    }
    



    const handleCopyclick=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert('Copied to clipborad','success')
      


    }



    function countweords(text) {
      let text1=text.split(/[ ]+/);
      let text2=text1.join(" ");
      let count=text2.split(" ").length;
      let i=text2.length-1;
      let j=" ";
        if(text[i]===j)
        return count-1;
        else
        return count;    
          }
        
          
        
      
      
    
    

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className='mb-3'>
        <label htmlFor="myBox" className='form-label'>text below here</label>
        <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" placeholder='Type or paste your content here' style={{backgroundColor : props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'black'}}  rows={8}></textarea>
        <button className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleloclick}>lowercase </button>
       <button className="btn btn-primary mx-1 my-3" onClick={handleSenclick}>Sentence case</button>
       <button className="btn btn-primary mx-1 my-3" onClick={handleClearclick}>Clear</button>
       <button className="btn btn-primary mx-1 my-3" onClick={handleCopyclick}>Copy Text</button>
       
    </div>
    </div>

    <div className="container my-3" style={{color : props.mode==='dark'? 'white':'black'}}>
        <h4>your text summary</h4>
        <p> {!text || text.length ===0?'0':countweords(text)}words and {text.length}charector</p>
        <p>{ 0.008 * (text.split(" ").length)} Minutes Read </p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Entr Something Into TextBox"}</p>

    </div>
    </>
  )
}
