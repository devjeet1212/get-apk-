import { Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface AppCardProps {
  name: string;
  category: string;
  rating: number;
  description: string;
  version: string;
  size: string;
  imageUrl: string;
  modType: string;
  isUpdated?: boolean;
}

export default function AppCard({
  name,
  category,
  rating,
  description,
  version,
  size,
  imageUrl,
  modType,
  isUpdated = false,
}: AppCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge 
          className="absolute top-2 right-2 bg-primary text-primary-foreground"
          data-testid={`badge-mod-${name.toLowerCase().replace(/\s/g, '-')}`}
        >
          MOD
        </Badge>
        {isUpdated && (
          <Badge 
            className="absolute top-2 left-2 bg-chart-3 text-white"
            data-testid={`badge-updated-${name.toLowerCase().replace(/\s/g, '-')}`}
          >
            Updated
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg line-clamp-1" data-testid={`text-app-name-${name.toLowerCase().replace(/\s/g, '-')}`}>
            {name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-chart-3 text-chart-3" />
              <span className="text-sm font-medium" data-testid={`text-rating-${name.toLowerCase().replace(/\s/g, '-')}`}>
                {rating}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">{category}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{version}</span>
          <span>{size}</span>
        </div>
        
        <div className="space-y-2">
          <div className="text-xs text-primary font-medium">
            {modType}
          </div>
          <Button 
            className="w-full" 
            data-testid={`button-download-${name.toLowerCase().replace(/\s/g, '-')}`}
            onClick={() => window.open('https://getmodsapk.com/', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
    </Card>
  );
}
