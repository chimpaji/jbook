import { useEffect, useState } from 'react';
import * as esbuild from 'esbuild-wasm';

const App = () => {
	const [code, setCode] = useState('');
	const [input, setInput] = useState('');

	const startService = async () => {
		//set up service
		const service = await esbuild.startService({
			worker: true,
			wasmURL: '/esbuild.wasm',
		});
		console.log(service);
	};

	useEffect(() => {
		startService();
	}, []);

    const onClick = () => {
        
    }

	return (
		<div>
            
			<input
				type='text'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			{code}
		</div>
	);
};

export default App;
