import * as vscode from 'vscode';

/**
 * 🚨 ULTIMATE Hakaret Kütüphanesi - 200+ Benzersiz Aşağılama 🚨
 */
const insultLibrary: { [lang: string]: { [key: string]: string[] } } = {
    'tr': {
        'syntax': [
            "Bu sözdizimi hatasını yapmak için özel bir eğitim mi aldın?",
            "Bilgisayar bile şu an 'bu ne saçmalık' diyor.",
            "Parantezleri kapatmayı unutmak... İlkokul terk misin?",
            "Syntax hatası mı? 1970'lerden mi geliyorsun?",
            "Bu kodu bir patates mi yazdı?",
            "Klavyeye kafa mı attın yoksa gerçekten böyle mi yazmak istedin?",
            "Noktalı virgül eksik. Senin de hayata dair heyecanın eksik sanırım?",
            "Kodun o kadar bozuk ki, compiler bile 'yok artık' dedi.",
            "O parantezi kapatmadığın her saniye bir server eriyor.",
            "Şu syntax hatasına bak... Gözlerim kanıyor.",
            "Kod yazmayı bırak, boyama kitabı falan al kendine.",
            "Syntax error değil, bu resmen bir 'akıl tutulması'.",
            "Sözdizimi kurallarını sen mi yazdın? Çünkü hiçbiri tutmuyor.",
            "Bu kod çalışırsa ben de kendimi sileceğim.",
            "Syntax o kadar dramatik ki, opera binasında sergilenmeli.",
            "Klavyendeki '}' tuşu mu bozuk yoksa sadece tembel misin?",
            "Senin yazdığın syntax ile ancak hesap makinesi bozulur.",
            "Bu hatayı düzeltmek yerine mesleği bırakmayı düşündün mü?",
            "Kodun dili olsa da sana küfretse keşke.",
            "Syntax hatası yapmak senin hobin galiba?",
            "Bir parantez, bir umut... Ama sende ikisi de yok.",
            "Compiler şu an seninle dalga geçiyor, duyabiliyor musun?",
            "Bunu yazarken hiç mi utanmadın?",
            "Parantez açmayı biliyorsun ama kapama özürlüsün galiba?",
            "Bu syntax hatasıyla tarihe geçeceksin, ama kötü anlamda.",
            "Kodun o kadar karmaşık ki, kuantum bilgisayarı bile donar.",
            "Syntax hatası değil, bu bir 'sanat' eseri (soyut sanat).",
            "Bir virgül eksik diye ağlıyorsun ama asıl eksik senin mantığın.",
            "Hata mesajını oku demiyorum, direkt kodu sil bence.",
            "Syntax o kadar rezil ki, linter bile pes etti.",
            "Kodu yazarken uyuyor muydun?",
            "Bu syntax hatasıyla ancak tost makinesi yakarsın.",
            "Bence sen klavyeyi sat, daha az zarar verirsin dünyaya.",
            "Syntax hatası senin göbek adın olmuş.",
            "Bir insanın syntax hatası yapma limiti olmalı, sen o limiti aştın."
        ],
        'unused': [
            "Kullanmayacağın değişkeni neden tanımlıyorsun? Evinde de mi çöp biriktiriyorsun?",
            "Bu değişken şu an hayat amacını sorguluyor: 'Neden varım?'",
            "Gereksiz değişkenler... Tıpkı şu anki kodlama yeteneğin gibi.",
            "O değişken orada emekli olmayı bekliyor. Kullan ya da sil!",
            "Belleği (RAM) böyle harcayacaksan git Chrome falan yaz bari.",
            "Değişkeni tanımladın, unuttun... Tıpkı şu anki emeklerin gibi boşa gidiyor.",
            "Kodun içindeki bu gereksiz satırlar kalabalık yapıyor, aynı senin gibi.",
            "Tanımlayıp kullanmamak mı? Sen tam bir kaynak israfısın.",
            "O değişkenin yerinde olsam kendimi imha ederdim.",
            "Unused variable değil, bu resmen bir dram.",
            "Değişken şu an 'beni neden yarattın zalim!' diyor.",
            "CPU'ya yazık, bu saçmalıkları okumak zorunda kalıyor.",
            "Kodun yarısı 'boşta'. Senin gibi.",
            "Gereksiz değişkenleri temizle, dünyayı bir yükten kurtar.",
            "O değişkenin ömrü, senin kodlama kariyerinden daha uzun olacak.",
            "RAM senin babanın malı mı? Sil şu gereksizleri.",
            "Kullanılmayan değişken = Boşa harcanan oksijen (senin için).",
            "Kodun içindeki o ölü satırlar kokmaya başladı.",
            "Zaten her şeyin yarım kalıyor, bari değişkenlerini kullan.",
            "Tanımla ama dokunma... Tam bir korkak işi.",
            "Bellekte gereksiz yer kaplayan o değişken sensin galiba?",
            "O satırı silince projenin hızı %200 artacak, eminim."
        ],
        'type': [
            "Tür (Type) eşleşmiyor. Tıpkı senin ve 'yazılımcı' ünvanının eşleşmediği gibi.",
            "TypeScript seni kurtarmaya çalışıyor ama sen hala direniyorsun.",
            "String beklerken Number göndermek... Cesaretine hayran kaldım.",
            "TypeScript ağlıyor şu an, görmüyor musun?",
            "Türlerin o kadar karışık ki, JavaScript bile ne yapacağını şaşırdı.",
            "Ya sayı gir ya metin gir, ikisini karıştırıp 'bulamaç' mı yapıyorsun?",
            "Tip güvenliği (Type Safety) senin için bir masal galiba?",
            "Senden yazılımcı olur mu bilmiyorum ama türlerden anlamadığın kesin.",
            "Metin bekleyen yere rakam yazmak... Tam bir deha dokunuşu(!)",
            "TypeScript'i icat eden adam şu an istifasını yazıyor.",
            "Tür hatası değil, bu bir medeniyet kaybı.",
            "Türlerin arasındaki uyumu, seninle akıl sağlığın arasındaki uyuma benzetiyorum.",
            "TypeScript seni uyardığında 'biliyorum' diyorsun ama hiçbir şey bildiğin yok.",
            "Bu değişkenin tipi 'Error' olmalıydı, çünkü baştan aşağı hatasın.",
            "Zaten tipin (type) de pek güven vermemişti.",
            "Any kullanıp geçince kendini hacker mı sanıyorsun?",
            "Türler birbirine girmiş, senin kafan gibi.",
            "Number mı? String mı? Yoksa sadece saçmalık mı?",
            "Tür uyumsuzluğu: Senin hayallerin ve gerçekler gibi.",
            "TypeScript olmasa kodun şu an patlamıştı.",
            "Tür hatasından önce karakter hatanı düzeltsen mi?",
            "Metin ve sayı arasındaki farkı öğrenmek için 1. sınıfa dön."
        ],
        'generic': [
            "StackOverflow bile şu an senden utanıyor.",
            "Terry Davis'e mezarında takla attırdın. Tebrikler! Yazlımcılığı bırakta akrobasi öğretmeni ol.",
            "Richard Stallman bile senin projenin özgür olmasını istemiyor, Bu kod gün yüzüne çıkmamalı! diyor.",
            "Bence sen kod yazmayı bırakıp bahçıvanlığa başlamalısın.",
            "Kodu yazdın mı yoksa klavyenin üzerine kedi mi oturdu?",
            "Kodun o kadar kötü ki, işlemci ısınmıyor, utancından yanıyor.",
            "Senin yazdığın kodu ChatGPT bile düzeltemez, o kadar umutsuz vaka.",
            "Bu hata mesajı senin hakkında çok şey söylüyor, hepsi de kötü.",
            "AI dünyayı ele geçirecek diyorlar, senin kodunu görseler vazgeçerler.",
            "Kodlama bir yetenek işidir, yani senin yapamayacağın bir iş.",
            "Bu hatayı yapmayı başardığın için sana plaket vermeleri lazım.",
            "Ekrana bakıp hata bulmaya çalışıyorsun ya... En büyük hata sensin.",
            "Seni işe alan ik'cı şu an kendi kariyerini sorguluyor.",
            "Bug değil bu, senin kodun komple bir virüs gibi.",
            "Dünya nüfusu 8 milyar ama bu hatayı sadece sen yapabilirdin.",
            "Sen kod yazınca silikon vadisinde bir ağaç kuruyor.",
            "Bu projeyi bitirmeye çalışma, vakit kaybı.",
            "Kodun o kadar rezil ki, bilgisayar kendi kendini formatlayacak.",
            "Senin yazdığın kodu görseler interneti kapatırlar.",
            "Klavye kullanmayı biliyorsun ama beyin kullanmayı unutmuşsun.",
            "Hata ayıklamak yerine eklentinin hakaretlerini okuyorsun, zavallısın.",
            "Senin kodunu okumaktansa mermer kemirmeyi tercih ederim.",
            "Geliştirici misin yoksa rastgele tuşlara basan bir bot mu?",
            "Senin kodun, teknoloji tarihinin en büyük kara lekesi.",
            "Bu kod çalışırsa ben de bir tost makinesiyim.",
            "Gözlerim kanıyor, lütfen daha fazla yazma.",
            "Kodun o kadar yavaş ki, veriler posta güverciniyle daha hızlı gider.",
            "Her satırın bir hayal kırıklığı.",
            "Kod yazmak seni yoruyorsa bırak, bizi de yorma.",
            "Senin kodunu inceleyen kıdemli yazılımcı şu an emeklilik dilekçesi veriyor.",
            "Biraz daha uğraşırsan interneti komple çökirtebilirsin.",
            "Kodun ruhu gitmiş, sadece cesedi kalmış.",
            "Senin yazdığın her fonksiyon, bilgisayar bilimlerine bir hakaret.",
            "Yazılım dünyasının yüz karası.",
            "Kodun o kadar anlamsız ki, şifreli mesaj sanıp istihbarat incelemeye aldı.",
            "Zekanı koduna yansıt desem ekranda hiçbir şey görmezdik.",
            "Senin kodun, bugların kutsal toprağı.",
            "Hata mesajlarını koleksiyon mu yapıyorsun?",
            "Yazılım dünyasından bir yıldız daha kaydı... Ama bu hiç parlamamıştı.",
            "Kodu silsen projenin kalitesi artar.",
            "Senin kodunu görmek, pazartesi sabahı gibi.",
            "Senin kodunu derlemek, bir suç işlemek gibi hissettiriyor.",
            "Algoritma kurmayı öğrenmek yerine neden hala yaşıyorsun?",
            "Bu projenin tek özelliği, senin ne kadar kötü olduğunu kanıtlaması.",
            "Senin kodun, bugların başkenti.",
            "Terminal bile sana acıyor şu an.",
            "Kodu yazdın ama çalıştıramıyorsun, tıpkı hayatın gibi.",
            "Bug ayıklamaya gelince bir dahisin, ama bug yaratmaya gelince Allahsın.",
            "Senin kodun, işlemcinin intihar sebebi.",
            "Kodun o kadar karanlık ki, ışık bile kaçamıyor.",
            "Bence sen git limon sat, en azından dürüst bir iş olur.",
            "Senin kodunu gören bir daha yazılım yapmaz.",
            "Kodu Github'a değil, Dark Web'e yükle, orada bile daha iyisidir.",
            "Senin kodun, dijital bir kâbus."
        ]
    },
    'en': {
        'syntax': [
            "Did you take special classes to fail this hard at syntax?",
            "Even the computer is saying 'what is this nonsense?'",
            "Forgetting to close braces... Did you skip kindergarten?",
            "Syntax error? Are you coding from the 1970s?",
            "Did a potato write this code?",
            "Did you headbutt the keyboard or was this intentional?",
            "Missing a semicolon. Just like your excitement for life, I guess?",
            "Your syntax is so bad, the compiler filed for divorce.",
            "Every time you miss a brace, a server dies.",
            "Who taught you to code? A toaster?",
            "This isn't syntax, this is a tragedy.",
            "Even my grandma would find this missing bracket.",
            "Did you sneeze while typing this?",
            "Syntax disaster.",
            "Missing braces, missing brain?",
            "Is it hard to close a bracket?",
            "Keyboard's fine, but your typing isn't.",
            "Linter gave up on you.",
            "You missed a bracket, again."
        ],
        'unused': [
            "Why define a variable you won't use? Do you hoard trash at home too?",
            "This variable is questioning its life purpose: 'Why do I exist?'",
            "Useless variables... Just like your current coding skills.",
            "That variable is waiting for retirement. Use it or lose it!",
            "Hoarding unused variables doesn't make you smart.",
            "Resource waste alert! Delete that unused variable.",
            "It's sitting there doing nothing. Just like you.",
            "Trash collector mode: ON.",
            "Useless line.",
            "Why define it?",
            "Variable is lonely, use it.",
            "Your memory is filled with junk."
        ],
        'type': [
            "Types don't match. Just like you and the title 'developer' don't match.",
            "TypeScript is trying to save you, but you keep resisting.",
            "Passing a Number when a String is expected... Brave but foolish.",
            "TypeScript is crying right now, can't you see?",
            "Type safety is not just a suggestion, you know?",
            "Go back to JavaScript if you hate types so much.",
            "Your logic has more holes than a Swiss cheese.",
            "Type mismatch.",
            "TypeScript is crying.",
            "Stop using Any.",
            "Types aren't compatible, just like us.",
            "Error: Logic not found."
        ],
        'generic': [
            "Even StackOverflow is ashamed of you right now.",
            "You made Terry Davis do somersaults in his grave. Congratulations! Quit programming and become an acrobatics teacher.",
            "Even Richard Stallman does not wants your software to become free. He says: No one should see this shit!",
            "I think you should quit coding and start gardening.",
            "Did you write this code or did a cat walk over your keyboard?",
            "Your code is so bad, the CPU isn't heating up—it's burning with shame.",
            "Even ChatGPT couldn't fix your code, you're a hopeless case.",
            "Error messages are your only friends at this point.",
            "Maybe try something easier? Like staring at a wall?",
            "You are the reason they added a 'report' button on Github.",
            "Silicon Valley is shaking... from laughter after seeing your code.",
            "Quit coding.",
            "Go sell potatoes.",
            "CPU is embarrassed.",
            "Your code is a joke.",
            "Google it, before I lose it.",
            "You are a disappointment to all processors.",
            "Even AI won't steal your job, it's too bad.",
            "Worst code of the week nominee.",
            "Is this a dare? To write the worst code?",
            "Delete the project, start fresh. Or don't."
        ]
    }
};

