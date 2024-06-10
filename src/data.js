import opportunity1 from "/src/assets/opportunity1.svg"
import opportunity2 from "/src/assets/opportunity2.svg"
import opportunity3 from "/src/assets/opportunity3.svg"
import opportunity4 from "/src/assets/opportunity4.svg"
import opportunity5 from "/src/assets/opportunity5.svg"
import subject1 from "/src/assets/subject1.jpg"
import subject2 from "/src/assets/subject2.jpg"
import instagram from "/src/assets/instagram.svg"
import telegram from "/src/assets/telegram.svg"
import linkedin from "/src/assets/linkedin.svg"
import anya from "/src/assets/anya.png"
import rula from "/src/assets/rula.png"
import katya from "/src/assets/katya.png"

export const SUBJECTS = [
    {
        image: subject1,
        info: [
            {
                word: 'Case Study',
                description: " — категорія, у якій потрібно запропонувати теоретичне розв'язання заданої адміністративної, економічної, виробничої, соціальної чи маркетингової проблеми."
            },
            {
                word: 'Ціль',
                description: " — розробити стратегію дій, що покриватиме всі вимоги та вписуватиметься в бюджет.",
            },
        ],
       
        
    },
    {
        image: subject2,
        info: [
            {
                word: 'Team Design',
                description: " — категорія, що вимагає практичного розв'язання актуальної задачі в області IoT, embedded, електроніки, радіотехніки чи механіки. "
            },
            {
                word: 'Ціль',
                description: " — створити новий прототип пристрою чи покращити старий, використовуючи надані матеріали.",
            },
        ]
        
        
    },
    
      
]


export const OPPORTUNITIES = [
    {
        image: opportunity1,
        text: "Підвищити впізнаваність Вашої компанії серед студентської спільноти" 
    },
    {
        image: opportunity2,
        text: "Заохотити до співпраці активну молодь України, що зацікавлена у сфері інженерії" 
    },
    {
        image: opportunity3,
        text: "Знайти нові ідеї для вирішення Вашої проблеми" 
    },
    {
        image: opportunity4,
        text: "Познайомитися зі здібними студентами та відібрати серед них перспективних працівників" 
    },
    {
        image: opportunity5,
        text: "Підтримати розвиток молодих інженерів" 
    },
]


export const SOCIALS = [
    {
        image: instagram,
        text: "2900+" 
    },
    {
        image: telegram,
        text: "820+" 
    },
    {
        image: linkedin,
        text: "330+" 
    },
]

export const SPECIALITY = [
    {
        text: "Інженерія програмного забезпечення" 
    },
    {
        text: "Комп’ютерна інженерія" 
    },
    {
        text: "Кібербезпека" 
    },
    {
        text: "Системний аналіз" 
    },
    {
        text: "Системна інженерія" 
    },
    {
        text: "Архітектура та містобудування" 
    },
    {
        text: "Метрологія" 
    },
    {
        text: "Прикладна механіка" 
    },
    {
        text: "Електроніка " 
    },
    {
        text: "Промислове та цивільне будівництво " 
    },
    {
        text: "Інші" 
    },
]

export const PROPOSITIONS = [
    {
        title: "Solid Base",
        points: [
            {
                text: "Участь у нетворкінгу"
            },
            {
                text: "Можливість надання судді, ментора",
            },
            {
                text: "Логотип на сайті події, у пост-відео та на бренд-вол",
            },
            {
                text: "Промоція в соцмережах: 1 Instagram-stories, пост у LinkedIn",
            },
        ],
        subInfo: "Цей пакет є обов’язковим!",
        price: "350"  
    },
    {
        title: "Utopia",
        points: [
            {
                text: "Участь у воркшопі"
            },
            {
                text: "Логотип на футболці",
            },
            {
                text: "Доступ до бази CV учасників ",
            },
            {
                text: "Постійний доступ до змагань ",
            },
            {
                text: "Розсилка вакансій у Telegram боті ",
            },
            {
                text: "Стаття про компанію на сайті події ",
            },
        ],
        subInfo: "4 місця залишилось",
        price: "700"  
    },
    {
        title: "Influencer",
        points: [
            {
                text: "Пост на Instagram-сторінці"
            },
            {
                text: "Відео–представлення компанії",
            },
            {
                text: "Пост–дайджест у Telegram-каналі",
            },
            {
                text: "Банер компанії на місці проведення",
            },
        ],
        subInfo: "4 місця залишилось",
        price: "300"  
    },
    {
        title: "Advanced",
        points: [
            {
                text: "Публікація Reels в Instagram"
            },
            {
                text: "Пробна співбесіда з учасниками",
            },
            {
                text: "Відео–представлення компанії ",
            },
            {
                text: "Номінація від компанії ",
            },
            {
                text: "День з компанією ",
            },
            {
                text: "Розсилка вакансій у Telegram боті ",
            },
            {
                text: "Подкаст з представником компанії",
            },
        ],
        subInfo: "Ви можете обрати будь-які 4 опції з 7 можливих",
        price: "300"  
    },
]

