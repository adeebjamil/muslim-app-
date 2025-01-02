import React from 'react';
import Slider from "react-slick";
// Import FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from Font Awesome
import { faQuran, faHandsPraying, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DuaCards = () => {
  // List of Duas
  const duas = [
    {
      title: "Surah Al-Fatiha (1:1-7)",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَٰنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      urdu: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nتمام تعریفیں اللہ ہی کے لیے ہیں، جو تمام جہانوں کا پروردگار ہے۔\nجو بہت مہربان، نہایت رحم کرنے والا ہے۔\nروزِ جزا کا مالک ہے۔\nہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد چاہتے ہیں۔\nہمیں سیدھے راستے پر چلا۔\nان لوگوں کا راستہ جن پر تو نے انعام کیا، نہ کہ ان کا جن پر تیرا غضب ہوا اور نہ ہی گمراہوں کا۔",
      english: "In the name of Allah, the Most Gracious, the Most Merciful.\nAll praise is due to Allah, Lord of all the worlds.\nThe Most Gracious, the Most Merciful.\nMaster of the Day of Judgment.\nIt is You we worship and You we ask for help.\nGuide us to the straight path.\nThe path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray.",
      icon: faQuran
    },
    {
      title: "Du'a of Adam (AS)",
      arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ\n(Surah Al-A'raf 7:23)",
      urdu: "اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا، اور اگر تو نے ہمیں معاف نہ کیا اور ہم پر رحم نہ فرمایا، تو یقیناً ہم نقصان اٹھانے والوں میں سے ہو جائیں گے۔\n(سورۃ الاعراف 7:23)",
      english: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.\n(Surah Al-A'raf 7:23)",
      icon: faHandsPraying
    },
    {
      title: "Du'a of Nuh (AS)",
      arabic: "رَبِّ ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِمَن دَخَلَ بَيْتِىَ مُؤْمِنًۭا وَلِلْمُؤْمِنِينَ وَٱلْمُؤْمِنَٰتِ\n(Surah Nuh 71:28)",
      urdu: "اے میرے رب! مجھے اور میرے والدین کو اور جو میرے گھر میں ایمان لے کر آئے ہیں اور ایمان والے مردوں اور ایمان والی عورتوں کو معاف فرما۔\n(سورۃ نوح 71:28)",
      english: "My Lord, forgive me and my parents and whoever enters my house a believer and the believing men and believing women.\n(Surah Nuh 71:28)",
      icon: faStar
    },
    {
      title: "Du'a of Musa (AS)",
      arabic: "رَبِّ ٱشْرَحْ لِى صَدْرِى وَيَسِّرْ لِىٓ أَمْرِى\n(Surah Ta-Ha 20:25-26)",
      urdu: "میرے رب! میرے سینے کو کھول دے اور میرے کام کو آسان کر دے۔\n(سورۃ طہٰ 20:25-26)",
      english: "My Lord, expand for me my chest [with assurance]. And ease for me my task.\n(Surah Ta-Ha 20:25-26)",
      icon: faStar
    },
    {
      title: "Du'a of Ibrahim (AS)",
      arabic: "رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِىۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ\n(Surah Ibrahim 14:40)",
      urdu: "اے ہمارے رب! مجھے نماز قائم کرنے والا اور میری اولاد کو بھی نماز قائم کرنے والا بنا، اے ہمارے رب! ہماری دعائیں قبول فرما۔\n(سورۃ ابراہیم 14:40)",
      english: "My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, accept my supplication.\n(Surah Ibrahim 14:40)",
      icon: faHeart
    },
    {
      title: "Du'a of the Believers",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ\n(Surah Al-Baqarah 2:201)",
      urdu: "اے ہمارے رب! ہمیں دنیا میں بھی بھلا ئی دے اور آخرت میں بھی بھلا ئی دے، اور ہمیں آگ کے عذاب سے بچا۔\n(سورۃ البقرہ 2:201)",
      english: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good, and protect us from the punishment of the Fire.\n(Surah Al-Baqarah 2:201)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Guidance (Surah Al-Fatiha)",
      arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
      urdu: "ہمیں سیدھے راستے پر چلا۔",
      english: "Guide us to the straight path.",
      reference: "Surah Al-Fatiha (1:6)",
      icon: faQuran
    },
    {
      title: "Du'a for Good in Both Worlds",
      arabic: "رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْـَٔاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ",
      urdu: "اے ہمارے رب! ہمیں دنیا میں بھی بھلا ئی دے اور آخرت میں بھی بھلا ئی دے، اور ہمیں آگ کے عذاب سے بچا۔",
      english: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good, and protect us from the punishment of the Fire.",
      reference: "Surah Al-Baqarah (2:201)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Patience",
      arabic: "رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًۭا وَثَبِّتْ أَقْدَامَنَا وَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ",
      urdu: "اے ہمارے رب! ہم پر صبر نازل فرما اور ہمارے قدموں کو جما دے اور ہمیں کفار پر فتح عطا فرما۔",
      english: "Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.",
      reference: "Surah Al-Baqarah (2:250)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Forgiveness",
      arabic: "رَبِّ ٱغْفِرْ وَٱرْحَمْ وَأَنتَ خَيْرُ ٱلرَّٰحِمِينَ",
      urdu: "میرے رب! معاف فرما دے اور رحم فرما، اور تو سب سے بہتر رحم کرنے والا ہے۔",
      english: "My Lord, forgive and have mercy, and You are the best of the merciful.",
      reference: "Surah Al-Mu'minun (23:118)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Protection from Hellfire",
      arabic: "رَبَّنَآ ٱصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا",
      urdu: "اے ہمارے رب! ہمیں جہنم کے عذاب سے بچا، بے شک اس کا عذاب دائمی ہے۔",
      english: "Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering.",
      reference: "Surah Al-Furqan (25:65)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Ease in Affairs",
      arabic: "حَسْبِىَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَۖ عَلَيْهِ تَوَكَّلْتُۖ وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ",
      urdu: "مجھے اللہ ہی کافی ہے، کوئی معبود نہیں سوائے اس کے، اسی پر میں نے بھروسہ کیا، اور وہ عرش عظیم کا رب ہے۔",
      english: "Sufficient for me is Allah; there is no deity except Him. On Him I rely, and He is the Lord of the Great Throne.",
      reference: "Surah At-Tawbah (9:129)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Increased Knowledge",
      arabic: "رَّبِّ زِدْنِى عِلْمًا",
      urdu: "میرے رب! میرے علم میں اضافہ فرما۔",
      english: "My Lord, increase me in knowledge.",
      reference: "Surah Ta-Ha (20:114)",
      icon: faQuran
    },
    {
      title: "Du'a for a Good End",
      arabic: "رَبَّنَآ أَتْمِمْ لَنَا نُورَنَا وَٱغْفِرْ لَنَآ إِنَّكَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ",
      urdu: "اے ہمارے رب! ہمارے لئے ہمارے نور کو مکمل کر دے اور ہمیں معاف فرما، بے شک تو ہر چیز پر قادر ہے۔",
      english: "Our Lord, complete for us our light and forgive us. Indeed, You are over all things competent.",
      reference: "Surah At-Tahrim (66:8)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Steadfastness",
      arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةًۭۚ إِنَّكَ أَنتَ ٱلْوَهَّابُ",
      urdu: "اے ہمارے رب! ہمارے دلوں کو ہدایت کے بعد ٹیڑھا نہ کر، اور ہمیں اپنی طرف سے رحمت عطا فرما، بے شک تو بہت بڑا عطا کرنے والا ہے۔",
      english: "Our Lord, do not let our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
      reference: "Surah Aal-E-Imran (3:8)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Entry into Paradise",
      arabic: "رَبَّنَآ وَأَدْخِلْهُمْ جَنَّٰتِ عَدْنٍ ٱلَّتِى وَعَدتَّهُمْ",
      urdu: "اے ہمارے رب! انہیں دائمی باغات میں داخل فرما جن کا تو نے ان سے وعدہ کیا ہے۔",
      english: "Our Lord, and admit them to gardens of perpetual residence which You have promised them.",
      reference: "Surah Ghafir (40:8)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Protection from Shirk",
      arabic: "وَٱجْنُبْنِى وَبَنِىَّ أَن نَّعْبُدَ ٱلْأَصْنَامَ",
      urdu: "اور مجھے اور میری اولاد کو بتوں کی عبادت سے بچا۔",
      english: "And keep me and my sons away from worshiping idols.",
      reference: "Surah Ibrahim (14:35)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Relief from Hardship",
      arabic: "لَآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ",
      urdu: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ظالموں میں سے ہوں۔",
      english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
      reference: "Surah Al-Anbiya (21:87)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Good Spouses and Offspring",
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَٰجِنَا وَذُرِّيَّٰتِنَا قُرَّةَ أَعْيُنٍۢ وَٱجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      urdu: "اے ہمارے رب! ہمیں ہمارے ازواج اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما، اور ہمیں متقیوں کا امام بنا۔",
      english: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
      reference: "Surah Al-Furqan (25:74)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Forgiveness and Mercy",
      arabic: "رَبِّ ٱغْفِرْ لِى وَلِوَٰلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ",
      urdu: "اے میرے رب! مجھے اور میرے والدین کو اور ایمان والوں کو حساب کے دن معاف فرما۔",
      english: "My Lord, forgive me and my parents and the believers the Day the account is established.",
      reference: "Surah Ibrahim (14:41)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Victory",
      arabic: "ٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ",
      urdu: "ہمیں کفار پر فتح عطا فرما۔",
      english: "Grant us victory over the disbelieving people.",
      reference: "Surah Al-Baqarah (2:286)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Strength",
      arabic: "وَٱللهُ غَالِبٌ عَلَىٰٓ أَمْرِهِ",
      urdu: "اور اللہ اپنے امر پر غالب ہے۔",
      english: "Allah is predominant over His affair.",
      reference: "Surah Yusuf (12:21)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Protection from Oppressors",
      arabic: "وَأَجِرْنَا مِنَ ٱلْقَوْمِ ٱلظَّٰلِمِينَ",
      urdu: "اور ہمیں ظالم لوگوں سے بچا۔",
      english: "And save us from the wrongdoing people.",
      reference: "Surah Al-A'raf (7:47)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Help Against the Enemy",
      arabic: "رَبِّ ٱنصُرْنِى عَلَى ٱلْقَوْمِ ٱلْمُفْسِدِينَ\n(Surah Al-Ankabut 29:30)",
      urdu: "اے میرے رب! مجھے فساد کرنے والی قوم پر غلبہ عطا فرما۔\n(سورۃ العنکبوت 29:30)",
      english: "My Lord, support me against the corrupting people.\n(Surah Al-Ankabut 29:30)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Success",
      arabic: "رَبِّ ٱجْعَلْنِى مِنَ ٱلْمُفْلِحِينَ\n(Surah An-Naml 27:19)",
      urdu: "اے میرے رب! مجھے کامیاب لوگوں میں شامل فرما۔\n(سورۃ النمل 27:19)",
      english: "My Lord, make me among the successful.\n(Surah An-Naml 27:19)",
      icon: faStar
    },
    {
      title: "Du'a for Family Reunification",
      arabic: "رَبِّ ٱرْجِعُونِ\n(Surah Al-Mu'minun 23:99)",
      urdu: "اے میرے رب! مجھے میرے خاندان میں واپس لوٹا دے۔\n(سورۃ المؤمنون 23:99)",
      english: "My Lord, return me to [my family].\n(Surah Al-Mu'minun 23:99)",
      icon: faHeart
    },
    {
      title: "Du'a for Good Speech",
      arabic: "وَٱحْلُلْ عُقْدَةًۭ مِّن لِّسَانِى\n(Surah Ta-Ha 20:27)",
      urdu: "اور میری زبان کی گرہ کھول دے۔\n(سورۃ طہٰ 20:27)",
      english: "And untie the knot from my tongue.\n(Surah Ta-Ha 20:27)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Entering Paradise",
      arabic: "رَبِّ أَدْخِلْنِى مُدْخَلَ صِدْقٍۢ وَأَخْرِجْنِى مُخْرَجَ صِدْقٍۢ\n(Surah Al-Isra 17:80)",
      urdu: "اے میرے رب! مجھے سچائی کے ساتھ داخل فرما اور سچائی کے ساتھ باہر نکال۔\n(سورۃ الاسراء 17:80)",
      english: "My Lord, cause me to enter a sound entrance and to exit a sound exit.\n(Surah Al-Isra 17:80)",
      icon: faHeart
    },
    {
      title: "Du'a for Perseverance",
      arabic: "فَصَبْرٌۭ جَمِيلٌۭ\n(Surah Yusuf 12:18)",
      urdu: "پس صبر جمیل۔\n(سورۃ یوسف 12:18)",
      english: "So patience is most fitting.\n(Surah Yusuf 12:18)",
      icon: faHandsPraying
    },
    {
      title: "Du'a for Trust in Allah",
      arabic: "عَلَيْهِ تَوَكَّلْنَا\n(Surah Ibrahim 14:12)",
      urdu: "ہم نے اس پر توکل کر لیا ہے۔\n(سورۃ ابراہیم 14:12)",
      english: "In Him we have placed our trust.\n(Surah Ibrahim 14:12)",
      icon: faStar
    },
    {
      title: "Du'a for Light",
      arabic: "رَبَّنَآ أَتْمِمْ لَنَا نُورَنَا\n(Surah At-Tahrim 66:8)",
      urdu: "اے ہمارے رب! ہمارے نور کو مکمل فرما۔\n(سورۃ التحریم 66:8)",
      english: "Our Lord, complete for us our light.\n(Surah At-Tahrim 66:8)",
      icon: faHeart
    },
    {
      title: "Du'a for Gratitude",
      arabic: "رَبِّ أَوْزِعْنِىٓ أَنْ أَشْكُرَ نِعْمَتَكَ\n(Surah An-Naml 27:19)",
      urdu: "اے میرے رب! مجھے اپنی نعمت کا شکر ادا کرنے کی توفیق دے۔\n(سورۃ النمل 27:19)",
      english: "My Lord, enable me to be grateful for Your favor.\n(Surah An-Naml 27:19)",
      icon: faHandsPraying
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="p-8 bg-gradient-to-b from-emerald-50 to-teal-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-emerald-800 font-arabic">
        Daily Duas
      </h2>
      <Slider {...settings} className="mx-auto max-w-7xl">
        {duas.map((dua, index) => (
          <div key={index} className="p-4">
            <div className="relative p-6 rounded-2xl shadow-lg border border-emerald-100 
                          bg-gradient-to-br from-white to-emerald-50
                          hover:shadow-2xl transition-all duration-300 
                          transform hover:-translate-y-1">
              {/* Decorative Islamic pattern overlay */}
              <div className="absolute inset-0 opacity-5 bg-[url('/pattern.png')] rounded-2xl" />
              
              <div className="relative">
                {/* Title with icon */}
                <div className="flex items-center mb-4 pb-3 border-b border-emerald-200">
                  <FontAwesomeIcon 
                    icon={dua.icon} 
                    className="text-2xl text-emerald-600 mr-3" 
                  />
                  <h3 className="text-xl font-bold text-emerald-800">
                    {dua.title}
                  </h3>
                </div>

                {/* Arabic Text */}
                <p className="mt-4 text-right text-2xl font-arabic leading-loose text-slate-800">
                  {dua.arabic}
                </p>

                {/* Urdu Text */}
                <p className="mt-3 text-right font-urdu text-lg leading-relaxed text-slate-700">
                  {dua.urdu}
                </p>

                {/* English Translation */}
                <p className="mt-3 text-left text-base text-slate-600">
                  {dua.english}
                </p>

                {/* Reference */}
                <p className="mt-4 text-sm text-emerald-600 font-medium">
                  {dua.reference}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DuaCards;