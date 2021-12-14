export interface Items { 
  id: number,
  name: string,
  main_image: string,
  date: string,
  category: string,
}


export const items =[
  {
    id: 1,
    name : "Milk",
    main_image: "https://i5.walmartimages.com/asr/1347c2ba-9373-463d-8714-c678a6949090_2.f72cceb2686f8ea62c4d647f5fa4ee68.jpeg",
    date: "2021-12-31",
    category: "Dairy & Eggs"
  },
  {
    id: 2,
    name: "bread",
    main_image: "https://i5.walmartimages.com/asr/9f4e865f-9e79-44f0-becf-e497667813f1.445c61340cc9da21ca84ffd434b02d86.jpeg",
    date: "2021-12-31",
    category: "Bakery & Bread"
  },
  {
    id: 3,
    name: "tuna",
    main_image: "https://i5.walmartimages.com/asr/8696259e-0f49-445e-8119-4289f1feec25.6769cdcb48b2464db2f25685a8058305.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    date: "2022-01-31",
    category: "Pantry"
  },
]