export const INFO_PROPOSITIONS = [
    {
        title: "Solid Base",
        points: [
            {
                text: "Участь у нетворкінгу",
                description: "Нетворкінг – це зустріч представників компанії, учасників події та організаторів у неформальній атмосфері. Компанія матиме чудову можливість детально розповісти студентам про себе та представити наявні вакансії і стажування. Нетворкінг відбуватиметься в день офіційного закриття змагань."
            },
            {
                text: "Можливість надання судді, ментора",
                description: "Компанія надає ментора або/і суддю для категорій Case Study/Team Design. На змаганнях будуть менторські сесії, під час яких учасники матимуть змогу отримати поради від кваліфікованих працівників Вашої компанії. "
            },
            {
                text: "Логотип на сайті події",
                description: "Розміщення логотипа компанії на офіційному сайті події. "
            },
            {
                text: "Логотип у пост-відео",
                description: "Додавання логотипа у пост–відео, яке буде виставлено на Instagram-сторінці @best_lviv після завершення змагань.  "
            },
            {
                text: "Логотип на бренд-вол",
                description: "Під час події буде розміщений великий банер з логотипами всіх партнерів наших змагань. "
            },
            {
                text: "Промоція в соцмережах: 1 Instagram-stories, пост у LinkedIn",
                description: "Розміщення інформації про компанію в соціальних мережах: згадка в 1 Instagram-stories, 1 пост в LinkedIn."
            },
        ],
    },
    {
        title: "Utopia",
        points: [
            {
                text: "Участь у воркшопі",
                description: "Можливість провести воркшоп або тренінг для учасників під час офіційного відкриття змагань тривалістю до 40 хвилин."
            },
            {
                text: "Логотип на футболці",
                description: "Логотип Вашої компанії буде надрукований на футболках, які отримають учасники змагань та представники організації BEST Lviv. "
            },
            {
                text: "Доступ до бази CV учасників ",
                description: "Можливість отримати доступ до бази CV учасників змагань."
            },
            {
                text: "Постійний доступ до змагань ",
                description: "Представники та представниці Вашої компанії матимуть змогу без обмежень знаходитися на місці проведення змагань. "
            },
            {
                text: "Розсилка вакансій у Telegram боті ",
                description: "Піврічна розсилка вакансій компанії у нашому Telegram-боті, що призначений для реєстрації, важливих анонсів та комунікації під час події. "
            },
            {
                text: "Стаття про компанію на сайті події ",
                description: "На офіційному сайті змагань буде розміщено статтю про Вашу компанію та її внесок в організацію події."
            },
        ],  
    },
    {
        title: "Influencer",
        points: [
            {
                text: "Пост на Instagram-сторінці",
                description: "Розміщення інформації про компанію на Instagram-сторінці @best_lviv."

            },
            {
                text: "Відео–представлення компанії",
                description: "Можливість презентувати свою компанію учасникам перед нетворкінгом у вигляді відео, яке триватиме до 5 хвилин."
            },
            {
                text: "Пост–дайджест у Telegram-каналі",
                description: "Розміщення інформації про компанію в Telegram-каналі BEST Lviv Students у спільному пості разом з іншими компаніями."
            },
            {
                text: "Банер компанії на місці проведення",
                description: "Упродовж змагань Ви матимете змогу розмістити банер Вашої компанії на місці проведення події. Банер та стійку до нього надає компанія."
            },
        ],
    },
    {
        title: "Advanced",
        points: [
            {
                text: "Публікація Reels в Instagram",
                description: "Унікальне відео на сторінці Instagram @best_lviv про Вашу компанію."
            },
            {
                text: "Пробна співбесіда з учасниками",
                description: "Під час нетворкінгу учасники змагань спробують себе у короткій співбесіді разом з представниками Вашої компанії. Це можливість виявити нові таланти та перспективних працівників серед студентської спільноти."
            },
            {
                text: "Відео–представлення компанії ",
                description: "Можливість презентувати свою компанію учасникам перед нетворкінгом у вигляді відео, яке триватиме до 5 хвилин."
            },
            {
                text: "Номінація від компанії ",
                description: "Ви зможете обрати власну номінацію на змаганнях та нагородити команду, рішення або виступ якої найбільше резонує саме Вашій компанії. "
            },
            {
                text: "День з компанією ",
                description: "Після проведення події Instagram–stories нашої сторінки будуть наповнені контентом Вашої компанії. Ви можете надіслати свої відео або ж наша команда допоможе у їх створенні. Таких сторіз буде до 5–ти."
            },
            {
                text: "Розсилка вакансій у Telegram боті ",
                description: "Розсилка вакансій компанії у нашому Telegram-боті, що призначений для реєстрації, важливих анонсів та комунікації під час події."
            },
            {
                text: "Подкаст з представником компанії",
                description: "Це можливість зняти подкаст разом з нашою командою та поділитись професійною думкою щодо актуальних питань у сфері інженерії й не тільки. Повне відео буде розміщено на нашому YouTube-каналі BEST Lviv, а окремі моменти на Instagram–сторінці @best_lviv."
            },
        ],

    },
]

