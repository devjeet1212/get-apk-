import { Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FeaturedCardProps {
  name: string;
  rating: number;
  description: string;
  version: string;
  size: string;
  imageUrl: string;
}

export default function FeaturedCard({
  name,
  rating,
  description,
  version,
  size,
  imageUrl,
}: FeaturedCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300">
      <div className="flex gap-4 p-4">
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="font-semibold text-lg" data-testid={`text-featured-${name.toLowerCase().replace(/\s/g, '-')}`}>
              {name}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-chart-3 text-chart-3" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{version}</span>
            <span>{size}</span>
          </div>
        </div>
        
        <Button 
          size="sm" 
          className="self-center" 
          data-testid={`button-download-featured-${name.toLowerCase().replace(/\s/g, '-')}`}
          onClick={() => window.open('https://getmodsapk.com/', '_blank')}
        >
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </Card>
  );
}