const UI_TEXTS: { [lang: string]: any } = {
    'tr': {
        'sorry': "Özür Dilerim",
        'cry': "Ağla",
        'ok': "Tamam Bra",
        'sorry_reply': "Hatalarını düzelterek kanıtla, lafla değil. Kodlama bir sanat, sen ise duvara çarpan bir kamyonsun.",
        'cry_reply': "Hem yeteneksizsin hem de saygısız. Tam bir kombinasyon! Gözyaşlarını koduna akıtma, kısa devre yapacak.",
        'shame_counter': "Utanç Sayacı",
        'skill_level': "Seviye",
        'levels': ["Yetenekli", "Gelişmesi Lazım", "Yetersiz", "Yerlerde", "Umutsuz Vaka"],
        'prefix_kibar': "[Nazik Uyarı] ",
        'prefix_savage': "🚨 [KOD FACİASI] 🚨: ",
        'manage_title': "CodeInsult Yönetimi",
        'manage_reset': "Reset Shame Counter (Utancını Temizle)",
        'manage_level': "Change Insult Level (Zorbalık Seviyesini Değiştir)",
        'manage_lang': "Change Language (Dili Değiştir)",
        'reset_msg': "Utancın temizlendi... Ama biz unutmayacağız.",
        'choose_level': "Zorbalık Seviyesi Seç",
        'choose_lang': "Dil Seç"
    },
    'en': {
        'sorry': "I'm Sorry",
        'cry': "Cry About It",
        'ok': "OK Bro",
        'sorry_reply': "Prove it by fixing your errors, not with words.",
        'cry_reply': "Incompetent and disrespectful!",
        'shame_counter': "Shame Counter",
        'skill_level': "Level",
        'levels': ["Skilled", "Needs Work", "Incompetent", "Rock Bottom", "Hopeless Case"],
        'prefix_kibar': "[Polite Warning] ",
        'prefix_savage': "🚨 [CODE DISASTER] 🚨: ",
        'manage_title': "CodeInsult Management",
        'manage_reset': "Reset Shame Counter",
        'manage_level': "Change Insult Level",
        'manage_lang': "Change Language",
        'reset_msg': "Shame cleared.",
        'choose_level': "Choose Insult Level",
        'choose_lang': "Choose Language"
    }
};

