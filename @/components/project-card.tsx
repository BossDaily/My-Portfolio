/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 */
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";

type Props = {
  children: ReactNode;
  title: string;
  link: string;
  thumbnail: string;
  btnName: string;
  tags: string[];
};

export function ProjectCard({
  children,
  title,
  link,
  thumbnail,
  btnName,
  tags,
}: Props) {
  return (
    <Card
      key="1"
      className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
    >
      <img
        alt="Profile picture"
        className="object-cover w-full"
        height="320"
        src={`${thumbnail}`}
        style={{
          aspectRatio: "320/320",
          objectFit: "cover",
        }}
        width="320"
      />
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
          {title}
        </h2>
        <h3 className="text-white hover:text-gray-600 transition-all duration-200">
          {tags.map((tag) => (
            <Badge className="mr-2 bg-purple-600" key={tag}>
              {tag}
            </Badge>
          ))}
        </h3>
        <p className="mt-2 text-white hover:text-gray-700 transition-all duration-200">
          {children}
        </p>
        <div className="flex mt-4 space-x-2">
          <a href={`${link}`}>
            <Button
              className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200 bg-purple-600"
              size="sm"
            >
              {btnName}
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
