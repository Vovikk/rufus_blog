"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "@/components/Articles/Article.module.scss";
import Card from "@/components/Card/Card";
import promoImg from "@/assets/images/articles/promo.svg";
import articleImg1 from "@/assets/images/articles/4.png";
import articleImg2 from "@/assets/images/articles/5.png";
import articleImg3 from "@/assets/images/articles/6.png";
import articleImg4 from "@/assets/images/articles/7.png";
import articleImg5 from "@/assets/images/articles/8.png";
import articleImg6 from "@/assets/images/articles/9.png";
import { useState } from "react";

const Articles = () => {
  const [filter, setFilter] = useState("none");

  const applyFilter = (newFilter) => {
    setFilter((prevFilter) => (prevFilter === newFilter ? "none" : newFilter));
  };

  const cards = [
    {
      className: "",
      image: articleImg1,
      genre: "Creatividad",
      author: "Miranda Marini",
      date: { month: "Octubre", day: "14", year: "2024" },
      title: "El poder del Hook: Cómo conquistar a tu audiencia en 3 segundos",
      paragraph:
        "Captar la atención en los primeros segundos es clave para el éxito de cualquier anuncio. Un buen hook...",
    },
    {
      className: "",
      image: articleImg2,
      genre: "Creatividad",
      author: "Miranda Marini",
      date: { month: "Octubre", day: "14", year: "2024" },
      title: "El poder del Hook: Cómo conquistar a tu audiencia en 3 segundos",
      paragraph:
        "Captar la atención en los primeros segundos es clave para el éxito de cualquier anuncio. Un buen hook...",
    },
    {
      className: "",
      image: articleImg3,
      genre: "Creatividad",
      author: "Miranda Marini",
      date: { month: "Octubre", day: "14", year: "2024" },
      title: "El poder del Hook: Cómo conquistar a tu audiencia en 3 segundos",
      paragraph:
        "Captar la atención en los primeros segundos es clave para el éxito de cualquier anuncio. Un buen hook...",
    },
    {
      className: "",
      image: articleImg4,
      genre: "Creatividad",
      author: "Miranda Marini",
      date: { month: "Octubre", day: "14", year: "2024" },
      title: "El poder del Hook: Cómo conquistar a tu audiencia en 3 segundos",
      paragraph:
        "Captar la atención en los primeros segundos es clave para el éxito de cualquier anuncio. Un buen hook...",
    },
    {
      className: "",
      image: articleImg5,
      genre: "Creatividad",
      author: "Miranda Marini",
      date: { month: "Octubre", day: "14", year: "2024" },
      title: "El poder del Hook: Cómo conquistar a tu audiencia en 3 segundos",
      paragraph:
        "Captar la atención en los primeros segundos es clave para el éxito de cualquier anuncio. Un buen hook...",
    },
    {
      className: "",
      image: articleImg6,
      genre: "Creatividad",
      author: "Miranda Marini",
      date: { month: "Octubre", day: "14", year: "2024" },
      title: "El poder del Hook: Cómo conquistar a tu audiencia en 3 segundos",
      paragraph:
        "Captar la atención en los primeros segundos es clave para el éxito de cualquier anuncio. Un buen hook...",
    },
  ];
  const filters = [
    "Todos",
    "Creatividad",
    "Digital Advertising",
    "Caso de Éxito",
    "Growth",
  ];
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[1440px] w-full mb-16">
        <div className="flex flex-col items-center gap-6 px-5 lg:px-20 max-w-[650px] m-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center ">
            Últimas novedades
          </h2>
          <p className="text-center text-base lg:text-lg">
            Mantente actualizado y aprende sobre publicidad digital, casos de
            éxito, creatividad y los temas más interesantes de la industria.
          </p>
        </div>
        <div className="flex items-center py-12 lg:py-[3.75rem] pl-5 justify-center">
          <span className="text-base font-bold mr-4">Filtrar:</span>
          <div
            className={`flex gap-4 overflow-x-auto text-nowrap ${styles.scrollbar}`}
          >
            {filters.map((filterLabel, index) => (
              <Button
                label={filterLabel}
                key={index}
                onClick={() => applyFilter(filterLabel)}
              />
            ))}
          </div>
        </div>
        <div className="lg:grid flex flex-col items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 px-5 lg:px-20 gap-x-8 gap-y-8 lg:gap-y-[3.75rem]">
          {cards
            .filter((card) => filter === "none" || card.genre === filter)
            .map((card, index) => (
              <Card
                className={""}
                image={card.image}
                genre={card.genre}
                author={card.author}
                date={card.date}
                title={card.title}
                paragraph={card.paragraph}
                key={index}
              />
            ))}
        </div>
        <div className="my-12"></div>
        <div className=" px-5 lg:px-20">
          <div className="flex flex-col md:flex-row bg-purple-dark rounded-[2rem] md:rounded-[3.75rem] w-full px-5 py-12 md:px-20 md:py-[3.75rem] gap-4">
            <div className="flex flex-col justify-center items-center md:items-start pb-12 md:w-1/2">
              <h2 className="text-white font-bold text-[2rem] md:text-[2.5rem] text-center md:text-start mb-6">
                Desbloqueando el poder de los datos y la creatividad
              </h2>
              <p className="text-white text-center md:text-start text-base mb-8">
                Transforma con Rufus las campañas publicitarias mediante la
                combinación perfecta de creatividad y performance.
              </p>
              <Button label="Conoce más"></Button>
            </div>
            <div className="flex justify-center md:justify-end md:w-1/2">
              <Image src={promoImg} alt="Promo image"></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
