import doctors from '@/assets/doctor.svg'
import preparation from '@/assets/preparetion.svg'
import medicine from '@/assets/medicine.svg'
import sertificate from '@/assets/sertificate.svg'
import Gallery from '@/components/ui/gallery'
import doc1 from '@/assets/doc_1.png'
import doc2 from '@/assets/doc_2.png'
import temp from '@/assets/woman-img02.png'
import temp2 from '@/assets/temp.png'
import temp3 from '@/assets/temp2.png'
import temp4 from '@/assets/temp3.png'
import zoom from '@/assets/zoom.png'
import type { GalleryImage } from '@/types/Gallery'
import ResponsiveSlider from '@/components/ui/responsiveSlider'

const MainAboutSection = () => {

const demoImages: GalleryImage[] = [
  { src: `${temp}`, alt: "Женщина" },
  { src: `${temp2}`, alt: "Кошка" },
  { src: `${temp3}`, alt: "Кошка" },
  { src: `${temp4}`, alt: "Кошка" },
];  

  return (
    <div className="bg-[#F1F8FD] relative px-4 lg:p-0" id="about">
      <div className="max-w-[1200px] mx-auto text-[#383838] flex flex-col lg:flex-row justify-between mt-[80px] lg:mt-[140px] gap-10 lg:gap-15 border-b border-b-[#DDEBF4] pb-10">
        <div className="flex-1">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold mb-6">
            О клинике
          </h2>
          <p className="max-w-xl mb-10 text-base sm:text-lg">
            Наши квалифицированные врачи и наркологи предлагают широкий спектр
            наркологических услуг, включая стационарное лечение, кодирование, и
            многие другие виды лечения. Мы заботимся о каждом пациенте и
            гарантируем высокое качество нашей работы. Не стесняйтесь обращаться
            к нам в любое время, мы всегда готовы оказать наркологическую
            помощь.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={doctors} alt="" />
              <p>Квалифицированные врачи-наркологи</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={medicine} alt="" />
              <p>Находим решение даже в сложных ситуациях</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={preparation} alt="" />
              <p>Используем импортные проверенные препараты</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={sertificate} alt="" />
              <p>Лицензия Л041-01177-91/00561129</p>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
            <ResponsiveSlider>
                {demoImages.map((img, i) => (
                <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[300px] object-cover rounded-2xl"
                />
                ))}
            </ResponsiveSlider>
        </div>

        <Gallery showCounter={false} className='hidden lg:block' />
      </div>

      <div className="max-w-[1200px] mx-auto mt-10 mb-20 flex flex-col gap-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#383838]">
          Имеем все необходимые документы для предоставления медицинских услуг:
        </h2>

        <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[doc1, doc2, doc1, doc2].map((doc, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer"
            >
              <img
                src={doc}
                alt={`Документ ${idx + 1}`}
                className="w-full h-auto rounded-xl shadow"
              />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <img src={zoom} alt="" />
              </div>
            </div>
          ))}
        </div>


        <ResponsiveSlider className="block lg:hidden mt-6">
            <img src={doc2} alt="Документ 1" className="w-full h-auto rounded-xl shadow" />
            <img src={doc1} alt="Документ 2" className="w-full h-auto rounded-xl shadow" />
            <img src={doc2} alt="Документ 3" className="w-full h-auto rounded-xl shadow" />
            <img src={doc1} alt="Документ 4" className="w-full h-auto rounded-xl shadow" />
        </ResponsiveSlider>
      </div>
    </div>
  );
};

export default MainAboutSection