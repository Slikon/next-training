import React from "react";
import Link from "next/link";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";

type QuestionCardProps = {
  _id: number;
  title: string;
  tags: string[];
  author: {
    _id: number;
    name: string;
    picture: string;
  };
  createdAt: Date;
  upvotes: number;
  answers: Array<object>;
  views: number;
};

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  createdAt,
  upvotes,
  answers,
  views,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-xl p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`} className="">
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>

      <div className="my-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <RenderTag _id={index} key={tag} name={tag} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          value={author.name}
          title={` - asked ${getTimestamp(createdAt)}`}
          isAuthor
          href={`/profile/${author._id}`}
          textStyles="body-medium text-dark400_light800"
        />
        <div className="flex flex-row gap-3">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={formatAndDivideNumber(upvotes)}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatAndDivideNumber(answers.length)}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatAndDivideNumber(views)}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
