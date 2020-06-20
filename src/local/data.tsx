import LocalizedStrings from 'react-localization';



export let stringLocal = new LocalizedStrings({
    en:{
        ToDoList :"To Do List",
        add : "Add",
        whatWillYouDo: "What will you do ?",
        notFoundLink : "page not found link to test router",
        goHome : "Go Home",
        langBtn : "ع",
        addFormMessage: "You must write something to add",
        noDataMessage: "Theres nothing todo"
    },
    ar: {
        ToDoList :"قائمة المهام",
        add : "أضف",
        whatWillYouDo: "ماذا ستفعل ؟",
        notFoundLink : "رابط صفحة 404 لاختبار الراوتر",
        goHome : " الرئيسية",
        langBtn: "En",
        addFormMessage: "يجب كتابة وصف",
        noDataMessage: "لا يوجد بيانات"
    }
   });