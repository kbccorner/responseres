import { motion } from 'framer-motion'
import React from 'react'

function Whate() {
  return (
    <div className="container">
    <section className="mainsectionab">
      <div className="vesiontitle">حول المبادرة</div>
      <motion.div
        className="montans"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img src="/Arvan-vision.svg" alt="" />
      </motion.div>
    </section>
    <div className="visionstext">
      <h1>اهداف المبادرة</h1>
      <p>المبادرة تستهدف فئة الشباب الجامعي من خلال بناء منصة إلكترونية تساعدهم طيلة مسيرتهم الجامعية (من لحظة النجاح من البكلوريا حتى اخر سنة لهم في الجامعة) أهداف المنصة:
      </p>
      <h1>المهمة المالية</h1>
      <p>
        <h4>
          “إنشاء الجيل التالي من البنية التحتية السحابية المتكاملة ؛ إنشاء
          عالم أكثر أمانًا وأسرع وأكثر سهولة للأعمال التجارية عبر الإنترنت.”
        </h4>
        إلى جانب مهمتها ونموها ، تعتمد kbc على ثقافة شفافة وصادقة. تحاول
        kbc مساعدة العالم والناس من حولها على النجاح في التنمية الشخصية
        وتمنياتهم.
      </p>
      <h1>قيم اروان</h1>
      <p>
        <h3>الإنسانية</h3>: ليس هناك ما هو أكثر قيمة من الإنسانية في كنوليج بيس كورنر. لن
        يحل المال والقوة محل هدفنا المتمثل في خلق مساحة وشركة حيث يتم تقييم
        البشر أكثر من أي نجاح مالي!
        <h3>مجتمع موحد</h3>: إلى جانب مفاهيم مثل “الأسرة”, “الأمة”, “القبيلة”,
        إلخ. في كنوليج بيس كورنر نؤكد على مفهوم “المجتمع / الأمة”; مجموعة من المسافرين في
        رحلة صعبة وطويلة للوصول إلى هدف طموح ومتبادل.
        <h3>توزيع السلطة ومقاومة الحص</h3>
        في kbc ، هدفنا هو توزيع الطاقة بأي ثمن . نحاول تحديد هيكلنا الرئيسي
        بطريقة يتم تجنب كل من صنع القرار الفردي والتسلسل الهرمي قدر الإمكان ،
        وبدلاً من ذلك ، نحن نقدر اتخاذ القرارات بواسطة المجموعات. نحن نعتقد أن
        جميع المجموعات يجب أن تكون لها اليد العليا في صنع القرار في مجالها. لا
        ينبغي أن يكون هناك أي سلطة استبدادية.
        <h3>هیکل خلاق</h3>: يجب أن يكون الإبداع والابتكار ، حتى في أكثر أشكاله
        صناعیًا، جوهر فريقنا في مواكبة التطور العالمي للتكنولوجيا وثقافة
        العمل. تستلزم رؤيتنا إحداث التغيير وبناء ثقافة جديدة كرائد ، مع التخلي
        عن الأساليب التقليدية جانبا ، حتى لو كان ذلك يكلفنا أيديولوجياتنا.
      </p>
      <h1>أهم وعودنا المتبادلة</h1>
      <p>
        <h3>الشفافية:</h3>
        قلب kbc واضح للغاية وغير قابل للكسر ، مما يمنحنا رؤية غير محدودة.
        يحق لكل عضو في kbc معرفة تفاصيل أي شيء في أي وقت ولديه حرية الوصول
        إلى جميع المعلومات داخل الشركة.
        <h3>التدفق الحر للبيانات:</h3>
        في kbc ، سوف نشارك أي بيانات "قائمة على المعرفة" بمساعدة الأدوات
        والاجتماعات والمجموعات.
        <h3>بلا رشوة: </h3>
        لن نقوم برشوة أي شخص للوصول إلى أهدافنا تحت أي ظرف من الظروف ، حتى لو
        كلفنا ذلك فرصًا مربحة.
        <h3>حماية خصوصية العملاء: </h3>
        يحاول kbc حماية البيانات الخاصة والقانونية لمستخدميه ، ولن يستخدم
        هذه البيانات أبدًا (المذكورة في قسم "سياسة الخصوصية") بأي طريقة
        تجارية. بقدر ما تسمح به التكنولوجيا ، سنقوم بتخزين البيانات بشكل آمن ،
        حتى أننا لن نتمكن من
        <h3>المنتج:</h3>
        لن ننسى أبدًا أن المنتج وجودة المنتج أهم بكثير من الأرباح والمزيد من
        الإيرادات. إذا كان على kbc الاختيار بين الأرباح والجودة ، فلا شك
        أننا سنختار الجودة.
      </p>
    </div>
  </div>
  )
}

export default Whate