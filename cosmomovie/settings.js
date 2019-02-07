// Все пути указываются относительно расположения файла settings.js
// !!! Все пути, которые упоминаются в этом файле должны существовать, папки должны быть созданы

const settings = {
    // файлы в этой папке и её подпапках отдаются как обычные статические файлы
    // и доступны по адресу http://localhost:3000/имя_файла
    staticPath: 'public',

    // в эту папку будут сохраняться файлы при загрузке их на сервер
    // лучше, чтобы эта папка находилась внутри пути для статических файлов
    // тогда загруженные файлы будут доступны для чтения снаружи
    fileUploadPath: 'public/uploaded',

    // путь до шаблонов handlebars
    viewsPath: 'views',

    // путь до блоков (handlebars partials)
    partialsPath: 'views/partials',

    // в этой папке будут храниться коллекции документов
    dbPath: 'db',

    // конфигурирование коллекций документов
    collections: [
        {
            // название коллекции
            name: 'movies',
            // файл для инициализации коллекции
            initialData: 'jsonData/movies.json',
        },
        {
            // коллекция с названием users  - это специальная коллекция
            // которая в дальнейшем будет использоваться для аутентификации
            name: 'users',
            initialData: 'jsonData/users.json',
        },
        {
            // название коллекции
            name: 'movieBase',
            // файл для инициализации коллекции
            initialData: 'jsonData/movieBase.json',
        },
    ],

    // кофигурирование связи между шаблоном handlebars,
    // данными и пути, по которому это всё показывать
    pages: [
        /*
                {
            // показывать view по адресу http://localhost:3000/hbs/books
            path: 'users',
            // рендерить шаблон /views/books
            view: 'users',
            // Эти данный будут доступны в шаблоне как {{ data.title }}
            data: {
                title: 'List of Users',
                nav: [
                    {
                        title: 'registration',
                    }
                ]
            },
            url: 'http://localhost:3000/api/users',
        },
        */



    ]
};

module.exports = settings;
