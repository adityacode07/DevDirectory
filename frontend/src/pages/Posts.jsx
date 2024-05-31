import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";

export default function Posts({ name, resourcelink, description, imagelink }) {
  const [stars, setStars] = useState(0); // State to store the number of stars
  const truncatedPostlink = resourcelink.slice(0, 20); // Truncate postlink to show only the first 20 characters

  // Function to increment the number of stars
  const handleStarClick = () => {
    setStars(stars + 1);
  };

  return (
    <Card className="w-full max-w-sm relative">
      <div className="absolute top-4 right-4 flex flex-col items-end">
        {/* Trash bin icon */}
        <Button size="icon" variant="ghost">
          <TrashIcon className="h-5 w-5" />
          <span className="sr-only">Delete</span>
        </Button>
        {/* Star icon */}
        <div className="mt-2">
          <Button size="icon" variant="ghost" onClick={handleStarClick}>
            <StarIcon className="h-5 w-5" />
            <span className="sr-only">Star</span>
            <span className='ml-1.5'>{stars}</span>
          </Button>
          {/* Display number of stars */}
          
        </div>
      </div>
      <CardContent className="space-y-4 p-6">
        <div className="flex justify-center">
          <Avatar className="h-20 w-20">
            <AvatarImage alt="Olivia Davis" src={imagelink} />
            <AvatarFallback>OD</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <a href={resourcelink} target="_blank" rel="noopener noreferrer" className="rounded-md border border-gray-300 px-2 py-1 inline-block">
            {truncatedPostlink} {/* Display truncated postlink */}
          </a>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

// Star icon component
function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
