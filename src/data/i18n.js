// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Переводы для разных языков
const resources = {
    en: {
        translation: {
            'Discover the Finest Hermes': 'Discover the Finest Hermes',
            'Welcome to our exclusive...': 'Welcome to our exclusive Hermes handbag boutique...',
            Home: 'Home',
            About: 'About',
            Blog: 'Blog',
            Contact: 'Contact',
        },
    },
    ja: {
        translation: {
            'Discover the Finest Hermes': '最高級のエルメスを発見',
            'Welcome to our exclusive Hermes handbag boutique, where exquisite craftsmanship and timeless elegance converge. Explore our curated collection of premium leather goods.':
                '精巧な職人技と時代を超えたエレガンスが融合する、エルメスのハンドバッグ専門店へようこそ。厳選されたプレミアムレザーグッズのコレクションをご覧ください。',
            Home: '最初へ',
            About: '私たちについて',
            Blog: 'ブログ',
            Contact: 'お問い合わせ',
            'About Hermes': 'エルメスについて',
            'Hermes , the renowned French luxury brand, has been synonymous with unparalleled craftsmanship and timeless sophistication for over a century.':
                '有名なフランスの高級ブランドであるエルメスは、1 世紀以上にわたって比類のない職人技と時代を超えた洗練さの代名詞となっています。',
            'Timeless Luxury, Modern Elegance': '「時代を超えたラグジュアリー、モダンなエレガンス」',
            'About Us': '私たちについて',
            'Privacy Policy': 'プライバシーポリシー',
            Company: '会社',
            Founded: '設立',
            '3 March 2025': '2025年3月3日',
            Location: '位置',
            '24-7 Kotobashi 4-chome, Sumida-ku, Tokyo': '130-0022  東京都 墨田区 江東橋 4-21-6 HIGH TOWN 801',
            'E-mail commerce': '電子メールコマース',
            'All rights reserved.': '無断転載を禁じます。',
            'About us': '私たちについて',
            'Only love and value last forever': '永遠に続くのは愛と価値だけ',
            'RizzBags｜For today, RizzBags has been deeply engaged in the recycling, consignment, exchange, and sale of Hermès items, securing a prominent position in Japan’s well-established luxury second-hand market. It is known as "The Hermès Sanctuary Within Reach." Located in Tokyo, the flagship store regularly holds a rich inventory of hundreds of pre-owned and brand-new Hermès bags, with more than half being popular items that are difficult to obtain at boutiques, and some even rare collectible treasures. We are committed to expanding our global reach, not only to collect more high-quality items from around the world but also to bring professional and attentive service to Hermès enthusiasts globally. RizzBags has set up stores in the three major cities of Asia, including RizzBags Hong Kong and RizzBags Singapore. Each store is staffed with top appraisers appointed by our headquarters in Japan to strictly assess every Hermès item recycled or consigned. To date, both overseas stores have earned the trust of customers and become one of the shops with the largest Hermès inventories at current market prices in the region. Through the constantly updated multilingual official online store and social media platforms, we provide Hermès enthusiasts worldwide with a free space to "discover your dream bag and let go of your beloved one." Here, Hermès experts with nearly 10 years of experience in Japan carefully select every Hermès item for you. With their lifetime of expertise and market-leading insight, they offer you precise guidance on recycling and consigning your Hermès items. Our professional team thoroughly understands market trends and fluctuations worldwide, recycling thousands of Hermès bags and accessories annually. In recent years, we have also introduced a number of personalized VIP services within the industry to better meet the diverse needs of customers in selling and purchasing Hermès items.':
                'RizzBags（リズバッグ）は、エルメスアイテムのリサイクル・買取・交換・販売に深く携わり、日本で確立された高級中古市場で確固たる地位を築き、「手の届くエルメスの聖域」として知られています。東京に本店を構え、数百点の中古・新品のエルメスバッグを常時豊富に取り揃えており、その半数以上はブティックでは入手困難な人気アイテムや、希少なコレクターズアイテムも含まれます。グローバル展開に力を入れており、世界中から質の高いアイテムを収集するだけでなく、世界中のエルメス愛好家にプロフェッショナルで心のこもったサービスを提供しています。RizzBagsは香港とシンガポールを含むアジアの主要3都市に店舗を展開し、各店舗には日本本社が任命したトップ鑑定士が在籍し、リサイクルや買取されるすべてのエルメスアイテムを厳正に評価しています。現在、海外店舗もお客様の信頼を得て、地域において時価で最大級のエルメス在庫を誇る店舗の一つとなりました。常に更新される多言語対応の公式オンラインストアとSMSを通じて、世界中のエルメス愛好家に「夢のバッグを見つけ、愛用バッグを手放す」自由な空間を提供しています。ここでは、日本で10年近い経験を持つエルメス専門家が、生涯にわたる専門知識と市場をリードする洞察力であなたのエルメスアイテムのリサイクル・買取を正確にガイドします。当社のプロフェッショナルチームは世界中の市場動向と変動を徹底的に理解し、年間数千点のエルメスバッグとアクセサリーをリサイクルしています。近年では、業界内でも数多くの個性的なVIPサービスを導入し、エルメスアイテムの販売・購入におけるお客様の多様なニーズによりよくお応えしています。',
            'Company Information': '会社情報',
            'Company Name': '会社名',
            'Date of Establishment': '設立日',
            Phone: '電話',
            '24-7 Kotobashi 4-chome,': '寿4丁目24-7',
            'Sumida-ku, Tokyo': '東京都墨田区',
            CEO: '最高経営責任者（CEO）',
            'Dorofeyev Vadim': 'ドロフェエフ ヴァディム (DOROFEYEV VADIM)',
            'Managing Partner': 'マネージングパートナー',
            'lei Kei': 'レイ・ケイ',
            'Representative Director': 'レイ・ケイ',

            'Yoon Young Gul': 'ユンヨンゴリ　尹榮杰',
            Capital: '資本',
            '5.15 million yen': '515万円',
            Employees: '従業員',
            'Business Contents': '事業内容',
            'Sales and purchase of antiquities': '古美術品の売買',
            'Import, processing, and sale of bags, precious metals, jewelry, watches, antiques, etc.': 'バッグ、貴金属、宝石、時計、骨董品等の輸入、加工、販売',
            'Information provision service and communication with the Internet': '情報提供サービスおよびインターネットによる通信',
        },
    },
};

i18n.use(initReactI18next) // Подключаем React-интеграцию
    .init({
        resources, // Ресурсы с переводами
        lng: 'en', // Язык по умолчанию
        fallbackLng: 'en', // Если перевод не найден, используем английский
        interpolation: {
            escapeValue: false, // Не экранировать HTML (если нужны теги в переводах)
        },
    });

export default i18n;
