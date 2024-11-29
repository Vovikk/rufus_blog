"use client";

import Articles from "@/pages/Articles/Articles";
import Search from "@/pages/Search/Search";
import { useSearchParams } from "next/navigation";

const ArticlesPage = () => {
  const searchParams = useSearchParams();
  const searchTermFromUrl = searchParams.get("search") || "";

  return <>{searchTermFromUrl ? <Search></Search> : <Articles></Articles>}</>;
};

export default ArticlesPage;