let lastInsultTime = 0;
const INSULT_COOLDOWN = 10000;
let shameCounter = 0;
let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    shameCounter = context.globalState.get<number>('shameCounter', 0);
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'code-insult.manage';
    updateStatusBar();
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);

    const manageCommand = vscode.commands.registerCommand('code-insult.manage', async () => {
        const lang = getCurrentLang();
        const texts = UI_TEXTS[lang];
        const options = [
            { label: `$(trash) ${texts.manage_reset}`, action: 'reset' },
            { label: `$(zap) ${texts.manage_level}`, action: 'level' },
            { label: `$(globe) ${texts.manage_lang}`, action: 'lang' }
        ];
        const selected = await vscode.window.showQuickPick(options, { title: texts.manage_title });
        if (selected?.action === 'reset') {
            shameCounter = 0;
            context.globalState.update('shameCounter', 0);
            updateStatusBar();
            vscode.window.showInformationMessage(texts.reset_msg);
        } else if (selected?.action === 'level') {
            const levels = ["Kibar", "Sert", "Psikolojik Şiddet"];
            const choice = await vscode.window.showQuickPick(levels, { placeHolder: texts.choose_level });
            if (choice) {
                await vscode.workspace.getConfiguration('codeInsult').update('insultLevel', choice, true);
                updateStatusBar();
            }
        } else if (selected?.action === 'lang') {
            const langs = ["Auto", "Turkish", "English"];
            const choice = await vscode.window.showQuickPick(langs, { placeHolder: texts.choose_lang });
            if (choice) {
                await vscode.workspace.getConfiguration('codeInsult').update('language', choice, true);
                updateStatusBar();
            }
        }
    });

    const diagnosticListener = vscode.languages.onDidChangeDiagnostics(async (event: vscode.DiagnosticChangeEvent) => {
        const currentTime = Date.now();
        if (currentTime - lastInsultTime < INSULT_COOLDOWN) return;

        for (const uri of event.uris) {
            const diagnostics = vscode.languages.getDiagnostics(uri);
            const errors = diagnostics.filter((d: vscode.Diagnostic) => d.severity === vscode.DiagnosticSeverity.Error);

            if (errors.length > 0) {
                shameCounter += errors.length;
                context.globalState.update('shameCounter', shameCounter);
                updateStatusBar();

                const lang = getCurrentLang();
                const insults = insultLibrary[lang];
                if (!insults) return;

                const firstError = errors[0];
                const msg = firstError.message.toLowerCase();
                let category = 'generic';

                if (msg.includes('syntax') || msg.includes('expected')) category = 'syntax';
                else if (msg.includes('unused') || msg.includes('never read')) category = 'unused';
                else if (msg.includes('type') || msg.includes('assignable')) category = 'type';

                const texts = UI_TEXTS[lang];
                const insultList = insults[category];
                const randomInsult = insultList[Math.floor(Math.random() * insultList.length)];

                lastInsultTime = Date.now();

                const config = vscode.workspace.getConfiguration('codeInsult');
                const level = config.get('insultLevel');
                let prefix = "[CodeInsult] ";
                let useErrorMessage = true;

                if (level === "Psikolojik Şiddet") prefix = texts.prefix_savage;
                else if (level === "Kibar") {
                    prefix = texts.prefix_kibar;
                    useErrorMessage = false;
                }

                const fullMessage = `${prefix}${randomInsult}`;

                let action: string | undefined;
                if (useErrorMessage) {
                    action = await vscode.window.showErrorMessage(fullMessage, texts.sorry, texts.cry);
                } else {
                    action = await vscode.window.showInformationMessage(fullMessage, texts.ok);
                }

                if (action === texts.sorry) {
                    vscode.window.showInformationMessage(texts.sorry_reply);
                } else if (action === texts.cry) {
                    vscode.window.showWarningMessage(texts.cry_reply);
                }

                break;
            }
        }
    });

    context.subscriptions.push(manageCommand, diagnosticListener);
}

