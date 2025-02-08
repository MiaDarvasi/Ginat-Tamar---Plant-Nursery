export {
    herbs,
    crystals,
    galleryImages,
    vining,
    blooming,
    colorful,
    grafting,
    colorfulIndoor,
    strongIndoor,
    safeForPets,
    winter,
    bulb
}


// PAGES

const herbs = [
    { name: "לוונדר", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620195/lavender_g7mp4a.jpg", description: "לוונדר אוהב הרבה שמש ישירה כדי לצמוח בצורה טובה, ולכן כדאי למקם אותו במקום שטוף שמש במהלך רוב שעות היום." },
    { name: "מרווה", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620203/sage_oea6jx.jpg", description: "מרווה זקוקה לאדמה חולית ומנוקזת היטב. היא אוהבת שמש ויובש, ולכן תגדל היטב כל השנה בתנאים כאלה. בתנאי לחות, היא תהפוך לעונתית בלבד." },
    { name: "נענע", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620206/mint_eut4bt.jpg", description: "נענע דורשת שמש מלאה או חלקית, אדמה לחה אך מנוקזת היטב. אם מגדלים אותה באדניות, חשוב לדאוג לניקוז טוב כדי למנוע הצטברות מים ומחלות שורש." },
    { name: "גרניום ריחני", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620204/geranium_b5fgfr.jpg", description: "גרניום לימוני, צמח רב שנתי ריחני, גדל היטב בתנאי אקלים ים-תיכוני, סובטרופי וטרופי. עלי הצמח משמשים לחליטות ופרחיו הסגולים מושכים דבורים ודוחים את לבנן הכרוב." },
    { name: "פיגם", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620203/pigam_kuqao7.jpg", description: "רוטה, או פיגם, הוא צמח רב שנתי ריחני שגדל בתנאי אקלים ים-תיכוני, סובטרופי ומדברי. העלים חזקים וחתוכים, והפרחים הצהובים הקטנים טובים לשיקום קרקעות ולמשיכת פרפרים מזן זנב סנונית." },
    { name: "כוסברה", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620207/silantro_jdgbkc.jpg", description: "כוסברה, המשמש בתור צמח מאכל, גדל בתנאי אקלים ים-תיכוני, סובטרופי, ממוזג או מדברי. העלים ירוקים ומחורצים, והפרחים הלבנים הקטנים מושכים דבורים, בעוד שזרעיה אכילים ויכולים לשמש בבישול." },
    { name: "בבונג", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620209/babunag_iyg5sh.jpg", description: "קמומיל או בבונג הוא צמח עשבוני רב שנתי או חד-שנתי, תלוי בזן, המשמש כצמח נוי ומאכל. העלים דקים, ירוקים וריחניים, והפרחים הלבנים עם מרכז צהוב מושכים מאביקים." },
    { name: "אורגנו", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620204/oregano_cfad7h.jpg", description: "אורגנו, צמח רב שנתי ריחני, משמש כצמח מאכל וגדל בתנאי אקלים ים-תיכוני, סובטרופי, ממוזג ומדברי. העלים ירוקים אפרפרים, עם שני סוגי עלים, והפרחים הסגולים הקטנים גדלים בתפרחות." },
    { name: "זוטה לבנה", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620211/zuta_qmlxsz.jpg", description: "זוטה לבנה, צמח רב שנתי ריחני, משמש כצמח מאכל ועמיד ביובש. העלים קטנים, ריחניים וירוקים אפרפרים, והפרחים הלבנים הקטנים גדלים על עמודי פריחה." },
    { name: "טימין", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620208/thyme_ci9i3a.jpg", description: "קורנית (טימין) הוא צמח רב שנתי ריחני, משמש כצמח מאכל ויכול לגדול בתנאי אקלים ים-תיכוני, סובטרופי, ממוזג ומדברי, או כצמח בית. העלים ריחניים, קטנים בצבעים ירוק, ירוק עם צהוב או לבן, והפרחים הלבנים הקטנים גדלים בחלק העליון של עמודי הפריחה." },
    { name: "עירית", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620196/irit_kfs5sd.jpg", description: "עירית הוא צמח גאופיט רב שנתי, המשמש כצמח מאכל ונוי. עלי העירית אכילים עם טעם משתנה, והפרחים בצבעים סגול, ורוד או לבן יוצרים מקבץ כדורי. הבצל הקטן, לבן ואכיל, גדל בצפיפות בקולוניות." },
    { name: "חסה", imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736620195/lettuce_kmewyi.jpg", description: "חסה דורשת אדמה פורייה, מנוקזת היטב, ומקום עם חשיפה לשמש ישירה או חלקית. חשוב להשקות אותה באופן קבוע ולשמור על לחות גבוהה בשלב הגידול." },
]

const crystals = [
    {
        name: "אמטיסט",
        description: "מסייעת לפתיחת העין השלישית, מחדדת אינטואיציה, מקלה בזמן גמילה מהתמכרויות שונות. עוזרת לסובלים מכאבי ראש, פחדים ובעיות שינה. מעודדת יצירתיות ומאזנת גוף פיזי.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617859/amethyst_i4gjch.jpg"
    },
    {
        name: "רוזקוורץ",
        description: "״אבן האהבה״. מגבירה אהבה עצמית, מרגיעה, מובילה להרמוניה במערכות יחסים. טובה ללב בזמן משברים רגשיים. מעודדת אהדה וסובלנות כלפי הסביבה.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617862/rosequartz_fqmakr.jpg"
    },
    {
        name: "קארנליאן",
        description: "אבן של שמחה, יצירתיות ופוריות. ממריצה אנרגתית עוצמתית. מעודדת יצירתיות. מגבירה פוריות אצל שני בני הזוג. מגבירה אנאליטיות, דיוק והתמקדות במטרה.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617861/carnelian_fgklak.jpg"
    },
    {
        name: "קוורץ",
        description: "אבן הנחשבת למטהרת אנרגטית עוצמתית במיוחד. מגבירה תכונותיהן של אבנים הנמצאות בקרבתה. משמשת להגברת המודעות האישית. מטהרת ומנקה את סביבתה.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617861/quartz_cg9nfc.jpg"
    },
    {
        name: "ג׳אספר",
        description: "גורמת להיות מחושב יותר ולפעול מתוך הגיון בריא. ממגנטת שפע רב בכל התחומים. מחזקת תכונה של שלמות. עוזרת לתפקוד תקין של הלב והכבד.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617861/jasper_kgzeq7.jpg"
    },
    {
        name: "סיטרין",
        description: "״אבן הסוחרים״. מגבירה יצירתיות, שפע ופרנסה מחזקת את מערכת היחסים בתוך המשפחה. מחדדת זיכרון. מגבירה ביטחון עצמי. טובה למערכת השתן והכליות.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617861/citrine_uao7yq.jpg"
    },
    {
        name: "טייגר איי",
        description: "מגבירה ביטחון עצמי ויציבות. מרחיקה פחדים, חרדות ודכאונות. מחזקת את האינטלקט והמחשבה. מגבירה חיוביות. מאזנת בין הרוח והחומר אצל האדם.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617862/tigereye_s7vj71.jpg"
    },
    {
        name: "אמזונייט",
        description: "מחדדת זיכרון ומיקוד. מגבירה כישורי ריפויי אלטרנטיביים. משמשת כמאזן רגשי, תורמת להזרמת רגשות חיוביים לזולת. טובה לתפקוד הלב והריאות.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617848/amazonite_qz4hvl.jpg"
    },
    {
        name: "טורמלין שחור",
        description: "אבן המגנה מפני אנרגיות שליליות ונחשבת לחזקה מכולן בתחום זה. מקרקעת מודעות לגוף הפיזי ולרמת החומר. טובה לטיפול במערכת העיכול והכבד.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617862/tourmaline_tkqjhj.jpg"
    },
    {
        name: "גולדסטון",
        description: "אבן השמש. מגבירה יצירתיות ויצריות. מסייעת לכל הקשור לצ׳אקרת מקלעת השמש. ממריצה את אנרגיית החיים בגוף הפיזי. טובה לכל הקשור בכליות ומערכת השתן.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617861/goldstone_fpldox.jpg"
    },
    {
        name: "פיריט",
        description: "אבן האושר. מושכת שפע ופרנסה, מסייעת להצלחה בכל תחום. מקלה בזמני שינויים, יאוש, דיכאון, פחדים וחרדות. מסייעת בהעלאת המיטב בכל אחד. עוזרת לתפקוד מערכת העיכול.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617860/pyrite_psk4c2.jpg"
    },
    {
        name: "קלציט",
        description: "קלציט היא אבן מינרלית במגוון צבעים, שמסייעת בשינויים פיזיים, מחשבתיים ורגשיים. היא תומכת בתהליכי ריפוי, מרגיעה רגשות, ועוזרת בבעיות במפרקים, סחוסים ועצמות.",
        imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617861/calcite_ijgrkf.jpg"
    }
]

const galleryImages = [
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619075/galleryimg1_stdkrx.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619076/galleryimg2_b3rnou.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619079/galleryimg3_mkkgke.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619082/galleryimg4_lolxcu.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619085/galleryimg7_xzm5te.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619088/galleryimg6_pfyffw.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619089/galleryimg5_gq1hbq.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619090/galleryimg11_fzkci2.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619092/galleryimg9_u7qvpu.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619094/galleryimg10_y9nvez.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619095/galleryimg12_nqtbir.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619095/galleryimg14_iy4uhi.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619095/galleryimg15_fuyo7n.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619101/galleryimg17_pymlag.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619101/galleryimg13_zuntuk.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619104/galleryimg18_vhrgiy.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619107/galleryimg16_tnhqty.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619107/galleryimg19_xnrsui.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619108/galleryimg21_d60tro.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619112/galleryimg22_enodgh.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619114/galleryimg24_i4sjmg.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619114/galleryimg20_lpwpdq.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619115/galleryimg27_mmz3bl.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619116/galleryimg26_yldn3b.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619117/galleryimg23_yv0rc9.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619124/galleryimg32_au30g0.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619118/galleryimg25_ibqoar.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619127/galleryimg30_bqa0kz.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619127/galleryimg29_dtqqxb.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619128/galleryimg33_g3kayv.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619129/galleryimg31_ftcths.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619134/galleryimg28_szlffc.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619135/galleryimg36_aakrq6.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619135/galleryimg37_skhidy.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619136/galleryimg38_buldvd.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619138/galleryimg39_hfnvq1.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619137/galleryimg35_ccm8t3.jpg",
    "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619143/galleryimg40_ciwltk.jpg",
]

// SUCCULENTS

const vining = {
    title: "נשפכים",
    examples: [
        {
            name: "סנציו בננה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737396835/IMG_6569_gjnegx.jpg"
        },
        {
            name: "סביון כדורי",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737396823/IMG_6571_mmtwj5.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737396827/IMG_6572_ebttuz.jpg"
        },
        {
            name: "צורית",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737396836/IMG_6567_cgzprz.jpg"
        },
        {
            name: "קרסולה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737396828/IMG_6568_lbjhmb.jpg"
        },
        {
            name: "סטפליה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737396830/IMG_6597_vi43to.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737396836/IMG_6570_piugbp.jpg"
        }
    ]
}

const blooming = {
    title: "פורחים",
    examples: [
        {
            name: "הוורתיה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618677/PXL_20241209_101724643_2_lhwxtn.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619127/galleryimg30_bqa0kz.jpg"
        },
        {
            name: "סטפליה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618675/PXL_20241014_104531956_2_qjhkfr.jpg"
        },
        {
            name: "סטפליה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618684/PXL_20241002_123809295_2_brayal.jpg"
        },
        {
            name: "סטפליה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618679/PXL_20241212_090137097_ccenae.jpg"
        },
        {
            name: "סטפליה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619094/galleryimg10_y9nvez.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397558/IMG_8161_ei6snc.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397561/IMG_8158_s2xjnj.jpg"
        },
    ]
}

const colorful = {
    title: "צבעוניים ומיוחדים",
    examples: [
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618690/PXL_20241212_140151826_iypxzp.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618687/PXL_20241224_114827051_tzbwbx.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618687/PXL_20241220_125136546_rfcty5.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618683/PXL_20241212_140147909_3_qmfvbw.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618676/PXL_20241204_131740398_2_hc564x.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618676/PXL_20241203_134113581_2_r1fobo.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618679/PXL_20241204_131401508_2_wat6ms.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618678/PXL_20241204_113334762_fjisrm.jpg"
        },
    ]
}

const grafting = {
    title: "הרכבות",
    examples: [
       {
           name: "לא יודעת",
           imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397755/IMG_9654_mn5nav.jpg"
       },
       {
           name: "לא יודעת",
           imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397755/IMG_8285_xdpju4.jpg"
       },
       {
           name: "לא יודעת",
           imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397769/20180413_140037_aelxoq.jpg"
       },
       {
           name: "לא יודעת",
           imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397768/20180409_124146_cweftg.jpg"
       },
       {
           name: "לא יודעת",
           imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397770/20180625_155805_eubfoi.jpg"
       },
       {
           name: "לא יודעת",
           imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397773/20180625_154527_zoqsot.jpg"
       },
       {
           name: "לא יודעת",
           imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397773/20180625_154603_p6vnow.jpg"
       },
       {
           name: "לא יודעת",
           imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397777/20180625_155322_rr9amu.jpg"
       }
   ]
}

// INDOOR

const colorfulIndoor = {
    title: "צבעוניים",
    examples: [
        {
            name: "היפואסטיס",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946495/IMG_6609_qepum7.jpg"
        },
        {
            name: "אגלונמה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736948617/7D2FF512-AD28-4270-8E0F-8751AE7F7B21_2_qqsu94.jpg"
        },
        {
            name: "בגוניה רקס",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946494/IMG_9359_hu9mpa.jpg"
        },
        {
            name: "קלדיום",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946490/IMG_9326_opharh.jpg"
        },
        {
            name: "דרצנה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946487/IMG_1687_irlc3s.jpg"
        },
        {
            name: "פפרומיה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946466/F703AB8C-D6C8-4179-936C-E53A6A18E7E9_f8udbn.jpg"
        },
        {
            name: "שפלרה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946463/A3EC1100-2D26-4C73-BBAB-941EC1C0001D_ueez8w.jpg"
        },
        {
            name: "אנטוריום",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946462/FB3E0252-2E51-4DFE-BB5C-81AF1E259BF7_wkuntb.jpg"
        },
        {
            name: "קלתאה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946464/B5D30CEA-AE24-4388-9C17-F22EC6B6091B_gwuy24.jpg"
        },
    ]
}

const strongIndoor = {
    title: "ירוקים וחזקים",
    examples: [
        {
            name: "סנסיווריה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946491/IMG_9332_s0sc4e.jpg"
        },
        {
            name: "שרך בוסטון (מגוון)",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946489/IMG_9320_hnmoin.jpg"
        },
        {
            name: "מונסטרה דליסיוסה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946489/IMG_7650_dr0gr9.jpg"
        },
        {
            name: "דיפנבכיה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946466/BC31E5F1-652E-451B-AF79-FF7697729905_pw6asd.jpg"
        },
        {
            name: "רפידופורה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946460/8AE042FE-7FB9-4AC8-B1D6-5312408CB6E1_h4jkng.jpg"
        },
        {
            name: "פוטוס",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736948618/A3757410-9388-4FB6-A712-EB2E285C10E7_2_npvwmw.jpg"
        },
        {
            name: "דקל",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946459/990318C7-33F6-4E00-9B6B-ECDB0525E2ED_mmao1y.jpg"
        },
        {
            name: "סקינדפסוס פיקטוס",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946463/18E9B6DF-F183-4590-BA44-20A92BAD35BC_zq0wgn.jpg"
        },
    ]
}

const safeForPets = {
    title: "בטוחים לחיות מחמד",
    examples: [
        {
            name: "ירקה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737398683/IMG_6588_jfv8ly.jpg"
        },
        {
            name: "גוזמניה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737819286/IMG_7623_3_esqdzw.jpg"
        },
        {
            name: "קלתאה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737398702/IMG_6591_jo9xrc.jpg"
        },
        {
            name: "דקל",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737398700/IMG_6589_thk26t.jpg"
        },
        {
            name: "סחלב",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737400771/IMG_6601_ikdd5a.jpg"
        },
        {
            name: "וריזאה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737819285/IMG_7623_2_lgedqj.jpg"
        },
        {
            name: "שרך בוסטון",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737398671/IMG_6586_laxau5.jpg"
        },
        {
            name: "פפרומיה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737398691/IMG_6592_ugwppg.jpg"
        },
        {
            name: "שערות שולמית",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737398688/IMG_6593_ruz29w.jpg"
        },
        {
            name: "סיגלית אפריקאית",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737400776/IMG_6599_xrannw.jpg"
        },
        {
            name: "פפרומיה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737398701/IMG_6594_qrcunz.jpg"
        },
        {
            name: "סחלב",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737400774/IMG_6600_aieisp.jpg"
        },
        {
            name: "היפואסטיס",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1736946495/IMG_6609_qepum7.jpg"
        },
        {
            name: "דקל ננסי",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737398703/IMG_6595_oso3t9.jpg"
        }
    ]
}

// FLOWERS

const winter = {
    title: "פורחים בחורף",
    examples: [
        {
            name: "רקפת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737401809/IMG_6566_qmbabw.jpg"
        },
        {
            name: "סלסלי כסף",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737401833/IMG_6577_wa3mwc.jpg"
        },
        {
            name: "נמזיה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737401850/IMG_6580_mm54il.jpg"
        },
        {
            name: "חמציץ",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737401837/IMG_6604_mqg9ul.jpg"
        },
        {
            name: "חרצית",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737401840/IMG_6603_mundqc.jpg"
        },
        {
            name: "בקופה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737401817/IMG_6581_fqfpbe.jpg"
        },
        {
            name: "לובליה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737401843/IMG_6605_fozkfx.jpg"
        },
        {
            name: "אמנון ותמר",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737401837/IMG_6602_q0rw21.jpg"
        }
    ]
}

const bulb = {
    title: "פקעות",
    examples: [
        {
            name: "דליה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737402850/IMG_2491_m5px70.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737402843/IMG_2425_agovdn.jpg"
        },
        {
            name: "פעמוני שלג",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737402833/IMG_2323_qhtvno.jpg"
        },
        {
            name: "לא יודעת",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737402828/IMG_2279_l7ygvm.jpg"
        },
        {
            name: "יקינטון",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737402837/IMG_2484_dvoszn.jpg"
        },
        {
            name: "דליה",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737402850/IMG_2486_osx8bq.jpg"
        },
        {
            name: "נורית",
            imgSrc: "https://res.cloudinary.com/dn3rdygdn/image/upload/v1737402791/C29CF1E3-BBB9-4AC3-878F-F9CD219E6BF1_watrgz.jpg"
        }
    ]
}

