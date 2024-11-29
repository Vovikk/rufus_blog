import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@/assets/icons/link_arrow.svg";

const Card = ({
  variant = "base",
  image,
  genre = [],
  author,
  date = { month: "January", day: "1", year: "2000" },
  title = "Article",
  paragraph,
  className,
  ...props
}) => {
  const baseClasses =
    "w-full h-full rounded-[1.75rem] bg-white max-w-[600px] xl:max-w-full m-auto";

  const variantContainerStyles = {
    base: "",
    "2x1": "xl:p-12",
    "1x1": "xl:px-6 xl:py-3",
  };

  const variantImageStyles = {
    base: "rounded-t-[1.75rem]",
    "2x1": "xl:rounded-t-[1.75rem] xl:max-h-[260px]",
    "1x1": "xl:rounded-r-[1.75rem] xl:min-w-[275px]",
  };

  const variantTextStyles = {
    base: {
      genre: "text-base text-purple mr-3",
      date: "my-4 text-base",
      title: "mb-6 text-2xl font-bold",
      paragraph: "mb-8 text-base",
    },
    "2x1": {
      genre: "text-base text-purple mr-3",
      date: "my-4 text-base",
      title: "mb-6 text-2xl font-bold xl:text-4xl",
      paragraph: "mb-8 text-base",
    },
    "1x1": {
      genre: "text-base text-purple mr-3",
      date: "my-4 text-base xl:my-3",
      title: "mb-4 text-2xl font-bold xl:mb-4",
      paragraph: "mb-6 text-base xl:mb-6",
    },
  };

  return (
    <div className={`relative ${baseClasses} ${className}`}>
      <div className={variantImageStyles[variant]}>
        <Image
          src={image}
          alt={`Card image for: ${title}`}
          className={`object-cover h-full w-full ${variantImageStyles[variant]}`}
        />
      </div>

      <div className={`px-5 py-8 ${variantContainerStyles[variant]}`}>
        {genre.map((genre, index) => (
          <Link
            href={`/search/${genre}`}
            className={variantTextStyles[variant].genre}
            key={index}
          >
            {genre}
          </Link>
        ))}

        <p className={variantTextStyles[variant].date}>
          {author} | {date.month} {date.day}, {date.year}
        </p>
        <h2 className={variantTextStyles[variant].title}>{title}</h2>
        <p className={variantTextStyles[variant].paragraph}>{paragraph}</p>
        <Link
          href={`/articles/${encodeURIComponent(
            title
              .toLowerCase()
              .replace(/[^a-z0-9\s-]/g, "")
              .trim()
              .replace(/\s+/g, "-")
          )}`}
          className="flex items-center text-base font-bold text-purple absolute bottom-5"
        >
          Leer artículo
          <Image src={LinkIcon} alt="Link arrow" className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
