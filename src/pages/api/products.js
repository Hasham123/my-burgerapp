export default function handler(req , res){
    const products=[
{
id:1,
name:"burger 1",
price:100,
image:"burgermenu1.jpg"
},
{
    id:2,
    name:"burger 2",
    price:100,
    image:"burgermenu2.jpg"
    },
    {
        id:3,
        name:"burger 3",
        price:100,
        image:"burgermenu3.jpg"
        },
        {
            id:4,
            name:"burger 4",
            price:100,
            image:"burgermenu4.jpg"
            },
            {
                id:5,
                name:"burger 5",
                price:100,
                image:"burgermenu5.jpg"
                },
                {
                    id:6,
                    name:"burger 6",
                    price:100,
                    image:"burgermenu6.jpg"
                    },

    ];
    res.status(200).json(products);
}