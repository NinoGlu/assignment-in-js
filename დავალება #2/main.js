  /* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

const isFalse = [num1,boolean1,emptyString,boolean2,];
const isTrue = [num2,text,text2];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("aic" > "ah")

// შეცვალეთ b ასო i-ით,რადგან h-ზე მაღალა დგას, რომ მიიღოთ ჭეშმარიტი დებულება
console.log(2 === "004")

// ერთ მხარეს რიცხვია , მეორე მხარეს სტრინგი
// სტრინგი ხდება რიცხვი და  დებულება  ჭეშმარიტია 


// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 

let Age = prompt("რამდენი წლის ხარ?");

if (Age >=18){
  console.log("დალევა შეგიძლია");
}else{
  console.log("დალევა არ შეგიძლია")
}

//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ
  
const pet = 'dog';

if (pet === 'lizad'){
  console.log('i own a lizad');
}else if( pet === 'dog'){
  console.log('i own a dog');
}else if( pat === 'cat'){
  console.log('i own a cat');
}else if( pet === 'snake'){
  console.log('i own a snake');
}else if( pat === 'parrot'){
  console.log('i own a parrot')
}

//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ


if(colorId == 0){ 
  console.log('black');
  }else if(colorId == 1){
   console.log('blue')
  }else if( colorId == 2){
    console.log('green')
  }else if( colorId == 3){
    console.log('red')
  }else if( colorId == 4){
    console.log('white')
  }else{
    console.log('undefinde')
  }


//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
let color = (colorId == 0) ? "black":
(colorId == 1) ? "blue":
(colorId == 2) ? "green":
(colorId == 3) ? "red":
(colorId == 4) ? "white":
undefined;

console.log(color);

//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ

switch (colorId){
  case 0:
    color = 'black'
    break;
  case 1:
    color = 'blue'
    break;
  case 2:
    color = 'green'
    break;
  case 3:
    color = 'red'
    break;
  case 4:
    color = 'white'
    break; 
  default:
    undefined;             
}


//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot")
bot.addEventListener("click", myFun())

function myFun() {
  let x = prompt("მე მზად არ ვარ პასუხისათვის")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
  switch (x){
    case 'გამარჯობა':
      alert('გამარჯობა,რით დაგეხმაროთ'); 
      break;
    case 'მაინტერესებს სამუშაო დღეები':
      alert('ორშაბათიდან პარასკებამე');
      break;
    case 'მაინტერესებს სამუშაო საათები':
      alert('10:00 - 18:00');
      break;
    case 'მინდა ჩამოწერა':
      alert('მოგწერეთ დღე და საათი');
      break;
    case 'მაინტერესებს სამუშაო საათები':
            alert('10:00 - 18:00');
            break;    
    default:
      alert('ჩაწერილი ხართ,თუ კითხვები არ გაქვთ დაგემშვიდობებით')
  }
  //

  // რეკურსიული ფუნქცია
  myFun()
}