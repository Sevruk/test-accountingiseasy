console.log("-----------START-------------");



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



class Theme{
    constructor(containerThemeId, descriptionThemeId, data){
        this.containerTheme = document.getElementById(containerThemeId);
        this.descriptionTheme = document.getElementById(descriptionThemeId);
        this.data = data;

        this.init();
    }

    init(){
        this.renderThemeRows();
        this.setupEventListeners();
        this.clickFirstItem()
    }

    setupEventListeners(){
        this.containerTheme.addEventListener('click', (event) => this.handleThemeClick(event));
    }

    handleThemeClick(event){
        let selectItem = this.containerTheme.querySelectorAll('.selected');

		selectItem.forEach(element => {
			element.classList.remove('selected');
		});

        const eventTarget = event.target;

        if (eventTarget !== this.containerTheme) {
            eventTarget.closest('li').classList.add('selected');

            const themeId = eventTarget.closest('li').dataset.themeId;
            const subthemeId = eventTarget.closest('li').dataset.subthemeId;

            this.setThemeDescription(themeId, subthemeId);
        }
    }

    setThemeDescription(theme, subtheme){
        this.descriptionTheme.innerHTML = this.data[theme][subtheme].description;
    }

    renderThemeRows() {
        let listItem = ''

        for (let theme in this.data){
            for (let i = 0; i < this.data[theme].length; i++) {
                const subThemeTitle = data[theme][i].title;
                const themeTitle = i === 0 ? theme : '';

                listItem += `<li data-theme-id="${theme}" data-subtheme-id="${i}">
                        <div>${themeTitle}</div>
                        <div>${subThemeTitle}</div>
                    </li>`;
            }
            
            this.containerTheme.innerHTML = listItem;
        }
    }

    clickFirstItem(){
        const firstItem = this.containerTheme.querySelector('li');
        if(firstItem){
            firstItem.click();
        }

    }

}

document.addEventListener('DOMContentLoaded', function(){
    const theme = new Theme("theme-list", "theme-description", data);
});


//--------------------------------------------



