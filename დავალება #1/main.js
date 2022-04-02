/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები

/*
  // კომენტარები გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/


// 2 ცვლადები

/*
  // მსურს ჩემი Spotify ლისტის განახლება 
  // ამაში კი თქვენი დახმარება მჭირდება
  // აღწერეთ თქვენი საყვარელი მომღერლის
  // (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
  // გაითვალისწინეთ რომ ამისთვის უნდა
  // გამოიყენოთ მხოლოდ (const, let)
  // (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/

// >>>> კოდი დაწერეთ აქ

const Name = "Leonardo" ;
const UserName = "Dicaprio" ;
let Age = 48 ;
const Year = 1974 ;
const BirthPlace = "Los Angeles";


console.log(typeof age);
console.log(typeof UserName);
console.log(typeof Name);
console.log(typeof BirthPlace);
console.log(typeof Year);


// 

/*
  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.

  წიგნების მაღაზიის მაგალითი:

  const BookName = "ვეფხისტყაოსანი";
  const AuthrName = "შოთა რუსთაველი";
  const CreateDate = "13 საუკუნე";
  let ProductQuant = 124;
*/


// >>>> კოდი დაწერეთ აქ

  const BookName1 = "დიდოსტატის მარჯვენა" ;
  const AuthrName1 = "კონსტანტინე გამსახურდია" ;
  const CreateDa1 = "1939 წელი" ;
  let ProductQuant = 30 ;

  const BookName2 = "არასოდეს გაამიშვა" ;
  const AuthrName2 = "კაზუო იშიგურო" ;
  const CreateDa2 = "20 საუკუნე" ;
  let Productquant = 31 ;
//



// 3 მონაცემთა ტიპები

/*
  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;
*/


/---------ჩასწორებლია------/
const age = 1;
const hisName = "bob";
const isHigh = true;
const dateOfBirth = 1995;




// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 frue

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")



// აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი


// მაგ: console.log(typeof age)
 
console.log(typeof age);
console.log(typeof hisName);
console.log(typeof isHigh);
console.log(typeof dateOfBirth);


// ოპერატორები არითმეტიკა

let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ


const a = 2
num += a;
num *= a;
num **= a;


//

console.log(num)



// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ


let Nam = "nike";
let AGE = 19;
let number = "20"

console.log(Nam + AGE + number);
console.log(typeof(Nam) + typeof(AGE) + typeof(number));

//