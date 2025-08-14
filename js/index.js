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

document.addEventListener('DOMContentLoaded', function(){
	containerTheme.addEventListener('click', function(){
		let selectItem = this.querySelectorAll('.selected');

		selectItem.forEach(element => {
			element.classList.remove('selected');
		});

		console.log(event);
	});
});


function renderThemeRows(data, container) {
	let listItem = ''

	for (let theme in data){
		for (let i = 0; i < data[theme].length; i++) {
			const subThemeTitle = data[theme][i].title;
			const themeTitle = i === 0 ? theme : '';

			listItem += `<li>
					<div>${themeTitle}</div>
					<div>${subThemeTitle}</div>
				</li>`;
		}
		
		container.innerHTML = listItem;
	}
	
}

renderThemeRows(data, containerTheme);