console.log("-----------START-------------");

const containerTheme = document.getElementById("theme-list");

const data = {
    'Тема 1': [
        {
            title: 'Подтема 1.1',
            description: 'Некий текст, привязанный к Подтеме 1.1'
        },
    ],
    'Тема 2': [
        {
            title: 'Подтема 2.1',
            description: 'Некий текст, привязанный к Подтеме 2.1'
        },
        {
            title: 'Подтема 2.2',
            description: 'Некий текст, привязанный к Подтеме 2.2'
        },
        {
            title: 'Подтема 2.3',
            description: 'Некий текст, привязанный к Подтеме 2.3'
        }
    ]
};


function renderThemeRows(data, container) {
	let listItem = ''

	for (let theme in data){
		for (let i = 0; i < data[theme].length; i++) {
			let subThemeTitle = data[theme][i].title;

			listItem += `<li>
					<div>${theme}</div>
					<div>${subThemeTitle}</div>
				</li>`;
		}
		
		container.innerHTML = '';
		container.innerHTML = listItem;
	}
	
}

renderThemeRows(data, containerTheme);