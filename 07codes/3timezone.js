const dateFormatter=new Intl.DateTimeFormat('INR');
const date=dateFormatter.format(new Date('2023-01-02'));
console.log(date);


const us=new Intl.Locale('en',
{ region:'US',hourCycle:'h12',calendar:'gregory'}
);


const day=new Intl.DateTimeFormat(us).format(new Date("2022-05-04T14:00"));
console.log(day);


const uk=new Intl.DateTimeFormat('en-GB',{dateStyle:'long',timeStyle:'short'})
.format(new Date("2022-05-23T14:00"));
console.log(uk);


const es=new Intl.DateTimeFormat('en-ES',{dateStyle:"full",timeStyle:'full'})
         .format(new Date("2022-05-04T14:00"));
console.log(es);