export const data = {
	id: 1,
	isFolder: true,
	name: 'root',
	items: [
		{
			id: 2,
			isFolder: true,
			name: 'src',
			items:[
				{
					id: 3,
					isFolder: false,
					name: 'app.tsx',
				}
			]
		},
		{
			id: 3,
			isFolder: false,
			name: 'package.json',
		},
		{
			id: 3,
			isFolder: true,
			name: 'components',
		}
	]
}
