import React, {useRef} from 'react';
import './ImageLinkForm.css'; 

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	const inputRef = useRef();
	//console.log(inputRef.current?.value)
	return (
		<div >
			<p className='f3'>
			{'This Magic Brain will detect faces in your pictures. Giv it a try!'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input id='inputBox' ref= {inputRef} className= 'f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button className= 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;