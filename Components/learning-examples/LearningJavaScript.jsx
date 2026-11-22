const person={

    name:'Nandini Bhoyar',
    address:{
           line1:' Baker street London',
           city:'London',
           country:'UK'
    },
profiles:['twitter','Linkedin','instargram'],
printprofile: () => {

    person.profiles.map(
        profile => console.log(profile)

    )
}
}
export default function LearnigJavaScript()
{
    return(

        <>
           <diV>{person.name}</diV>
           <div> {person.address.line1}</div>
           <div>{person.profiles[0]}</div>
           <div>{person.printprofile}</div>
        </>
    )
}
