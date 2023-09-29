import { useState } from "react";

function Folder({ explorer }) {
	const [expand, setExpand] = useState(false);
	if (explorer.isFolder) {
		return <div style={{ marginTop: 5 }}>
			<div>
				<div className="folder" onClick={() => setExpand(!expand)}>📁{explorer.name}</div>
			</div>
			<div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }} >
				{
					explorer.items && explorer.items.map((exp) => {
						console.log('exp: ', exp);
						return (
							<Folder explorer={exp} key={exp.id}/>
						)
					})
				}
			</div>
		</div >
	}
	else {
		return <span className="file">{explorer.name}</span>
	}

}

export default Folder;
