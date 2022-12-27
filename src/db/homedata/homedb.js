const homedata = [
    {
      title: "الكليات الهندسية",
      mroute:'/eng',
      list: [
       
        { to: "/ite", name: "الهندسة المعلوماتية" },
        { to: "/civil", name: "الهندسة المدنية" },
        { to: "/arch", name: "الهندسة المعمارية" },
        { to: "/elect", name: "هندسة الكهرباء والالكترون" },
      ],
    },
 
  
    {
      title: "الكليات العلمية",
      mroute:'/scie',
      list: [
        { to: "/", name: "العلوم الطبيعية" },
        { to: "/", name: "الفيزياء" },
        { to: "/", name: "الكيمياء" },
        { to: "/", name: "الرياضيات " },
      ],
    },
    {
      title: "الكليات الطبية",
      mroute:'/medical',
      list: [
        { to: "/", name: "البشري" },
        { to: "/", name: "الاسنان" },
        { to: "/", name: "الصيدلة" },
      ],
    },
    {
      title: "الكليات الادبية",
      mroute:'/liter',
      list: [
        { to: "/", name: "الادب العربي" },
        { to: "/", name: "الادب الانكليزي" },
        { to: "/", name: "الادب الفرنسي" },
        { to: "/", name: "الادب فارسي" },
      ],
    },
    {
      title: "المعاهد",
      mroute:'/inst',
      list: [
        { to: "/", name: "التقاني الهندسي" },
        { to: "/", name: "التقاني الطبي" },
        { to: "/", name: "التقاني صحي" },
        { to: "/", name: "التقاني حاسوب" },
      ],
    },
  ];
  
  
  export default homedata;
  