export const ADDITIONAL_PROPOSITIONS = [
    {
        text: "Тестові співбесіди",
        price: "60",
    },
    {
        text: "Розсилка вакансій у Telegram боті",
        price: "100",
    },
    {
        text: "Відео-представлення компанії ",
        price: "120",
    },
    {
        text: "Логотип на футболці",
        price: "180",
    },
    {
        text: "Доступ до бази CV учасників",
        price: "200",
    },
    {
        text: "Постійний доступ до змагань",
        price: "200",
    },
    {
        text: "Доступ до виконаних завдань учасників",
        price: "200",
    },
    {
        text: "Завдання для учасників від компанії на Case Study",
        price: "250",
    },
    {
        text: "Завдання для учасників від компанії на Тeam Design",
        price: "250",
    },
  
]

export const INFO_ADDITIONAL_PROPOSITIONS = [
    {
        title: "Пробна співбесіда з учасниками",
        description: "Під час нетворкінгу учасники змагань спробують себе у короткій співбесіді разом з представниками Вашої компанії. Це можливість виявити нові таланти та перспективних працівників серед студентської спільноти.",
    },
    {
        title: "Розсилка вакансій у Telegram-боті",
        description: "Піврічна розсилка вакансій компанії у нашому Telegram-боті, що призначений для реєстрації, важливих анонсів та комунікації під час події.",
    },
    {
        title: "Відео-представлення компанії ",
        description: "Можливість презентувати свою компанію учасникам перед нетворкінгом у вигляді відео, яке триватиме до 5 хвилин.",
    },
    {
        title: "Логотип на футболці",
        description: "Логотип Вашої компанії буде надрукований на футболках, які отримають учасники змагань та представники організації BEST Lviv. ",
    },
    {
        title: "Доступ до бази CV учасників",
        description: "Можливість отримати доступ до бази CV учасників змагань ",
    },
    {
        title: "Постійний доступ до змагань",
        description: "Представники та представниці Вашої компанії матимуть змогу без обмежень знаходитися на місці проведення змагань.  ",
    },
    {
        title: "Доступ до виконаних завдань учасників",
        description: "Можливість отримати доступ до виконаних завдань учасників.  ",
    },
    {
        title: "Завдання для учасників від компанії на Case Study",
        description: "Ваша компанія надає завдання для категорії Case Study. Воно буде обговорюватись та узгоджуватись з командою організаторів. ",
    },
    {
        title: "Завдання для учасників від компанії на Тeam Design",
        description: "Ваша компанія надає завдання для категорії Team Design. Воно буде обговорюватись та узгоджуватись з командою організаторів. ",
    },
  
]


export const CONTACTS = [
    {
        image: katya,
        name: "Ярощук Катерина",
        position: "відповідальна за корпоративні зв'язки",
        number: "+380686382823",
        email: "yaroshchuuk@gmail.com"

    },
    {
        image: rula,
        name: "Явір Руслан",
        position: "головний організатор",
        number: "+380979517976",
        email: "ruslanyavirs@gmail.com"

    },
    {
        image: anya,
        name: "Медзин Анна",
        position: "відповідальна за корпоративні зв'язки",
        number: "+380960625230",
        email: "medzyn.anna@gmail.com"

    },
  
]

import battery from "/src/assets/partners/battery.svg"
import dataArt from "/src/assets/partners/dataArt.svg"
import dialog from "/src/assets/partners/dialog.svg"
import donatello from "/src/assets/partners/donatello.svg"
import ecoSfera from "/src/assets/partners/ecoSfera.svg"
import fujikura from "/src/assets/partners/fujikura.svg"
import horihoviy from "/src/assets/partners/horihoviyGay.svg"
import lukas from "/src/assets/partners/lukas.svg"
import rozkvit from "/src/assets/partners/rozkvit.svg"
import sigma from "/src/assets/partners/sigma.svg"
import squad from "/src/assets/partners/squad.svg"
import sweetTv from "/src/assets/partners/sweetTv.svg"
import warbirds from "/src/assets/partners/warbirds.svg"



export const PARTNERS = [
    {
        image: warbirds,
    },
    {
        image: fujikura,
    },
    {
        image: donatello,
    },
    {
        image: sweetTv,
    },
    {
        image: ecoSfera,
    },
    {
        image: lukas,
    },
    {
        image: horihoviy,
    },
    {
        image: sigma,
    },  
    {
        image: dataArt,
    },  
    {
        image: battery,
    },  
    {
        image: rozkvit,
    },  
    {
        image: squad,
    },  
    {
        image: dialog,
    },  
   
  
]