alert("Welcome to CodeCafe");
console.log("First Question:");
// Problem 1: Customer Greeting System
const greetCustomer = () => {
    let customerName = prompt("Please enter your name:").trim();
    while (!customerName) { // التحقق من أن الاسم ليس فارغًا
        customerName = prompt("Name cannot be empty. Please enter your name:").trim();
    }
    const preferredBeverage = prompt("What is your preferred beverage?").toUpperCase();
    const welcomeMessage = `Welcome to CodeCafe, ${customerName}! Enjoy your ${preferredBeverage}`;
    console.log(welcomeMessage);
};
greetCustomer();

console.log("\nSecound Question:");
//Problem 2: Weekly Menu Display
// مصفوفة تحتوي على العروض اليومية
const dailySpecials = [
    "Espresso - $3",     // 0 (Sunday) 
    "Cappuccino - $4",   // 1 (Monday) 
    "Latte - $4.5",      // 2 (Tuesday) 
    "Mocha - $5",        // 3 (Wednesday) 
    "Americano - $3.5",  // 4 (Thursday) 
    "Flat White - $4.5", // 5 (Friday) 
    "Cold Brew - $4"     // 6 (Saturday) 
]; 
// دالة للحصول على العرض الخاص باليوم
const getDailySpecial = (dayIndex) => {
    // التحقق من أن اليوم ضمن المدى الصحيح
    if (dayIndex >= 0 && dayIndex <= 6) {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const formattedDay = dayNames[dayIndex];
        const special = dailySpecials[dayIndex];
      // طباعة اليوم والعرض الخاص 
        console.log(`${formattedDay}'s Special ☕: ${special}`);
    } else {
        console.log("Invalid day index. Please enter a number between 0 (Sunday) and 6 (Saturday).");
    }
};
getDailySpecial(3); //بإمكانك تغيير الرقم

console.log("\nThird Question:");
//Problem 3: Sales Analytics
// دالة لحساب إحصائيات الطلبات
function calculateOrderStatistics(hourlyOrders) {
    let totalOrders = 0; // المجموع الكلي للطلبات
    let hourlyBreakdown = []; // مصفوفة لتخزين إحصائيات كل ساعة
    //  لحساب المجموعات
    for (let i = 0; i < hourlyOrders.length; i++) {
        totalOrders += hourlyOrders[i]; // إضافة الطلبات لكل ساعة إلى المجموع الكلي
        hourlyBreakdown.push(`Hour ${i + 1}:00 - ${hourlyOrders[i]} orders`);
    }
   console.log("Hourly order statistics:");
    hourlyBreakdown.forEach(stat => console.log(stat)); 
    console.log(`\nTotal orders: ${totalOrders}`);
}
const hourlyOrders = [10, 15, 20, 25, 30, 5, 0, 12]; 

calculateOrderStatistics(hourlyOrders);

console.log("\nFour Question:");
//Problem 4: Customer Database Management 
//تجعل الكود أكثر مرونة وقابلية لإعادة الاستخدام عند إنشاء كائنات جديدة من نوع Customer.(this)
function Customer(name, email, favoriteDrink, visits, membershipLevel) {
    this.name = name; // تشير إلى الكائن  الحالي اللي بننشئه أو بنشتغل عليه this
    this.email = email;
    this.favoriteDrink = favoriteDrink;
    this.visits = visits;
    this.membershipLevel = membershipLevel;
}

let customers = [];
//  لتسجيل زبون جديد
function registerCustomer(name, email, favoriteDrink) {
    let newCustomer = new Customer(name, email, favoriteDrink, 0, '');
    customers.push(newCustomer);
    console.log(`Registered new customer: ${name}`);
}
//للبحث عن زبون باستخدام البريد الإلكتروني
const findCustomerByEmail = function(email) {
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].email === email) {
            return customers[i];
        }
    }
    console.log('Customer not found');
    return null;
};
//لتحديث عدد الزيارات
const updateVisit = (email) => {
    let customer = findCustomerByEmail(email);
    if (customer) {
        customer.visits++;
        customer.membershipLevel = calculateMembershipLevel(customer.visits);
        console.log(`Updated visits for ${customer.name}: ${customer.visits}`);
    }
};
//لحساب مستوى العضوية بناءً على عدد الزيارات
function calculateMembershipLevel(visits) {
    if (visits >= 1 && visits <= 5) {
        return 'Bronze';
    } else if (visits >= 6 && visits <= 15) {
        return 'Silver';
    } else if (visits >= 16) {
        return 'Gold';
    }
    return ''; //إرجاع سلسلة فارغة في حالة عدم وجود مستوى
}
//لعرض معلومات الزبون
const displayCustomerInfo = function(email) {
    let customer = findCustomerByEmail(email);
    if (customer) {
        console.log(`Name: ${customer.name}`);
        console.log(`Email: ${customer.email}`);
        console.log(`Favorite Drink: ${customer.favoriteDrink}`);
        console.log(`Visits: ${customer.visits}`);
        console.log(`Membership Level: ${customer.membershipLevel}`);
    }
};

registerCustomer('Batool', 'batool@gmail.com', 'coffee');
registerCustomer('Malk', 'malk@gmail.com', 'Cappuccino');

updateVisit('batool@gmail.com');
updateVisit('batool@gmail.com'); 
updateVisit('batool@gmail.com'); 
updateVisit('malk@gmail.com');
updateVisit('malk@gmail.com');

displayCustomerInfo('batool@gmail.com');
displayCustomerInfo('malk@gmail.com');