function getCurrentLang(): string {
    const config = vscode.workspace.getConfiguration('codeInsult');
    const selectedLang = config.get<string>('language') || 'Auto';
    if (selectedLang === 'Turkish') return 'tr';
    if (selectedLang === 'English') return 'en';
    const vscodeLang = vscode.env.language.toLowerCase();
    if (vscodeLang.includes('tr') || vscodeLang.includes('tur')) return 'tr';
    return 'en';
}

function updateStatusBar() {
    if (!statusBarItem) return;
    const lang = getCurrentLang();
    const texts = UI_TEXTS[lang];
    if (!texts) return;
    let skillIndex = 0;
    if (shameCounter > 100) skillIndex = 4;
    else if (shameCounter > 50) skillIndex = 3;
    else if (shameCounter > 20) skillIndex = 2;
    else if (shameCounter > 0) skillIndex = 1;
    const skillLevel = texts.levels[skillIndex];
    statusBarItem.text = `$(warning) ${texts.shame_counter}: ${shameCounter} | ${texts.skill_level}: ${skillLevel}`;
    statusBarItem.tooltip = lang === 'tr' ? "Yönetmek için tıkla" : "Click to manage";
    if (shameCounter > 0) {
        statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.errorBackground');
    } else {
        statusBarItem.backgroundColor = undefined;
    }
}

export function deactivate() { }
