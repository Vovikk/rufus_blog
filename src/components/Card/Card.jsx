import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@/assets/icons/link_arrow.svg";

const Card = ({
  variant = "base",
  image,
  genre,
  author,
  date = { month: "January", day: "1", year: "2000" },
  title = "Article",
  paragraph,
  className,
  ...props
}) => {
  const baseClasses =
    "w-full h-fit rounded-[1.75rem] bg-white max-w-[600px] xl:max-w-full";

  const variantStyles = {
    base: "",
    "2x1": "",
    "1x1": "",
  };

  const variantImageStyles = {
    base: "",
    "2x1": "",
    "1x1": "",
  };

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className={` ${variant === "1x1" ? " xl:min-w-[275px]" : ""}`}>
        <Image
          src={image}
          alt="Card Image"
          className={`object-cover h-full w-full ${
            variant === "2x1"
              ? "xl:rounded-t-[1.75rem] xl:max-h-[260px]"
              : variant === "1x1"
              ? "xl:rounded-r-[1.75rem]"
              : ""
          }`}
        />
      </div>

      <div
        className={`px-5 py-8 ${
          variant === "2x1"
            ? "xl:p-12 "
            : variant === "1x1"
            ? "xl:px-6 xl:py-3"
            : ""
        }`}
      >
        <Link href={`/search/${genre}`} className="text-base text-purple">
          {genre}
        </Link>
        <p className={`my-4 text-base ${variant === "1x1" ? " xl:my-3" : ""}`}>
          {author} | {date.month} {date.day}, {date.year}
        </p>
        <h2
          className={`mb-6 text-2xl font-bold ${
            variant === "2x1"
              ? "xl:text-4xl"
              : variant === "1x1"
              ? " xl:mb-4"
              : ""
          }`}
        >
          {title}
        </h2>
        <p className={`mb-8 text-base ${variant === "1x1" ? " xl:mb-6" : ""}`}>
          {paragraph}
        </p>
        <Link
          href={`/${title.toLowerCase().replaceAll(" ", "-")}`}
          className="flex items-center text-base font-bold text-purple"
        >
          Leer artículo <Image src={LinkIcon} className="ml-1"></Image>
        </Link>
      </div>
    </div>
  );
};

export default Card;
