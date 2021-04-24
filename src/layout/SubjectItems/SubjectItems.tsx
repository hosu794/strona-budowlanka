import React from "react";
import CategoryLayout from "../CategoryLayout";

import { Link } from "react-router-dom";

const subjectItemsArray: Array<any> = [
  {
    id: 1,
    title: "Matematyka i Fizyka",
    slug: "/subject/items/math/psychics",
  },
  {
    id: 2,
    title: "Języki obce",
    slug: "/subject/items/languages",
  },
  {
    id: 3,
    title: "Język Polski",
    slug: "/subject/items/polish",
  },
  {
    id: 4,
    title: "Historia-Wos",
    slug: "/subject/items/history",
  },
  {
    id: 5,
    title: "Biologia - Chemia - Geografia",
    slug: "/subject/items/biology/chemistry/geography",
  },
  {
    id: 6,
    title: "Przedmioty Budowlane w Technikum",
    slug: "/subject/items/construction",
  },
  {
    id: 7,
    title: "Przedmioty Informatyczne",
    slug: "/subject/items/it",
  },
  {
    id: 8,
    title: "Sport",
    slug: "/subject/items/sport",
  },
  {
    id: 9,
    title: "Branżowa Szkoła I Stopnia",
    slug: "/subject/items/trade-sc",
  },
  {
    id: 10,
    title: "Podstawy Przedsiębiorczości",
    slug: "/subject/items/entrepreneurship",
  },
  {
    id: 11,
    title: "Geodezja",
    slug: "/subject/items/geodesy",
  },
];

const SubjectItems: React.FC<any> = () => {
  return (
    <CategoryLayout title="Zespoły Przedmiotowe">
      <div className="p-5 flex flex-row flex-wrap ">
        {subjectItemsArray.map((item: any) => (
          <div className="m-4 relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <Link to={item.slug}>{item.title}</Link>
          </div>
        ))}
      </div>
    </CategoryLayout>
  );
};

export default SubjectItems;
