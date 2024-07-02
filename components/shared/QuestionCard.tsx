import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

type QuestionCardProps = {
  id: number;
  title: string;
  tags: string[];
  authorName: string;
  age: number;
  votesCount: number;
  answersCount: number;
  viewsCount: number;
};

const QuestionCard = ({
  id,
  title,
  tags,
  authorName,
  age,
  votesCount,
  answersCount,
  viewsCount,
}: QuestionCardProps) => {
  return (
    <div className="background-light900_dark200 rounded-lg px-10 py-9">
      <Link href={""} className="h3-bold text-dark200_light900 line-clamp-1">
        {title}
      </Link>
      <div className="my-4 flex gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="body-medium text-dark500_light700 flex flex-row justify-between max-md:flex-col max-md:gap-3">
        <span className="flex flex-row items-center">
          <Image
            src={"/assets/icons/user.svg"}
            alt="user-icon"
            width={15}
            height={15}
          />
          <span className="ml-2">{authorName}</span>
          <span className="small-regular ml-1">• asked {age} days ago</span>
        </span>

        <div className="small-regular text-dark200_light900 flex flex-row gap-3">
          <div className="flex flex-row items-center gap-1">
            <Image
              src={"/assets/icons/like.svg"}
              alt="upvote-icon"
              width={15}
              height={15}
            />
            <p>{votesCount} Votes</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              src={"/assets/icons/message.svg"}
              alt="upvote-icon"
              width={15}
              height={15}
            />
            <p>{answersCount} Answers</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              src={"/assets/icons/eye.svg"}
              alt="upvote-icon"
              width={15}
              height={15}
            />
            <p>{viewsCount} Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
