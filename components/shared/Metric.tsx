import React from "react";
import Image from "next/image";
import Link from "next/link";

type MetricProps = {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles?: string;
  isAuthor?: boolean;
  href?: string;
};

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  isAuthor,
  href,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}

        <span
          className={`${isAuthor ? "max-sm:hidden" : ""} small-regular line-clamp-1`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href)
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );

  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
