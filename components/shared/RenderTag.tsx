import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

type IProps = {
  _id: number;
  name: string;
  totalQuestiions: number;
  showCount: boolean;
};

const RenderTag = ({ _id, name, totalQuestiions, showCount }: IProps) => {
  return (
    <Link
      href={`/tags/${_id}`}
      className="flex items-center justify-between gap-2"
    >
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestiions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
